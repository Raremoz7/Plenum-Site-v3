import { FadeIn } from '@/Components/ui/FadeIn';
import { ArrowRight, ChatCircle, EnvelopeSimple, Phone } from '@phosphor-icons/react';

function InboxMockup() {
    const conversations = [
        { name: 'Marcos Ferreira', preview: 'Pode me enviar a proposta até hoje?', time: '14:32', unread: 2, active: true },
        { name: 'Ana Lima', preview: 'Ótimo! Vamos agendar para sexta.', time: '13:18', unread: 0, active: false },
        { name: 'Roberto Souza', preview: 'Preciso de mais informações sobre...', time: '11:05', unread: 1, active: false },
        { name: 'Camila Torres', preview: 'Obrigada pelo retorno rápido!', time: '10:47', unread: 0, active: false },
    ];

    const messages = [
        { from: 'them', text: 'Oi! Vi a demonstração e fiquei com interesse. Pode me explicar como funciona o módulo de IA?' },
        { from: 'me', text: 'Claro! Os agentes são configuráveis com base de conhecimento própria e funcionam diretamente no WhatsApp.' },
        { from: 'them', text: 'Pode me enviar a proposta até hoje?' },
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
                <span className="ml-2 text-xs text-white/20">Inbox — WhatsApp</span>
            </div>

            <div className="flex h-80">
                {/* Conversation list */}
                <div className="w-44 border-r border-white/8 overflow-hidden">
                    {conversations.map((conv) => (
                        <div
                            key={conv.name}
                            className="px-3 py-2.5 border-b border-white/5 cursor-default"
                            style={{ background: conv.active ? 'rgba(123,47,255,0.1)' : 'transparent' }}
                        >
                            <div className="flex items-center justify-between mb-0.5">
                                <span className="text-[11px] font-semibold text-white/80 truncate">{conv.name}</span>
                                <span className="text-[9px] text-white/30 ml-1 flex-shrink-0">{conv.time}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-[10px] text-white/40 truncate w-28">{conv.preview}</span>
                                {conv.unread > 0 && (
                                    <span className="flex-shrink-0 w-4 h-4 rounded-full bg-[#7B2FFF] text-white text-[9px] flex items-center justify-center font-bold">
                                        {conv.unread}
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Chat window */}
                <div className="flex-1 flex flex-col">
                    <div className="px-4 py-2.5 border-b border-white/8 flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#7B2FFF]/40 flex items-center justify-center">
                            <span className="text-[10px] font-bold text-white">M</span>
                        </div>
                        <div>
                            <div className="text-xs font-semibold text-white">Marcos Ferreira</div>
                            <div className="text-[9px] text-[#7B2FFF]">Lead — Proposta</div>
                        </div>
                    </div>

                    <div className="flex-1 p-3 space-y-2 overflow-hidden">
                        {messages.map((msg, i) => (
                            <div key={i} className={`flex ${msg.from === 'me' ? 'justify-end' : 'justify-start'}`}>
                                <div
                                    className="max-w-[75%] rounded-lg px-3 py-2 text-[10px] leading-relaxed"
                                    style={{
                                        background: msg.from === 'me' ? 'rgba(123,47,255,0.3)' : 'rgba(255,255,255,0.07)',
                                        color: msg.from === 'me' ? '#E0D0FF' : 'rgba(255,255,255,0.7)',
                                    }}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="px-3 py-2 border-t border-white/8">
                        <div className="flex items-center gap-2 rounded-lg px-3 py-2" style={{ background: 'rgba(255,255,255,0.05)' }}>
                            <span className="text-[10px] text-white/25 flex-1">Resposta rápida ou mensagem livre...</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function FeatureChatSection() {
    return (
        <section className="py-32 max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
                <FadeIn direction="left">
                    <InboxMockup />
                </FadeIn>

                <FadeIn direction="right">
                    <div className="flex items-center gap-2 mb-6">
                        <ChatCircle size={18} className="text-[#7B2FFF]" weight="fill" />
                        <span className="text-xs font-semibold text-[#7B2FFF] tracking-wider uppercase">Comunicação & Atendimento</span>
                    </div>
                    <h2
                        className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5"
                        style={{ fontFamily: '"Bricolage Grotesque", sans-serif', letterSpacing: '-0.02em' }}
                    >
                        WhatsApp, e-mail e ligação no mesmo histórico
                    </h2>
                    <p className="text-[#9090A8] leading-relaxed mb-8 text-base">
                        Inbox centralizado com contexto do lead ao lado. Templates Meta aprovados. Gravação de chamadas via Directcall. Tudo vinculado ao contato — sem procurar em três sistemas.
                    </p>
                    <ul className="space-y-4 mb-8">
                        {[
                            { icon: <ChatCircle size={16} weight="fill" />, text: 'Múltiplas contas WhatsApp por empresa, com grupos e figurinhas' },
                            { icon: <EnvelopeSimple size={16} weight="fill" />, text: 'E-mail com editor rico, pastas e templates padronizados' },
                            { icon: <Phone size={16} weight="fill" />, text: 'Histórico de ligações com gravação e player integrado' },
                        ].map(({ icon, text }) => (
                            <li key={text} className="flex items-start gap-3">
                                <span className="text-[#7B2FFF] mt-0.5 flex-shrink-0">{icon}</span>
                                <span className="text-sm text-white/70">{text}</span>
                            </li>
                        ))}
                    </ul>
                    <a href="#contato" className="inline-flex items-center gap-2 text-sm text-[#7B2FFF] hover:text-[#9B4FFF] font-medium transition-colors">
                        Ver o módulo de comunicação <ArrowRight size={16} />
                    </a>
                </FadeIn>
            </div>
        </section>
    );
}
