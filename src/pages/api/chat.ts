// export const prerender = false; // Ensure this endpoint is server-side rendered

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
    try {
        const { message } = await request.json();
        const apiKey = import.meta.env.GROQ_API_KEY;

        if (!apiKey) {
            // Mock flow if no API key
            await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate delay
            return new Response(JSON.stringify({
                response: "This is a simulated reflection. Since no API key was provided, I cannot generate a real response. However, imagine a profound insight here derived from: \"" + message + "\""
            }), { status: 200 });
        }

        // Actual Groq API call
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: "llama3-70b-8192",
                messages: [
                    { role: "system", content: "You are a reflective journaling assistant. Your goal is to help the user find clarity. Be concise, insightful, and empathetic." },
                    { role: "user", content: message }
                ],
                temperature: 0.7,
                max_tokens: 300
            })
        });

        if (!response.ok) {
            throw new Error(`Groq API Error: ${response.statusText}`);
        }

        const data = await response.json();
        const completion = data.choices[0]?.message?.content || "I couldn't generate a reflection at this time.";

        return new Response(JSON.stringify({
            response: completion
        }), { status: 200 });

    } catch (error) {
        console.error('Chat API Error:', error);
        return new Response(JSON.stringify({
            error: 'Failed to process request'
        }), { status: 500 });
    }
};
