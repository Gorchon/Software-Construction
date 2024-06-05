const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

async function getResponseChatGemini(req, res) {
    const { prompt } = req.body;
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        return res.json({ response: text });
    } catch (err) {
        console.log('Error getting response from Gemini', err);
        return res.status(500).json({ error: 'Error getting response from Gemini' });
    }
}

module.exports = { getResponseChatGemini };
