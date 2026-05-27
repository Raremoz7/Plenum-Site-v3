import { FadeIn } from '@/Components/ui/FadeIn';
import { Button } from '@/Components/ui/Button';
import { CalendarBlank, WhatsappLogo } from '@phosphor-icons/react';

export function CTASection() {
    return (
        <section id="contato" className="py-16 px-6 max-w-6xl mx-auto mb-8">
            <FadeIn>
                <div
                    className="relative rounded-2xl overflow-hidden px-8 md:px-16 py-16 md:py-24 text-center"
                    style={{
                        background: 'linear-gradient(135deg, #120828 0%, #1a0840 50%, #120828 100%)',
                        border: '1px solid rgba(123,47,255,0.25)',
                        boxShadow: '0 0 80px rgba(123,47,255,0.12), inset 0 0 80px rgba(123,47,255,0.05)',
                    }}
                >
                    {/* Grid lines */}
                    <div
                        className="absolute inset-0 opacity-10 pointer-events-none"
                        style={{
                            backgroundImage: 'linear-gradient(rgba(123,47,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(123,47,255,0.3) 1px, transparent 1px)',
                            backgroundSize: '48px 48px',
                        }}
                    />

                    {/* Glow */}
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-48 pointer-events-none"
                        style={{
                            background: 'radial-gradient(ellipse at center, rgba(123,47,255,0.25) 0%, transparent 70%)',
                            filter: 'blur(20px)',
                        }}
                    />

                    <div className="relative z-10">
                        <h2
                            className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight"
                            style={{ fontFamily: '"Bricolage Grotesque", sans-serif', letterSpacing: '-0.03em' }}
                        >
                            Veja o Plenum funcionando<br />na sua operação.
                        </h2>
                        <p className="text-[#9090A8] text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                            Converse com a equipe e entenda como cada módulo se encaixa no seu processo.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button variant="primary" size="lg">
                                <CalendarBlank size={20} />
                                Agendar conversa
                            </Button>
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
                            >
                                <WhatsappLogo size={18} />
                                ou fale pelo WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </section>
    );
}
