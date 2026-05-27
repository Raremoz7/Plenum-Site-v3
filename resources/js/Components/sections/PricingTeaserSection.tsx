import { FadeIn } from '@/Components/ui/FadeIn';
import { Button } from '@/Components/ui/Button';

export function PricingTeaserSection() {
    return (
        <section className="bg-[#120828] border-y border-white/8 py-24">
            <div className="max-w-6xl mx-auto px-6">
                <FadeIn className="max-w-2xl">
                    <p className="text-xs font-semibold text-[#7B2FFF] tracking-widest uppercase mb-4">
                        Preços
                    </p>
                    <h2
                        className="text-3xl md:text-4xl font-bold text-white mb-3"
                        style={{ fontFamily: '"Bricolage Grotesque", sans-serif', letterSpacing: '-0.02em' }}
                    >
                        Um plano. Sem surpresas.
                    </h2>
                    <p className="text-[#9090A8] text-base mb-8">
                        Por usuário, por mês. Todos os módulos incluídos desde o primeiro dia.
                    </p>
                </FadeIn>

                <FadeIn delay={120} className="flex flex-col sm:flex-row items-start sm:items-end gap-8">
                    <div>
                        <div className="flex items-end gap-2">
                            <span
                                className="text-white font-extrabold leading-none"
                                style={{
                                    fontFamily: '"Bricolage Grotesque", sans-serif',
                                    fontSize: 'clamp(56px, 8vw, 80px)',
                                    letterSpacing: '-0.04em',
                                }}
                            >
                                R$ —,—
                            </span>
                            <span className="text-[#9090A8] text-base mb-3">/usuário/mês</span>
                        </div>
                        <p className="text-[#9090A8] text-xs italic mt-2">
                            Valor disponível mediante contato com a equipe
                        </p>
                    </div>

                    <div className="pb-1">
                        <a href="/precos">
                            <Button variant="primary" size="md">
                                Ver o que está incluído
                            </Button>
                        </a>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
