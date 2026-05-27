import { useState } from 'react';
import { Navbar } from '@/Components/layout/Navbar';
import { Footer } from '@/Components/layout/Footer';
import { SEOHead } from '@/Components/ui/SEOHead';
import { FadeIn } from '@/Components/ui/FadeIn';
import { Plus, Minus } from '@phosphor-icons/react';
import { useRef, useEffect } from 'react';

interface ModuleBlock {
    name: string;
    description: string;
    bullets: string[];
}

const modules: ModuleBlock[] = [
    {
        name: 'Dashboard',
        description: 'Tela inicial configurável por perfil de usuário, com widgets por drag-and-drop. KPIs relevantes para cada papel — gestores veem conversão e volume, vendedores veem suas metas e tarefas do dia.',
        bullets: [
            'Widgets reorganizáveis por arrastar e soltar',
            'KPIs configuráveis por perfil de acesso',
            'Tendências por período com comparação histórica',
            'Visão consolidada de leads, tarefas e atividades',
        ],
    },
    {
        name: 'Leads',
        description: 'Base de leads com múltiplas visualizações e filtros avançados. Cada lead tem uma linha do tempo de atividades que registra cada interação, mudança de etapa e atendimento realizado.',
        bullets: [
            'Visualizações em lista, grid, timeline e dashboard',
            'Filtros por etapa, responsável, origem e data',
            'Exportação da base em formatos padrão',
            'Histórico completo de atividades por lead',
            'Detecção de leads duplicados por critérios configuráveis',
        ],
    },
    {
        name: 'Funil',
        description: 'Pipeline kanban com múltiplos perfis por empresa. Os leads se movem entre etapas por arrastar e soltar, e a contagem por coluna é atualizada em tempo real. Critérios de entrada podem ser definidos com apoio de IA.',
        bullets: [
            'Múltiplos funis por empresa e por equipe',
            'Contagem de leads em tempo real por etapa',
            'Movimentação por arrastar e soltar',
            'Critérios de entrada por IA',
            'Visualização de tempo médio em cada etapa',
        ],
    },
    {
        name: 'Contatos',
        description: 'Base de contatos centralizada com filtros avançados e detecção de duplicidades. Permite ligação direta da lista sem sair do módulo, com o histórico completo de cada contato acessível em um clique.',
        bullets: [
            'Filtros por segmento, responsável e data de criação',
            'Detecção automática de duplicidades',
            'Ligação direta da lista de contatos',
            'Histórico unificado de interações por contato',
        ],
    },
    {
        name: 'Tarefas',
        description: 'Gestão de tarefas com visualizações em kanban, timeline e calendário. Suporte a subtarefas e recorrência. A IA gera insights sobre prioridades e identifica gargalos por responsável.',
        bullets: [
            'Kanban, timeline e calendário de tarefas',
            'Subtarefas e tarefas recorrentes',
            'Comentários internos por tarefa',
            'Insights de prioridade e gargalos por IA',
        ],
    },
    {
        name: 'Calendário',
        description: 'Link de agendamento público para que prospects agendem diretamente na agenda do vendedor. Sincronização com Google Calendar e bloqueios de horário para evitar conflitos.',
        bullets: [
            'Link público de agendamento por vendedor',
            'Sincronização bidirecional com Google Calendar',
            'Bloqueios de horário configuráveis',
            'Confirmações automáticas por WhatsApp',
        ],
    },
    {
        name: 'Prospecção',
        description: 'Mapa interativo para visualizar e qualificar prospects por região geográfica. Cada local identificado pode ser vinculado diretamente ao pipeline para iniciar o processo comercial.',
        bullets: [
            'Mapa com visualização geográfica de prospects',
            'Vinculação de locais ao funil de vendas',
            'Filtros por área de cobertura',
        ],
    },
    {
        name: 'Pagamentos',
        description: 'Registro de transações vinculadas a leads e contatos. O histórico financeiro fica acessível no contexto do cliente, sem precisar de módulo financeiro externo para acompanhar o que foi pago e o que está em aberto.',
        bullets: [
            'Transações vinculadas a leads e contatos',
            'Histórico financeiro por cliente',
            'Acompanhamento de status de pagamento',
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
        question: 'O funil suporta múltiplos pipelines?',
        answer: 'Sim. É possível criar múltiplos perfis de pipeline dentro da mesma empresa, com etapas e critérios de entrada diferentes para cada um. Equipes distintas podem operar funis independentes sem interferência entre os dados.',
    },
    {
        question: 'Como funciona o histórico de atividades do lead?',
        answer: 'Cada lead tem uma linha do tempo que registra automaticamente todas as interações: mensagens enviadas e recebidas, chamadas realizadas, tarefas concluídas, mudanças de etapa e anotações manuais. O histórico é cronológico e filtrável por tipo de atividade.',
    },
    {
        question: 'Posso criar tarefas recorrentes?',
        answer: 'Sim. O módulo de tarefas suporta recorrência por intervalo configurável — diário, semanal, mensal ou personalizado. As tarefas recorrentes são criadas automaticamente e ficam visíveis no kanban, timeline e calendário.',
    },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: f.answer,
        },
    })),
};

export default function ModuloOperacaoComercial() {
    return (
        <>
            <SEOHead
                title="Operação Comercial — Funil de Vendas, Leads e Contatos | Plenum CRM"
                description="Gerencie pipeline kanban, leads com histórico completo, base de contatos sem duplicidade, tarefas e agendamentos em um único sistema."
                canonical="https://plenum.com.br/modulos/operacao-comercial"
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
                            <span className="text-white">Operação Comercial</span>
                        </nav>

                        <span className="text-xs font-mono text-[#7B2FFF] tracking-widest">Grupo 01</span>
                        <h1
                            className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4"
                            style={{ fontFamily: '"Bricolage Grotesque", sans-serif', letterSpacing: '-0.03em' }}
                        >
                            Operação Comercial
                        </h1>
                        <p className="text-[#9090A8] text-lg max-w-2xl mb-16">
                            Pipeline, leads, contatos, tarefas e agenda em um único ambiente. Tudo que a equipe comercial precisa para operar, sem sistemas externos.
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
                                            <p className="text-[#9090A8] text-sm leading-relaxed mb-6">{mod.description}</p>
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
                            Perguntas sobre operação comercial
                        </h2>
                        <div className="max-w-3xl">
                            {faqs.map((faq, i) => (
                                <FAQItem key={faq.question} question={faq.question} answer={faq.answer} index={i} />
                            ))}
                        </div>
                    </section>

                    <div className="mt-16 border border-white/8 rounded-2xl p-8">
                        <p className="text-white font-semibold mb-2">Ver todos os módulos</p>
                        <p className="text-[#9090A8] text-sm mb-4">Comunicação, IA, gestão e automação também fazem parte do Plenum.</p>
                        <a href="/funcionalidades" className="text-sm text-[#7B2FFF] hover:text-[#9B4FFF] transition-colors">
                            Ver todas as funcionalidades →
                        </a>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
