/**
 * AI Settings - Provider Selection & API Key Management
 * Keys are stored in localStorage - private to the user's browser only.
 */

const PROVIDERS = {
    pollinations: {
        name: 'Pollinations.ai',
        description: 'Default — No API key needed',
        freeTier: '✅ Completely free, no account',
        keyLink: null,
        keySteps: null
    },
    groq: {
        name: 'Groq',
        description: 'Fastest AI available, excellent free tier',
        freeTier: '✅ Free: 30 req/min, 14,400 req/day (Llama 3.3 70B)',
        keyLink: 'https://console.groq.com/keys',
        keySteps: 'Sign in → click <strong>Create API Key</strong> → copy it here.'
    },
    openrouter: {
        name: 'OpenRouter',
        description: 'Access many free open-source models',
        freeTier: '✅ Free models available (Llama 3.3, Gemma, Mistral)',
        keyLink: 'https://openrouter.ai/settings/keys',
        keySteps: 'Sign in → click <strong>Create Key</strong> → copy it here.'
    }
};

// ── Inject settings button + modal into every page ──────────────────────────
document.addEventListener('DOMContentLoaded', function () {
    injectSettingsButton();
    injectSettingsModal();
});

function injectSettingsButton() {
    const navContainer = document.querySelector('.nav-container');
    if (!navContainer) return;

    const btn = document.createElement('button');
    btn.className = 'btn-settings';
    btn.title = 'AI Settings';
    btn.setAttribute('onclick', 'openSettings()');
    btn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
        <span class="btn-settings-label">AI</span>
    `;
    navContainer.appendChild(btn);

    // Update indicator after inject
    updateSettingsIndicator();
}

function injectSettingsModal() {
    const modal = document.createElement('div');
    modal.id = 'settings-modal';
    modal.className = 'settings-modal-backdrop';
    modal.setAttribute('onclick', 'handleBackdropClick(event)');
    modal.innerHTML = `
        <div class="settings-modal" role="dialog" aria-modal="true" aria-label="AI Settings">
            <div class="settings-header">
                <h2>⚙️ AI Settings</h2>
                <button class="settings-close" onclick="closeSettings()" aria-label="Close">✕</button>
            </div>

            <div class="settings-body">
                <!-- Provider Selection -->
                <div class="settings-section">
                    <label class="settings-label">AI Provider</label>
                    <div class="provider-list" id="provider-list">
                        ${Object.entries(PROVIDERS).map(([key, p]) => `
                        <label class="provider-option" data-provider="${key}">
                            <input type="radio" name="ai-provider" value="${key}" onchange="onProviderChange('${key}')">
                            <div class="provider-info">
                                <div class="provider-name">${p.name}</div>
                                <div class="provider-desc">${p.description}</div>
                                <div class="provider-free">${p.freeTier}</div>
                            </div>
                        </label>`).join('')}
                    </div>
                </div>

                <!-- API Key Input (hidden for Pollinations) -->
                <div class="settings-section" id="key-section" style="display:none;">
                    <label class="settings-label">API Key</label>
                    <div class="key-input-row">
                        <input type="password" id="api-key-input" class="key-input" placeholder="Paste your API key here..." autocomplete="off" spellcheck="false">
                        <button class="key-toggle" onclick="toggleKeyVisibility()" title="Show/hide key">👁</button>
                    </div>

                    <!-- How to get key -->
                    <div class="key-instructions" id="key-instructions"></div>

                    <!-- Balance check (OpenRouter only) -->
                    <div id="balance-section" style="display:none; margin-top:10px;">
                        <button class="key-balance-btn" onclick="checkOpenRouterBalance()" id="balance-btn">📊 Check Balance & Usage</button>
                        <div id="balance-result" class="balance-result"></div>
                    </div>
                </div>

                <!-- Privacy Notice -->
                <div class="settings-privacy">
                    🔒 <strong>Your privacy is protected.</strong> API keys are stored only in <em>this browser</em> using localStorage. They are never sent to our servers, logged, or shared with anyone.
                </div>
            </div>

            <div class="settings-footer">
                <button class="settings-btn-clear" onclick="clearSettings()">🗑 Clear Key</button>
                <button class="settings-btn-save" onclick="saveSettings()">✅ Save & Close</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    // Load saved state
    loadSettingsIntoModal();
}

