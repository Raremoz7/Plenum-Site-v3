import { useState, useRef, useEffect } from 'react';
import { Navbar } from '@/Components/layout/Navbar';
import { Footer } from '@/Components/layout/Footer';
import { SEOHead } from '@/Components/ui/SEOHead';
import { FadeIn } from '@/Components/ui/FadeIn';
import { Plus, Minus } from '@phosphor-icons/react';

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

const included = [
    'Todos os módulos dos 5 grupos funcionais',
    'WhatsApp com múltiplas contas, e-mail e chamadas',
    'Agentes de IA configuráveis com base de conhecimento',
    'Flow Builder visual sem código',
    'Relatórios e ROI Dashboard',
    'Suporte incluído sem custo adicional',
    'Arquitetura multi-empresa com ambientes isolados',
    'Integrações com Facebook Ads, Google Ads e Google Calendar',
];

const faqs = [
    {
        question: 'Tem contrato de fidelidade?',
        answer: 'Não há fidelidade mínima obrigatória. O modelo padrão é mensal e pode ser encerrado a qualquer momento. Para projetos de implementação personalizada, condições específicas podem ser acordadas diretamente com a equipe.',
    },
    {
        question: 'Existe taxa de implementação ou setup?',
        answer: 'Não há taxa de setup padrão. O processo de ativação e configuração inicial é conduzido pela equipe do Plenum sem custo adicional. Projetos com escopo de personalização intensiva podem ter condições específicas definidas no contrato.',
    },
    {
        question: 'Como funciona o suporte?',
        answer: 'O suporte está incluído no plano e é feito diretamente pela equipe do Plenum via WhatsApp. Não há terceirização. O horário de atendimento e SLA de resposta são definidos no momento da contratação conforme o perfil da operação.',
    },
    {
        question: 'Posso adicionar usuários ao longo do tempo?',
        answer: 'Sim. O modelo é por usuário por mês, então o valor ajusta conforme o número de usuários ativos. A adição ou remoção de usuários pode ser feita a qualquer momento, sem burocracia.',
    },
    {
        question: 'Posso testar antes de contratar?',
        answer: 'Sim. A equipe realiza demonstrações ao vivo para que você veja os módulos funcionando no seu contexto antes de qualquer decisão. Entre em contato para agendar.',
    },
];

const jsonLd = [
    {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
    },
];

export default function Precos() {
    return (
        <>
            <SEOHead
                title="Preços do Plenum CRM — Por usuário, sem surpresas"
                description="Um plano completo com todos os módulos incluídos. Sem taxa de setup, sem fidelidade mínima obrigatória. Conheça os valores do Plenum CRM."
                canonical="https://plenum.com.br/precos"
                jsonLd={jsonLd}
            />
            <Navbar />
            <main className="pt-24 pb-32">
                <div className="max-w-6xl mx-auto px-6">
                    <FadeIn className="max-w-2xl mb-20">
                        <nav className="flex items-center gap-2 text-xs text-[#9090A8] mb-8">
                            <a href="/" className="hover:text-white transition-colors">Início</a>
                            <span>/</span>
                            <span className="text-white">Preços</span>
                        </nav>

                        <h1
                            className="text-4xl md:text-5xl font-bold text-white mb-4"
                            style={{ fontFamily: '"Bricolage Grotesque", sans-serif', letterSpacing: '-0.03em' }}
                        >
                            Um plano. Sem surpresas.
                        </h1>
                        <p className="text-[#9090A8] text-lg">
                            Todos os 30+ módulos incluídos desde o primeiro acesso. Paga apenas pelo número de usuários.
                        </p>
                    </FadeIn>

                    <FadeIn delay={80}>
                        <div className="bg-[#120828] border border-white/8 rounded-2xl p-8 md:p-12 max-w-2xl">
                            <div className="mb-8">
                                <div className="flex items-end gap-2 mb-1">
                                    <span
                                        className="text-white font-extrabold leading-none"
                                        style={{
                                            fontFamily: '"Bricolage Grotesque", sans-serif',
                                            fontSize: 'clamp(56px, 8vw, 72px)',
                                            letterSpacing: '-0.04em',
                                        }}
                                    >
                                        R$ —,—
                                    </span>
                                    <span className="text-[#9090A8] text-base mb-3">/usuário/mês</span>
                                </div>
                                <p className="text-[#9090A8] text-xs italic">
                                    Valor disponível mediante conversa com a equipe
                                </p>
                            </div>

                            <div className="border-t border-white/8 pt-8 mb-8">
                                <p className="text-white text-sm font-semibold mb-4">O que está incluído</p>
                                <ul className="space-y-3">
                                    {included.map((item) => (
                                        <li key={item} className="flex items-start gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#7B2FFF] mt-2 flex-shrink-0" />
                                            <span className="text-[#9090A8] text-sm leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <a
                                href="/contato"
                                className="block w-full text-center bg-[#7B2FFF] hover:bg-[#9B4FFF] text-white text-sm font-semibold px-6 py-4 rounded-xl transition-colors"
                            >
                                Falar com a equipe para ativar
                            </a>
                        </div>
                    </FadeIn>

                    <section className="mt-24 max-w-3xl">
                        <FadeIn>
                            <h2
                                className="text-2xl font-bold text-white mb-8"
                                style={{ fontFamily: '"Bricolage Grotesque", sans-serif', letterSpacing: '-0.02em' }}
                            >
                                Perguntas sobre preços
                            </h2>
                            {faqs.map((faq, i) => (
                                <FAQItem key={faq.question} question={faq.question} answer={faq.answer} index={i} />
                            ))}
                        </FadeIn>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}
