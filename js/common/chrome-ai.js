/**
 * Chrome AI Integration for Check Answer
 */
const chromeAI = {
    isAvailable: false,
    session: null,

    async init() {
        if (window.ai && window.ai.languageModel) {
            try {
                const capabilities = await window.ai.languageModel.capabilities();
                if (capabilities.available === 'readily') {
                    this.isAvailable = true;
                    console.log('chromeAI: Ready');
                    return true;
                }
            } catch (e) {
                console.error('chromeAI: Error', e);
            }
        }
        return false;
    },

    async checkText(text, context) {
        if (!this.isAvailable) await this.init();

        if (!this.isAvailable) {
            return "Chrome AI is not available in this browser. Please use Chrome Canary or Dev with Experimental AI enabled.";
        }

        try {
            if (!this.session) {
                this.session = await window.ai.languageModel.create({
                    systemPrompt: "You are a Dutch language tutor. Analyze the student's text based on the given context. Find grammar mistakes and suggest improvements. Be concise and encouraging."
                });
            }

            const prompt = `Context: ${context}\n\nStudent Text: "${text}"\n\nTask: Analyze for grammar and relevance. Provide feedback in English.`;

            const stream = this.session.promptStreaming(prompt);
            let fullResponse = '';
            for await (const chunk of stream) {
                fullResponse = chunk;
            }
            return fullResponse;

        } catch (e) {
            console.error('chromeAI: Analysis failed', e);
            return "Error analyzing text with AI.";
        }
    }
};
