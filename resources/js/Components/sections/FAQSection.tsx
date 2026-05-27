import { useState, useRef, useEffect } from 'react';
import { Plus, Minus } from '@phosphor-icons/react';
import { FadeIn } from '@/Components/ui/FadeIn';

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: 'O Plenum tem CRM e atendimento no mesmo sistema?',
        answer: 'Sim. O Plenum reúne funil de vendas, gestão de contatos, chat com WhatsApp, e-mail, chamadas e tickets em um único ambiente. Cada atendimento fica vinculado ao histórico do contato e do lead, sem precisar alternar entre sistemas.',
    },
    {
        question: 'Consigo conectar múltiplas contas de WhatsApp?',
        answer: 'Sim. O Plenum suporta múltiplas contas WhatsApp por empresa via Meta Cloud API e 360dialog. É possível criar grupos, gerenciar participantes, usar templates aprovados pela Meta, enviar figurinhas e gerenciar cada dispositivo de forma independente.',
    },
    {
        question: 'Como funciona o Flow Builder?',
        answer: 'O Flow Builder é um canvas visual de arrastar e soltar com gatilhos por evento, condição, mudança de etapa e eventos de conversa. Cada fluxo tem histórico completo de execução para auditoria e ajuste. Você cria automações sem código e visualiza exatamente o que acontece em cada etapa.',
    },
    {
        question: 'O sistema roda em multi-empresa?',
        answer: 'Sim. O Plenum tem arquitetura multi-empresa com ambientes completamente separados. Os dados de cada empresa são isolados e seguros. É possível ativar e desativar módulos por empresa, configurar múltiplos funis de pipeline e definir permissões independentes por equipe.',
    },
    {
        question: 'Que integrações de marketing estão disponíveis?',
        answer: 'O Plenum integra com Facebook Ads via CAPI para rastreamento de conversões, Google Ads para atribuição de origem, e Google Calendar para sincronização de agenda. Também possui módulo de links rastreáveis com parâmetros UTM e comparação de desempenho entre canais.',
    },
    {
        question: 'Tem contrato de fidelidade?',
        answer: 'Não há fidelidade mínima obrigatória. O contrato é mensal e pode ser encerrado a qualquer momento. Para casos específicos de implementação personalizada, condições diferenciadas podem ser acordadas diretamente com a equipe.',
    },
    {
        question: 'Como funciona o suporte?',
        answer: 'O suporte está incluído no plano e é feito diretamente pela equipe do Plenum via WhatsApp. Não há terceirização do atendimento. O horário de suporte técnico é definido no momento da contratação.',
    },
    {
        question: 'Posso ativar só alguns módulos?',
        answer: 'O plano do Plenum inclui todos os módulos dos 5 grupos funcionais. Não é necessário contratar módulos separadamente — tudo já está disponível desde o primeiro acesso, incluindo Flow Builder, Agentes de IA e todas as integrações.',
    },
];

function FAQItem({ item, index }: { item: FAQItem; index: number }) {
    const [open, setOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = contentRef.current;
        if (!el) return;
        if (open) {
            el.style.maxHeight = el.scrollHeight + 'px';
            el.classList.add('open');
        } else {
            el.style.maxHeight = '0';
            el.classList.remove('open');
        }
    }, [open]);

    return (
        <div
            className="border-b border-white/8 last:border-b-0"
            style={{ animationDelay: `${index * 60}ms` }}
        >
            <button
                className="w-full flex items-center justify-between py-6 text-left group"
                onClick={() => setOpen(!open)}
            >
                <span className="text-base font-medium text-white/80 group-hover:text-white transition-colors pr-8">
                    {item.question}
                </span>
                <span className="flex-shrink-0 text-[#7B2FFF] transition-transform duration-300">
                    {open ? <Minus size={20} /> : <Plus size={20} />}
                </span>
            </button>
            <div ref={contentRef} className="faq-content" style={{ maxHeight: '0' }}>
                <p className="text-[#9090A8] leading-relaxed pb-6 text-sm max-w-2xl">
                    {item.answer}
                </p>
            </div>
        </div>
    );
}

export function FAQSection() {
    return (
        <section className="py-32 max-w-6xl mx-auto px-6">
            <FadeIn className="text-center mb-4">
                <p className="text-xs font-semibold text-[#7B2FFF] tracking-widest uppercase">FAQ</p>
            </FadeIn>
            <FadeIn delay={100} className="text-center mb-16">
                <h2
                    className="text-3xl md:text-4xl font-bold text-white"
                    style={{ fontFamily: '"Bricolage Grotesque", sans-serif', letterSpacing: '-0.02em' }}
                >
                    Perguntas frequentes
                </h2>
                <p className="text-[#9090A8] mt-3 text-sm">
                    Não encontrou o que procura?{' '}
                    <a href="#contato" className="text-[#7B2FFF] hover:text-[#9B4FFF] transition-colors">
                        Fale com a equipe.
                    </a>
                </p>
            </FadeIn>

            <FadeIn delay={200} className="max-w-3xl mx-auto">
                {faqs.map((item, index) => (
                    <FAQItem key={item.question} item={item} index={index} />
                ))}
            </FadeIn>
        </section>
    );
}
