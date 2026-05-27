import { FadeIn } from '@/Components/ui/FadeIn';

interface Integration {
    name: string;
    type: string;
    description: string;
    icon: React.ReactNode;
}

function IconWhatsApp() {
    return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.553 4.103 1.522 5.83L.057 23.999l6.305-1.654A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.866 9.866 0 01-5.031-1.378l-.361-.214-3.741.981.999-3.648-.235-.374A9.867 9.867 0 012.106 12C2.106 6.536 6.536 2.106 12 2.106c5.465 0 9.894 4.43 9.894 9.894 0 5.465-4.429 9.894-9.894 9.894z" />
        </svg>
    );
}

function IconInstagram() {
    return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
    );
}

function IconFacebook() {
    return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
    );
}

function IconPhone() {
    return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
    );
}

function IconFbAds() {
    return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0" />
        </svg>
    );
}

function IconGoogle() {
    return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
        </svg>
    );
}

function IconCalendar() {
    return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
    );
}

function IconDatabase() {
    return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
    );
}

const integrations: Integration[] = [
    {
        name: 'WhatsApp',
        type: 'Canal de mensagens',
        description: 'Meta Cloud API e 360dialog com suporte a múltiplas contas por empresa. Permite grupos, gerenciamento de participantes, templates aprovados pela Meta, figurinhas e fila de atendimento configurável.',
        icon: <IconWhatsApp />,
    },
    {
        name: 'Instagram',
        type: 'Canal de mensagens',
        description: 'Recepção e envio de mensagens diretas no inbox centralizado do Plenum. O histórico de cada conversa fica vinculado ao contato e ao lead correspondente.',
        icon: <IconInstagram />,
    },
    {
        name: 'Facebook Messenger',
        type: 'Canal de mensagens',
        description: 'Inbox unificado com histórico completo de mensagens vinculado a leads. Atendimento pelo Messenger sem sair do Plenum, com contexto de todas as interações anteriores.',
        icon: <IconFacebook />,
    },
    {
        name: 'Directcall',
        type: 'VoIP',
        description: 'Discagem direta e gravação de chamadas integrada ao sistema. Player de áudio nativo, múltiplas visualizações de histórico e vinculação automática ao contato e ao lead.',
        icon: <IconPhone />,
    },
    {
        name: 'Facebook Ads + CAPI',
        type: 'Marketing',
        description: 'Rastreamento de conversões via Conversions API para atribuição precisa de origem. Cada lead que entra pelo funil pode ser vinculado à campanha, conjunto e anúncio de origem no Facebook Ads.',
        icon: <IconFbAds />,
    },
    {
        name: 'Google Ads',
        type: 'Marketing',
        description: 'Atribuição de origem e rastreamento de conversões para campanhas no Google. Os parâmetros UTM capturados nos links rastreáveis são cruzados com as campanhas ativas.',
        icon: <IconGoogle />,
    },
    {
        name: 'Google Calendar',
        type: 'Agenda',
        description: 'Sincronização bidirecional de eventos entre o Plenum e o Google Calendar. Bloqueios de horário, links de agendamento público e confirmações automáticas refletem na agenda em tempo real.',
        icon: <IconCalendar />,
    },
    {
        name: 'Sempre ERP',
        type: 'ERP',
        description: 'Sincronização de dados externos entre o Sempre ERP e o Plenum. Mantém base de clientes e informações operacionais atualizadas nos dois sistemas sem duplicidade de lançamento.',
        icon: <IconDatabase />,
    },
];

export function IntegrationsDeepSection() {
    return (
        <section className="py-32 max-w-6xl mx-auto px-6">
            <FadeIn className="mb-4">
                <p className="text-xs font-semibold text-[#7B2FFF] tracking-widest uppercase">
                    Integrações
                </p>
            </FadeIn>
            <FadeIn delay={80}>
                <h2
                    className="text-3xl md:text-4xl font-bold text-white mb-3"
                    style={{ fontFamily: '"Bricolage Grotesque", sans-serif', letterSpacing: '-0.02em' }}
                >
                    Conectado ao que sua equipe já usa
                </h2>
                <p className="text-[#9090A8] text-sm mb-16 max-w-xl">
                    Canais de mensagens, plataformas de mídia paga, agenda e ERP — tudo com dados que chegam e saem do Plenum sem exportação manual.
                </p>
            </FadeIn>

            <FadeIn delay={160}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {integrations.map((integration) => (
                        <div
                            key={integration.name}
                            className="flex gap-5 border border-white/8 rounded-2xl p-6 hover:border-white/20 transition-all duration-300"
                        >
                            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center opacity-70">
                                {integration.icon}
                            </div>
                            <div>
                                <div className="flex items-baseline gap-2 mb-1">
                                    <h3 className="text-white font-semibold text-base">{integration.name}</h3>
                                    <span className="text-xs text-[#7B2FFF] font-medium">{integration.type}</span>
                                </div>
                                <p className="text-[#9090A8] text-sm leading-relaxed">{integration.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </FadeIn>

            <FadeIn delay={240} className="text-center mt-12">
                <a
                    href="/integracoes"
                    className="text-sm text-white/50 hover:text-white transition-colors underline underline-offset-4"
                >
                    Ver documentação completa das integrações
                </a>
            </FadeIn>
        </section>
    );
}
