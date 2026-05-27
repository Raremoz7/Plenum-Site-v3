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
        name: 'Agentes de IA',
        description: 'Configure agentes com base de conhecimento própria, fine-tuning via datasets e playground em tempo real para testar comportamentos antes de ativar. Cada agente tem histórico completo de execuções e tabulação automática de conversas.',
        bullets: [
            'Base de conhecimento configurável por agente',
            'Fine-tuning via datasets personalizados',
            'Playground em tempo real para testes',
            'Histórico completo de execuções',
            'Tabulação automática de conversas',
            'Melhoria de instruções assistida',
            'Clonagem de agente com um clique',
        ],
    },
    {
        name: 'Flow Builder',
        description: 'Canvas visual de arrastar e soltar para criar automações sem código. Gatilhos por evento, condição, mudança de etapa no funil e eventos de conversa. Cada execução fica registrada para auditoria e ajuste.',
        bullets: [
            'Canvas drag-and-drop para automações',
            'Gatilhos por evento, condição e mudança de etapa',
            'Gatilhos por eventos de conversa',
            'Histórico de execução por fluxo',
            'Sem código necessário',
        ],
    },
    {
        name: 'Rastreamento UTM',
        description: 'Links rastreáveis com parâmetros UTM para atribuição de origem por campanha. Integração com Facebook Ads via CAPI e Google Ads para rastreamento de conversões. Comparação de desempenho entre canais em um único painel.',
        bullets: [
            'Links rastreáveis com parâmetros UTM',
            'Atribuição de origem por lead',
            'Integração com Facebook Ads via CAPI',
            'Integração com Google Ads',
            'Comparação entre canais de aquisição',
        ],
    },
    {
        name: 'ROI Dashboard',
        description: 'KPIs financeiros por canal de aquisição com tendências comparativas por período. Visão consolidada do retorno sobre investimento em mídia paga e canais orgânicos, cruzado com dados reais do funil.',
        bullets: [
            'KPIs financeiros por canal de aquisição',
            'Tendências comparativas por período',
            'Cruzamento com dados do funil de vendas',
            'Visão consolidada de ROI por campanha',
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
        question: 'Os agentes de IA funcionam diretamente no WhatsApp?',
        answer: 'Sim. Os agentes de IA podem ser ativados nos canais de atendimento do Plenum, incluindo o WhatsApp. Eles respondem com base na base de conhecimento configurada e tabulam as conversas automaticamente. A passagem para atendimento humano pode ser definida por gatilhos no Flow Builder.',
    },
    {
        question: 'Preciso saber programar para usar o Flow Builder?',
        answer: 'Não. O Flow Builder é um canvas visual de arrastar e soltar. Você escolhe os gatilhos, define condições e conecta as ações sem escrever código. O histórico de execução mostra exatamente o que aconteceu em cada instância do fluxo para ajuste sem ambiguidade.',
    },
    {
        question: 'Como funciona o rastreamento de origem de leads?',
        answer: 'O Plenum captura parâmetros UTM nos links rastreáveis e integra com Facebook Ads via CAPI e Google Ads. Cada lead que entra no sistema pode ter sua origem atribuída à campanha, conjunto e canal de aquisição. O ROI Dashboard cruza esses dados com as conversões reais do funil.',
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

export default function ModuloIA() {
    return (
        <>
            <SEOHead
                title="Agentes de IA, Flow Builder e Automações | Plenum CRM"
                description="Configure agentes de IA com base de conhecimento própria, fine-tuning e playground em tempo real. Automações visuais com canvas drag-and-drop e rastreamento de ROI."
                canonical="https://plenum.com.br/modulos/inteligencia-ia"
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
                            <span className="text-white">Inteligência & IA</span>
                        </nav>

                        <span className="text-xs font-mono text-[#7B2FFF] tracking-widest">Grupo 03</span>
                        <h1
                            className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4"
                            style={{ fontFamily: '"Bricolage Grotesque", sans-serif', letterSpacing: '-0.03em' }}
                        >
                            Inteligência & IA
                        </h1>
                        <p className="text-[#9090A8] text-lg max-w-2xl mb-16">
                            Agentes configuráveis com base de conhecimento própria, automações visuais sem código e rastreamento completo de ROI por canal de aquisição.
                        </p>
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
                            Perguntas sobre IA e automações
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
