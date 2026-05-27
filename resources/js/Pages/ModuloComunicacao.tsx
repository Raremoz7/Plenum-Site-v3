import { useState, useRef, useEffect } from 'react';
import { Navbar } from '@/Components/layout/Navbar';
import { Footer } from '@/Components/layout/Footer';
import { SEOHead } from '@/Components/ui/SEOHead';
import { FadeIn } from '@/Components/ui/FadeIn';
import { Plus, Minus } from '@phosphor-icons/react';

interface ModuleBlock {
    name: string;
    description: string;
    bullets: string[];
}

const modules: ModuleBlock[] = [
    {
        name: 'Chat WhatsApp',
        description: 'Inbox centralizado com suporte a múltiplas contas WhatsApp por empresa via Meta Cloud API e 360dialog. Grupos, templates aprovados pela Meta, figurinhas e fila de atendimento configurável — tudo sem sair do Plenum.',
        bullets: [
            'Múltiplas contas WhatsApp por empresa',
            'Suporte a grupos e gerenciamento de participantes',
            'Templates Meta com controle de aprovação',
            'Fila de atendimento configurável por equipe',
            'Figurinhas e envio de mídia no inbox',
        ],
    },
    {
        name: 'E-mail',
        description: 'Envio e recebimento de e-mails com histórico vinculado ao contato e ao lead. Editor rico com formatação completa e pastas organizáveis para manter o inbox organizado.',
        bullets: [
            'Envio e recebimento no inbox do Plenum',
            'Histórico vinculado ao contato e ao lead',
            'Editor rico com formatação',
            'Pastas e organização do inbox',
        ],
    },
    {
        name: 'Chamadas',
        description: 'Discagem e gravação de chamadas via Directcall, com player de áudio integrado ao sistema. Cada chamada é vinculada automaticamente ao contato e ao lead, com histórico de todas as ligações acessível por múltiplas visualizações.',
        bullets: [
            'Discagem direta via Directcall',
            'Gravação automática de chamadas',
            'Player de áudio integrado',
            'Histórico de chamadas por contato e lead',
        ],
    },
    {
        name: 'Tickets',
        description: 'Gestão de chamados com estados configuráveis por empresa e categorias personalizáveis. Cada ticket fica vinculado ao contato para contexto completo durante o atendimento.',
        bullets: [
            'Estados de ticket configuráveis por empresa',
            'Categorias personalizáveis',
            'Vinculação a contatos com histórico completo',
        ],
    },
    {
        name: 'Campanhas',
        description: 'Criação e gestão de campanhas de mensagens com controle de status: ativo, pausado e arquivado. Segmentação por base de contatos e acompanhamento de entrega.',
        bullets: [
            'Criação de campanhas de mensagens em massa',
            'Status ativo, pausado e arquivado',
            'Segmentação por base de contatos',
        ],
    },
];

interface FAQItemProps {
    question: string;
    answer: string;
    index: number;
}

function FAQItem({ question, answer, index }: FAQItemProps) {
    const [open, setOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = contentRef.current;
        if (!el) return;
        el.style.maxHeight = open ? el.scrollHeight + 'px' : '0';
    }, [open]);

    return (
        <div className="border-b border-white/8 last:border-b-0" style={{ animationDelay: `${index * 60}ms` }}>
            <button
                className="w-full flex items-center justify-between py-6 text-left group"
                onClick={() => setOpen(!open)}
            >
                <span className="text-base font-medium text-white/80 group-hover:text-white transition-colors pr-8">
                    {question}
                </span>
                <span className="flex-shrink-0 text-[#7B2FFF]">
                    {open ? <Minus size={20} /> : <Plus size={20} />}
                </span>
            </button>
            <div ref={contentRef} className="overflow-hidden transition-all duration-300" style={{ maxHeight: '0' }}>
                <p className="text-[#9090A8] leading-relaxed pb-6 text-sm max-w-2xl">{answer}</p>
            </div>
        </div>
    );
}

