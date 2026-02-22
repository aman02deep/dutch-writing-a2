/**
 * AI Roleplay Chat Module
 * Injects a floating action button on supported pages and manages the chat UI/context.
 */

class AIRoleplay {
    constructor() {
        this.isEnabled = localStorage.getItem('ai-roleplay-enabled') !== 'false'; // Default true
        this.isOpen = false;
        // The conversation history sent to the API
        this.messages = [];
        this.systemPrompt = "You are a helpful Dutch AI tutor.";

        // Wait for DOM
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.init());
        } else {
            this.init();
        }

        // Listen for global settings changes
        window.addEventListener('ai-settings-changed', () => {
            this.isEnabled = localStorage.getItem('ai-roleplay-enabled') !== 'false'; // Default true
            this.destroy(); // Clean up existing UI if any
            if (this.isEnabled) {
                this.init();
            }
        });
    }

    destroy() {
        const fab = document.getElementById('roleplay-fab');
        const sidebar = document.getElementById('roleplay-sidebar');
        if (fab) fab.remove();
        if (sidebar) sidebar.remove();
        this.isOpen = false;
        this.messages = [];
    }

    init() {
        if (!this.isEnabled) return;

        // Check if page has roleplay configuration globally available
        if (!window.roleplayConfig) return;

        // Prevent double initialization (e.g., from competing DOMContentLoaded events)
        if (document.getElementById('roleplay-fab')) return;

        this.systemPrompt = window.roleplayConfig.systemPrompt;
        this.buttonText = window.roleplayConfig.buttonText || "Practice this scenario";

        this.injectUI();
        this.setupListeners();
    }

    injectUI() {
        // Find or create global fab container
        const fabContainer = getOrCreateFabContainer();

        // Floating button (Unified FAB styling)
        const btn = document.createElement('button');
        btn.className = 'fab-item fab-orange';
        btn.id = 'roleplay-fab';
        btn.title = this.buttonText;
        btn.innerHTML = '🗣️';
        btn.onclick = () => this.toggleChat();
        fabContainer.appendChild(btn);


        // Sidebar Chat UI
        const sidebar = document.createElement('div');
        sidebar.className = 'roleplay-sidebar';
        sidebar.id = 'roleplay-sidebar';

        sidebar.innerHTML = `
            <div class="roleplay-header">
                <h3>🗣️ AI Roleplay</h3>
                <button class="roleplay-close" id="roleplay-close">✕</button>
            </div>
            <div class="roleplay-body" id="roleplay-body">
            </div>
            <div class="roleplay-input-area">
                <textarea id="roleplay-input" placeholder="Type in Dutch..." rows="2"></textarea>
                <button id="roleplay-send" title="Send">➤</button>
            </div>
        `;
        document.body.appendChild(sidebar);
    }

    setupListeners() {
        document.getElementById('roleplay-close').addEventListener('click', () => this.toggleChat());

        const input = document.getElementById('roleplay-input');
        const sendBtn = document.getElementById('roleplay-send');

        sendBtn.addEventListener('click', () => this.handleSend());

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.handleSend();
            } else if (e.key === 'Escape') {
                e.preventDefault();
                if (this.isOpen) this.toggleChat();
            }
        });
    }

    toggleChat() {
        this.isOpen = !this.isOpen;
        const sidebar = document.getElementById('roleplay-sidebar');
        if (this.isOpen) {
            sidebar.classList.add('open');
            document.getElementById('roleplay-input').focus();

            // If it's the first time opening, and we have no history, push system prompt
            if (this.messages.length === 0) {
                this.messages.push({ role: 'system', content: this.systemPrompt });
                // Add title card to UI
                this.appendMessage('system', `<strong>Scenario:</strong> ${window.roleplayConfig.scenarioDesc}<br><em>Type anything to begin!</em>`);

                // Inject an invisible user message to prevent 400 Bad Request on strict AI models (OpenRouter)
                this.messages.push({ role: 'user', content: 'Hallo! Ik ben klaar om te beginnen. Start het gesprek.' });

                // Trigger AI to start the dialogue
                this.triggerAIStart();
            }
        } else {
            sidebar.classList.remove('open');
        }
    }

    appendMessage(role, content) {
        const body = document.getElementById('roleplay-body');
        const msgDiv = document.createElement('div');
        msgDiv.className = `roleplay-message ${role}`;

        // Convert basic markdown/newlines to HTML
        let displayContent = content.replace(/\n/g, '<br>');

        msgDiv.innerHTML = displayContent;
        body.appendChild(msgDiv);
        body.scrollTop = body.scrollHeight;

        // Store in history
        if (role !== 'system') {
            this.messages.push({ role, content });
        }
    }

    addTypingIndicator() {
        const body = document.getElementById('roleplay-body');
        const typingDiv = document.createElement('div');
        typingDiv.className = 'roleplay-message assistant typing-indicator';
        typingDiv.id = 'roleplay-typing';
        typingDiv.innerHTML = '<span>.</span><span>.</span><span>.</span>';
        body.appendChild(typingDiv);
        body.scrollTop = body.scrollHeight;
    }

    removeTypingIndicator() {
        const el = document.getElementById('roleplay-typing');
        if (el) el.remove();
    }

    async handleSend() {
        const input = document.getElementById('roleplay-input');
        const text = input.value.trim();
        if (!text) return;

        input.value = '';
        this.appendMessage('user', text);
        this.addTypingIndicator();

        // Call the enhanced AI service
        await this.fetchReply();
    }

    async triggerAIStart() {
        this.addTypingIndicator();
        await this.fetchReply();
    }

    async fetchReply() {
        try {
            // Need to pass the entire message array to support memory
            // aiService.fetchAIChat is a new method we need to add to aiService
            if (typeof aiService.fetchAIChat === 'function') {
                const reply = await aiService.fetchAIChat(this.messages);
                this.removeTypingIndicator();
                this.appendMessage('assistant', reply);
            } else {
                // Fallback if aiService doesn't support chat arrays yet
                let fullPrompt = this.systemPrompt + "\n\n";
                for (let i = 0; i < this.messages.length; i++) {
                    fullPrompt += this.messages[i].role + ": " + this.messages[i].content + "\n";
                }
                fullPrompt += "\nassistant:";
                const reply = await aiService.fetchAI(fullPrompt);
                this.removeTypingIndicator();
                this.appendMessage('assistant', reply);
            }
        } catch (err) {
            console.error(err);
            this.removeTypingIndicator();
            this.appendMessage('system', 'Error: Could not reach AI provider. Ensure your API key is correct in settings.');
        }
    }
}

// Instantiate globally
window.aiRoleplay = new AIRoleplay();
