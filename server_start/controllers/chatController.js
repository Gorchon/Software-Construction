require('dotenv').config();
const OpenAI = require('openai');

async function getResponseChat(req, res) {
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const { prompt } = req.body;
    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: 'system',
                    content: 'You are an expert on why there were so many brothels in Pompeii.',
                },
                {
                    role: 'user',
                    content: prompt,
                },
            ],
            stream: true,
        });

        let responseText = '';
        for await (const chunk of completion) {
            responseText += chunk.choices[0].message.content || '';
        }
        return res.json({ response: responseText });
    } catch (err) {
        console.log('Error getting response from chat API', err);
        res.status(500).send('Error getting response from chat');
    }
}

module.exports = { getResponseChat };