const faqs = [
    {
        question: 'Quantas contas de WhatsApp posso conectar?',
        answer: 'Não há limite fixo de contas por padrão. O Plenum suporta múltiplas contas WhatsApp por empresa via Meta Cloud API e 360dialog. O número exato de contas simultâneas pode ser definido conforme as necessidades da operação na ativação.',
    },
    {
        question: 'Os templates precisam ser aprovados pela Meta?',
        answer: 'Sim. Os templates de mensagem para WhatsApp passam pelo processo de aprovação da Meta antes de poderem ser enviados. O Plenum exibe o status de aprovação de cada template diretamente no módulo, e você pode reutilizá-los em campanhas e atendimentos individuais.',
    },
    {
        question: 'As chamadas ficam gravadas por quanto tempo?',
        answer: 'As gravações ficam armazenadas no sistema e acessíveis pelo player integrado. O período de retenção pode ser definido conforme a política da empresa. Cada gravação é vinculada automaticamente ao contato e ao lead para fácil localização.',
    },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
};

export default function ModuloComunicacao() {
    return (
        <>
            <SEOHead
                title="CRM com WhatsApp, E-mail e Chamadas | Plenum CRM"
                description="Inbox centralizado com WhatsApp (múltiplas contas, templates Meta), e-mail com editor rico, gravação de chamadas via Directcall e histórico unificado por contato."
                canonical="https://plenum.com.br/modulos/comunicacao"
                jsonLd={jsonLd}
            />
            <Navbar />
            <main className="pt-24 pb-32">
                <div className="max-w-6xl mx-auto px-6">
                    <FadeIn>
                        <nav className="flex items-center gap-2 text-xs text-[#9090A8] mb-8">
                            <a href="/" className="hover:text-white transition-colors">Início</a>
                            <span>/</span>
                            <a href="/funcionalidades" className="hover:text-white transition-colors">Funcionalidades</a>
                            <span>/</span>
                            <span className="text-white">Comunicação & Atendimento</span>
                        </nav>

                        <span className="text-xs font-mono text-[#7B2FFF] tracking-widest">Grupo 02</span>
                        <h1
                            className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4"
                            style={{ fontFamily: '"Bricolage Grotesque", sans-serif', letterSpacing: '-0.03em' }}
                        >
                            Comunicação & Atendimento
                        </h1>
                        <p className="text-[#9090A8] text-lg max-w-2xl mb-6">
                            WhatsApp com múltiplas contas, templates Meta aprovados e grupos — tudo no mesmo inbox junto com e-mail, chamadas e tickets.
                        </p>

                        <div className="border border-[#7B2FFF]/30 bg-[#7B2FFF]/8 rounded-xl px-6 py-4 mb-16 max-w-2xl">
                            <p className="text-white text-sm leading-relaxed">
                                Cada canal — WhatsApp, e-mail ou chamada — fica vinculado ao histórico do contato. Nenhuma conversa se perde entre sistemas diferentes.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="space-y-0">
                        {modules.map((mod, i) => {
                            const isEven = i % 2 === 0;
                            return (
                                <FadeIn key={mod.name} delay={i < 3 ? i * 80 : 0}>
                                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 py-16 ${i < modules.length - 1 ? 'border-b border-white/8' : ''}`}>
                                        <div className={isEven ? 'md:order-1' : 'md:order-2'}>
                                            <h2
                                                className="text-2xl font-bold text-white mb-3"
                                                style={{ fontFamily: '"Bricolage Grotesque", sans-serif', letterSpacing: '-0.02em' }}
                                            >
                                                {mod.name}
                                            </h2>
                                            <p className="text-[#9090A8] text-sm leading-relaxed">{mod.description}</p>
                                        </div>
                                        <div className={isEven ? 'md:order-2' : 'md:order-1'}>
                                            <ul className="space-y-3">
                                                {mod.bullets.map((bullet) => (
                                                    <li key={bullet} className="flex items-start gap-3">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-[#7B2FFF] mt-2 flex-shrink-0" />
                                                        <span className="text-[#9090A8] text-sm leading-relaxed">{bullet}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </FadeIn>
                            );
                        })}
                    </div>

                    <section className="mt-24">
                        <h2
                            className="text-2xl font-bold text-white mb-8"
                            style={{ fontFamily: '"Bricolage Grotesque", sans-serif', letterSpacing: '-0.02em' }}
                        >
                            Perguntas sobre comunicação
                        </h2>
                        <div className="max-w-3xl">
                            {faqs.map((faq, i) => (
                                <FAQItem key={faq.question} question={faq.question} answer={faq.answer} index={i} />
                            ))}
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}
