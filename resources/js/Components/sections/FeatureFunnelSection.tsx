import { FadeIn } from '@/Components/ui/FadeIn';
import { ArrowRight, Funnel, Robot, UsersThree } from '@phosphor-icons/react';

function KanbanMockup() {
    const stages = [
        { label: 'Prospecção', count: 12, color: '#9090A8' },
        { label: 'Qualificação', count: 8, color: '#7B2FFF' },
        { label: 'Proposta', count: 5, color: '#7B2FFF' },
    ];

    return (
        <div
            className="rounded-xl border border-white/10 overflow-hidden"
            style={{ background: 'linear-gradient(145deg, #120828 0%, #0D0220 100%)', boxShadow: '0 0 60px rgba(123,47,255,0.12)' }}
        >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8">
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <span className="ml-2 text-xs text-white/20">Funil — Equipe Comercial</span>
            </div>
            <div className="p-4 flex gap-3 overflow-x-auto">
                {stages.map((stage) => (
                    <div key={stage.label} className="flex-shrink-0 w-52">
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-semibold" style={{ color: stage.color }}>{stage.label}</span>
                            <span className="text-xs text-white/30 font-mono">{stage.count}</span>
                        </div>
                        <div className="space-y-2">
                            {Array.from({ length: stage === stages[0] ? 3 : stage === stages[1] ? 3 : 2 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="rounded-lg p-3 border border-white/8"
                                    style={{ background: 'rgba(255,255,255,0.04)' }}
                                >
                                    <div className="h-1.5 rounded-full bg-white/20 mb-2" style={{ width: `${60 + i * 15}%` }} />
                                    <div className="h-1.5 rounded-full bg-white/10 mb-3" style={{ width: `${40 + i * 10}%` }} />
                                    <div className="flex items-center justify-between">
                                        <div className="flex -space-x-1">
                                            <div className="w-4 h-4 rounded-full border border-[#120828]" style={{ background: '#7B2FFF' }} />
                                            <div className="w-4 h-4 rounded-full border border-[#120828]" style={{ background: '#9B4FFF' }} />
                                        </div>
                                        <div className="h-1.5 w-12 rounded-full bg-white/8" />
                                    </div>
                                </div>
                            ))}
                            {stage === stages[2] && (
                                <div
                                    className="rounded-lg p-3 border border-[#7B2FFF]/30 flex items-center gap-2"
                                    style={{ background: 'rgba(123,47,255,0.08)' }}
                                >
                                    <Robot size={14} className="text-[#7B2FFF]" />
                                    <span className="text-[10px] text-[#7B2FFF]">Sugestão por IA disponível</span>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* AI suggestion bar */}
            <div className="mx-4 mb-4 mt-2 rounded-lg p-3 border border-[#7B2FFF]/20 flex items-center gap-3" style={{ background: 'rgba(123,47,255,0.06)' }}>
                <Robot size={16} className="text-[#7B2FFF] flex-shrink-0" />
                <div className="flex-1">
                    <div className="text-[11px] text-[#7B2FFF] font-medium">Critério sugerido por IA para "Proposta"</div>
                    <div className="text-[10px] text-white/40 mt-0.5">Leads com CNPJ ativo, contato direto com decisor e orçamento confirmado</div>
                </div>
            </div>
        </div>
    );
}

export function FeatureFunnelSection() {
    return (
        <section id="modulos" className="py-32 max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
                <FadeIn direction="left" className="order-2 md:order-1">
                    <div className="flex items-center gap-2 mb-6">
                        <Funnel size={18} className="text-[#7B2FFF]" weight="fill" />
                        <span className="text-xs font-semibold text-[#7B2FFF] tracking-wider uppercase">Operação comercial</span>
                    </div>
                    <h2
                        className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5"
                        style={{ fontFamily: '"Bricolage Grotesque", sans-serif', letterSpacing: '-0.02em' }}
                    >
                        Pipeline que não some no meio da negociação
                    </h2>
                    <p className="text-[#9090A8] leading-relaxed mb-8 text-base">
                        Kanban visual por etapa. Critérios de entrada sugeridos por IA. Contagem de leads em tempo real. Múltiplos funis por empresa — sem misturar operações diferentes.
                    </p>
                    <ul className="space-y-4 mb-8">
                        {[
                            { icon: <Funnel size={16} weight="fill" />, text: 'Visualizações: lista, grid, timeline e kanban' },
                            { icon: <Robot size={16} weight="fill" />, text: 'Critérios de entrada de etapa sugeridos por IA' },
                            { icon: <UsersThree size={16} weight="fill" />, text: 'Múltiplos perfis de pipeline por empresa' },
                        ].map(({ icon, text }) => (
                            <li key={text} className="flex items-start gap-3">
                                <span className="text-[#7B2FFF] mt-0.5 flex-shrink-0">{icon}</span>
                                <span className="text-sm text-white/70">{text}</span>
                            </li>
                        ))}
                    </ul>
                    <a href="#contato" className="inline-flex items-center gap-2 text-sm text-[#7B2FFF] hover:text-[#9B4FFF] font-medium transition-colors">
                        Ver todos os módulos <ArrowRight size={16} />
                    </a>
                </FadeIn>

                <FadeIn direction="right" className="order-1 md:order-2">
                    <KanbanMockup />
                </FadeIn>
            </div>
        </section>
    );
}
