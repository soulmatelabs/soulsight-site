import { useState } from 'preact/hooks';

export default function Demo() {
    /* 
    Logic preserved for future use or external migration:
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: Event) => {
        e.preventDefault();
        if (!input.trim()) return;
        setLoading(true);
        setResponse('');
        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: input }),
            });
            if (!res.ok) throw new Error('Failed to fetch');
            const data = await res.json();
            setResponse(data.response);
        } catch (err) {
            setResponse("Error connecting...");
        } finally {
            setLoading(false);
        }
    };
    */

    return (
        <section id="demo" class="py-32 flex flex-col justify-center items-center bg-white relative z-10">
            <div class="w-full max-w-4xl px-6 text-center space-y-12">
                <div class="space-y-4 animate-fade-in">
                    <h2 class="font-heading text-5xl md:text-6xl text-[var(--color-secondary)] leading-tight">
                        The Mirror
                    </h2>
                    <p class="font-body text-xl text-gray-600 max-w-2xl mx-auto">
                        Experience near-instant clarity. Our specialized mirrors are designed to reflect your thoughts back with unprecedented depth and precision.
                    </p>
                </div>

                <div class="flex flex-col items-center space-y-6">
                    <a
                        href="#external-demo-url"
                        id="reflect-cta"
                        class="group relative inline-flex items-center justify-center px-12 py-5 font-body font-bold text-lg tracking-wide text-white bg-[var(--color-accent)] rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]"
                    >
                        <span class="relative z-10 uppercase">Reflect</span>
                        <div class="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    </a>

                    <p class="text-xs text-gray-400 uppercase tracking-[0.2em]">
                        External Interactive Experience
                    </p>
                </div>
            </div>
        </section>
    );
}

