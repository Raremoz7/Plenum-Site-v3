import { FadeIn } from '@/Components/ui/FadeIn';
import { Robot, ArrowRight, Brain, GitBranch, ChartBar } from '@phosphor-icons/react';

function AIPlaygroundMockup() {
    return (
        <div
            className="rounded-xl border border-white/10 overflow-hidden"
            style={{ background: 'linear-gradient(145deg, #120828 0%, #0D0220 100%)', boxShadow: '0 0 60px rgba(123,47,255,0.15)' }}
        >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8">
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <span className="ml-2 text-xs text-white/20">Agente de IA — Playground</span>
            </div>

            <div className="flex h-72">
                {/* Agent config sidebar */}
                <div className="w-40 border-r border-white/8 p-3 space-y-3">
                    <div>
                        <div className="text-[9px] text-white/30 uppercase tracking-wider mb-2">Agente ativo</div>
                        <div className="flex items-center gap-2 rounded-lg p-2" style={{ background: 'rgba(123,47,255,0.12)' }}>
                            <div className="w-6 h-6 rounded-full bg-[#7B2FFF] flex items-center justify-center flex-shrink-0">
                                <Robot size={12} className="text-white" />
                            </div>
                            <div>
                                <div className="text-[10px] font-semibold text-white">Plenum Bot</div>
                                <div className="text-[9px] text-[#7B2FFF]">Ativo</div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-1.5">
                        {['Base de conhecimento', 'Fine-tuning', 'Ferramentas', 'Histórico', 'Datasets'].map((item) => (
                            <div key={item} className="text-[10px] text-white/40 hover:text-white/70 cursor-default px-2 py-1 rounded transition-colors">
                                {item}
                            </div>
                        ))}
                    </div>
                    <div className="rounded-lg p-2" style={{ background: 'rgba(255,255,255,0.04)' }}>
                        <div className="text-[9px] text-white/30 mb-1">Tabulações automáticas</div>
                        <div className="space-y-1">
                            {['Interesse alto', 'Aguardando proposta', 'Fora do perfil'].map((tab) => (
                                <div key={tab} className="text-[9px] text-white/50 flex items-center gap-1">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#7B2FFF]" />
                                    {tab}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Playground chat */}
                <div className="flex-1 flex flex-col">
                    <div className="flex-1 p-3 space-y-2 overflow-hidden">
                        <div className="flex justify-start">
                            <div className="max-w-[80%] rounded-lg px-3 py-2 text-[10px] leading-relaxed" style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.7)' }}>
                                Oi! Gostaria de saber mais sobre o plano para a minha empresa.
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <div className="max-w-[80%] rounded-lg px-3 py-2 text-[10px] leading-relaxed" style={{ background: 'rgba(123,47,255,0.25)', color: '#E0D0FF' }}>
                                Olá! Fico feliz em ajudar. Para indicar a melhor opção, pode me dizer quantas pessoas usariam o sistema e quais canais você usa hoje para atender clientes?
                            </div>
                        </div>
                        <div className="flex justify-start">
                            <div className="max-w-[80%] rounded-lg px-3 py-2 text-[10px] leading-relaxed" style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.7)' }}>
                                Somos 8 pessoas e usamos WhatsApp e e-mail.
                            </div>
                        </div>
                        <div className="flex items-start gap-2">
                            <div className="w-5 h-5 rounded-full bg-[#7B2FFF] flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Robot size={10} className="text-white" />
                            </div>
                            <div className="flex items-center gap-1.5 rounded-lg px-3 py-2" style={{ background: 'rgba(255,255,255,0.05)' }}>
                                <div className="w-1 h-1 rounded-full bg-[#7B2FFF] animate-bounce" style={{ animationDelay: '0ms' }} />
                                <div className="w-1 h-1 rounded-full bg-[#7B2FFF] animate-bounce" style={{ animationDelay: '150ms' }} />
                                <div className="w-1 h-1 rounded-full bg-[#7B2FFF] animate-bounce" style={{ animationDelay: '300ms' }} />
                            </div>
                        </div>
                    </div>

                    <div className="px-3 py-2 border-t border-white/8 flex items-center gap-2">
                        <div className="flex-1 rounded-lg px-3 py-2" style={{ background: 'rgba(255,255,255,0.05)' }}>
                            <span className="text-[10px] text-white/20">Testar uma mensagem...</span>
                        </div>
                        <div className="w-7 h-7 rounded-lg bg-[#7B2FFF] flex items-center justify-center flex-shrink-0">
                            <ArrowRight size={12} className="text-white" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function FeatureAISection() {
    return (
        <section className="py-32 max-w-6xl mx-auto px-6">
            <FadeIn className="text-center mb-16">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <Robot size={18} className="text-[#7B2FFF]" weight="fill" />
                    <span className="text-xs font-semibold text-[#7B2FFF] tracking-wider uppercase">Inteligência & IA</span>
                </div>
                <h2
                    className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5 max-w-2xl mx-auto"
                    style={{ fontFamily: '"Bricolage Grotesque", sans-serif', letterSpacing: '-0.02em' }}
                >
                    Agentes que atendem, categorizam e sugerem
                </h2>
                <p className="text-[#9090A8] leading-relaxed text-base max-w-xl mx-auto">
                    Configure base de conhecimento, fine-tuning e ferramentas. Tabulação automática de atendimentos. Playground com resposta em tempo real. Clone de agente com um clique.
                </p>
            </FadeIn>

            <FadeIn delay={100}>
                <AIPlaygroundMockup />
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                {[
                    {
                        icon: <Brain size={20} weight="fill" className="text-[#7B2FFF]" />,
                        title: 'Base de conhecimento própria',
                        desc: 'Alimente o agente com conteúdo da sua empresa. Ele responde com as informações certas, sem improvisar.',
                    },
                    {
                        icon: <GitBranch size={20} weight="fill" className="text-[#7B2FFF]" />,
                        title: 'Flow Builder visual',
                        desc: 'Canvas de arrastar e soltar com gatilhos por evento, condição e mudança de etapa. Histórico completo de execução.',
                    },
                    {
                        icon: <ChartBar size={20} weight="fill" className="text-[#7B2FFF]" />,
                        title: 'ROI e rastreamento',
                        desc: 'Links com parâmetros UTM, atribuição de origem de leads, integração com Facebook Ads e Google Ads.',
                    },
                ].map(({ icon, title, desc }) => (
                    <FadeIn key={title} className="rounded-xl p-6 border border-white/8" style={{ background: 'rgba(255,255,255,0.03)' }}>
                        <div className="mb-4">{icon}</div>
                        <h3 className="text-sm font-semibold text-white mb-2"
                            style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
                        >
                            {title}
                        </h3>
                        <p className="text-sm text-[#9090A8] leading-relaxed">{desc}</p>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
}