// ── Modal Control ────────────────────────────────────────────────────────────
function openSettings() {
    loadSettingsIntoModal();
    document.getElementById('settings-modal').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeSettings() {
    document.getElementById('settings-modal').classList.remove('open');
    document.body.style.overflow = '';
}

function handleBackdropClick(event) {
    if (event.target.id === 'settings-modal') closeSettings();
}

// ── Load & Save ──────────────────────────────────────────────────────────────
function loadSettingsIntoModal() {
    let savedProvider = localStorage.getItem('ai-provider') || 'pollinations';
    const savedKey = localStorage.getItem('ai-api-key') || '';

    // If the saved provider no longer exists (e.g. was removed), reset to default
    if (!PROVIDERS[savedProvider]) {
        savedProvider = 'pollinations';
        localStorage.setItem('ai-provider', 'pollinations');
    }

    // Select the right radio
    const radio = document.querySelector(`input[name="ai-provider"][value="${savedProvider}"]`);
    if (radio) radio.checked = true;

    // Show key field if applicable
    document.getElementById('api-key-input').value = savedKey;
    onProviderChange(savedProvider);
}

function saveSettings() {
    const selectedProvider = document.querySelector('input[name="ai-provider"]:checked')?.value || 'pollinations';
    const apiKey = document.getElementById('api-key-input').value.trim();

    localStorage.setItem('ai-provider', selectedProvider);

    if (apiKey) {
        localStorage.setItem('ai-api-key', apiKey);
    } else {
        localStorage.removeItem('ai-api-key');
    }

    updateSettingsIndicator();
    closeSettings();
    showToast(selectedProvider === 'pollinations' ? '✅ Using Pollinations.ai (default)' : `✅ ${PROVIDERS[selectedProvider].name} key saved!`);
}

function clearSettings() {
    localStorage.removeItem('ai-api-key');
    localStorage.setItem('ai-provider', 'pollinations');
    document.getElementById('api-key-input').value = '';
    const radio = document.querySelector('input[name="ai-provider"][value="pollinations"]');
    if (radio) radio.checked = true;
    onProviderChange('pollinations');
    updateSettingsIndicator();
    showToast('🗑 API key cleared. Using Pollinations.ai.');
}

// ── UI Helpers ───────────────────────────────────────────────────────────────
function onProviderChange(providerKey) {
    const provider = PROVIDERS[providerKey];
    const keySection = document.getElementById('key-section');
    const keyInstructions = document.getElementById('key-instructions');

    // Highlight selected option
    document.querySelectorAll('.provider-option').forEach(el => {
        el.classList.toggle('selected', el.dataset.provider === providerKey);
    });

    const balanceSection = document.getElementById('balance-section');

    if (providerKey === 'pollinations') {
        keySection.style.display = 'none';
        if (balanceSection) balanceSection.style.display = 'none';
    } else {
        keySection.style.display = 'block';
        keyInstructions.innerHTML = `
            <div class="key-steps">
                <strong>How to get your key:</strong>
                <ol>
                    <li>${provider.keySteps}</li>
                </ol>
                <a href="${provider.keyLink}" target="_blank" rel="noopener" class="key-link">
                    🔗 Open ${provider.name} API Keys page →
                </a>
            </div>
        `;
        // Show balance button only for OpenRouter
        if (balanceSection) {
            balanceSection.style.display = providerKey === 'openrouter' ? 'block' : 'none';
            document.getElementById('balance-result').innerHTML = '';
        }
    }
}

async function checkOpenRouterBalance() {
    const apiKey = document.getElementById('api-key-input').value.trim()
        || localStorage.getItem('ai-api-key') || '';
    const resultEl = document.getElementById('balance-result');
    const btn = document.getElementById('balance-btn');

    if (!apiKey) {
        resultEl.innerHTML = '<span class="balance-error">⚠️ Enter or save your API key first.</span>';
        return;
    }

    btn.disabled = true;
    btn.textContent = '⏳ Fetching...';
    resultEl.innerHTML = '';

    try {
        const res = await fetch('https://openrouter.ai/api/v1/auth/key', {
            headers: { 'Authorization': `Bearer ${apiKey}` }
        });
        const data = await res.json();

        if (!res.ok || data.error) {
            throw new Error(data.error?.message || 'Failed to fetch');
        }

        const d = data.data;
        const used = typeof d.usage === 'number' ? `$${d.usage.toFixed(4)}` : 'n/a';
        const limit = d.limit ? `$${Number(d.limit).toFixed(2)}` : 'Unlimited';
        const remaining = d.limit ? `$${(d.limit - (d.usage || 0)).toFixed(4)}` : 'Unlimited';
        const isFree = d.is_free_tier;

        resultEl.innerHTML = `
            <div class="balance-info">
                <div class="balance-row">
                    <span>💳 Plan</span>
                    <strong>${isFree ? '🆓 Free Tier' : '💰 Paid'}</strong>
                </div>
                <div class="balance-row">
                    <span>📤 Credits used</span>
                    <strong>${used}</strong>
                </div>
                <div class="balance-row">
                    <span>💰 Remaining</span>
                    <strong>${remaining}</strong>
                </div>
                <div class="balance-row">
                    <span>🔑 Key label</span>
                    <strong>${d.label || '(unnamed)'}</strong>
                </div>
            </div>
        `;
    } catch (e) {
        resultEl.innerHTML = `<span class="balance-error">❌ ${e.message}</span>`;
    } finally {
        btn.disabled = false;
        btn.textContent = '📊 Check Balance & Usage';
    }
}

function toggleKeyVisibility() {
    const input = document.getElementById('api-key-input');
    input.type = input.type === 'password' ? 'text' : 'password';
}

function updateSettingsIndicator() {
    const btn = document.querySelector('.btn-settings');
    if (!btn) return;
    const provider = localStorage.getItem('ai-provider') || 'pollinations';
    const hasKey = !!localStorage.getItem('ai-api-key');
    const label = btn.querySelector('.btn-settings-label');
    if (label) {
        if (hasKey && provider !== 'pollinations') {
            label.textContent = '✓';
            btn.classList.add('active');
        } else {
            label.textContent = 'AI';
            btn.classList.remove('active');
        }
    }
}

function showToast(message) {
    const existing = document.getElementById('settings-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'settings-toast';
    toast.className = 'settings-toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Keyboard support
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        const modal = document.getElementById('settings-modal');
        if (modal && modal.classList.contains('open')) closeSettings();
    }
});
