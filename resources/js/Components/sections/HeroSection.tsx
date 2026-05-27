import { Button } from '@/Components/ui/Button';
import { ArrowRight, ChatCircle } from '@phosphor-icons/react';

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-0 overflow-hidden">
            {/* Background glow */}
            <div
                className="hero-glow absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at center, rgba(123,47,255,0.35) 0%, rgba(123,47,255,0.1) 50%, transparent 80%)',
                    filter: 'blur(40px)',
                }}
            />

            {/* Stars */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden>
                {Array.from({ length: 60 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-white"
                        style={{
                            width: Math.random() * 2 + 1 + 'px',
                            height: Math.random() * 2 + 1 + 'px',
                            top: Math.random() * 70 + '%',
                            left: Math.random() * 100 + '%',
                            opacity: Math.random() * 0.4 + 0.1,
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                <h1
                    className="text-5xl md:text-7xl font-extrabold text-white leading-[1.05] tracking-[-0.03em] mb-6"
                    style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
                >
                    Do lead ao fechamento,<br />
                    <span className="text-white/80">sem trocar de aba.</span>
                </h1>

                <p className="text-lg md:text-xl text-[#9090A8] leading-relaxed max-w-2xl mx-auto mb-10">
                    Funil, atendimento, IA e automações em um só lugar — com histórico completo de cada contato.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button variant="primary" size="lg">
                        <ChatCircle size={20} weight="fill" />
                        Falar com a equipe
                    </Button>
                    <Button variant="ghost" size="lg" className="text-[#9090A8]">
                        Ver os módulos
                        <ArrowRight size={18} />
                    </Button>
                </div>
            </div>

            {/* Product screenshot */}
            <div className="relative z-10 mt-16 w-full max-w-5xl mx-auto px-6">
                <div
                    className="rounded-2xl overflow-hidden"
                    style={{
                        boxShadow: '0 0 80px rgba(123,47,255,0.18), 0 40px 80px rgba(0,0,0,0.6)',
                        border: '1px solid rgba(255,255,255,0.1)',
                    }}
                >
                    <img
                        src="/hero-mockup.png"
                        alt="Dashboard do Plenum CRM"
                        className="w-full h-auto block"
                        draggable={false}
                    />
                </div>
            </div>
        </section>
    );
}
