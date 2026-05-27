import { useState } from 'react';
import { Navbar } from '@/Components/layout/Navbar';
import { Footer } from '@/Components/layout/Footer';
import { SEOHead } from '@/Components/ui/SEOHead';
import { FadeIn } from '@/Components/ui/FadeIn';

interface ModuleDetail {
    id: string;
    name: string;
    description: string;
}

interface FunctionalGroup {
    id: string;
    number: string;
    title: string;
    description: string;
    modules: ModuleDetail[];
}

const groups: FunctionalGroup[] = [
    {
        id: 'operacao-comercial',
        number: '01',
        title: 'Operação Comercial',
        description: 'Pipeline, leads, contatos e tarefas em um único ambiente de trabalho. Tudo o que a equipe comercial precisa para operar sem alternar entre sistemas.',
        modules: [
            {
                id: 'dashboard',
                name: 'Dashboard',
                description: 'Widgets configuráveis por drag-and-drop com KPIs personalizados por perfil de usuário. Visualize tendências por período, metas de conversão e volume de atividades diretamente na tela inicial.',
            },
            {
                id: 'leads',
                name: 'Leads',
                description: 'Múltiplas visualizações: lista, grid, timeline e dashboard analítico. Filtros avançados por etapa, responsável, origem e data. Exportação e acesso ao histórico completo de atividades por lead.',
            },
            {
                id: 'funil',
                name: 'Funil',
                description: 'Kanban visual com múltiplos perfis de pipeline por empresa. Contagem de leads em tempo real por etapa, critérios de entrada configuráveis com apoio de IA e movimentação por arrastar e soltar.',
            },
            {
                id: 'contatos',
                name: 'Contatos',
                description: 'Base centralizada com filtros avançados, detecção automática de duplicidades e ligação rápida diretamente da lista. Cada contato tem histórico completo de interações e vinculação com leads.',
            },
            {
                id: 'tarefas',
                name: 'Tarefas',
                description: 'Visualizações em kanban, timeline e calendário. Suporte a subtarefas, tarefas recorrentes, comentários internos e insights gerados por IA sobre prioridades e gargalos.',
            },
            {
                id: 'calendario',
                name: 'Calendário',
                description: 'Link de agendamento público configurável, sincronização com Google Calendar, bloqueios de horário e confirmações automáticas. Cada evento fica vinculado ao contato e ao lead correspondente.',
            },
            {
                id: 'prospeccao',
                name: 'Prospecção',
                description: 'Mapa interativo para identificação de prospects por região geográfica. Vinculação direta de locais ao pipeline para iniciar atendimento sem sair do módulo.',
            },
            {
                id: 'pagamentos',
                name: 'Pagamentos',
                description: 'Registro e acompanhamento de transações vinculadas a leads e contatos. Histórico financeiro acessível diretamente no contexto do cliente, sem módulo financeiro separado.',
            },
        ],
    },
    {
        id: 'comunicacao',
        number: '02',
        title: 'Comunicação & Atendimento',
        description: 'Inbox centralizado que reúne WhatsApp, e-mail, chamadas e tickets. Cada conversa fica vinculada ao histórico do contato, sem precisar alternar entre ferramentas.',
        modules: [
            {
                id: 'chat',
                name: 'Chat WhatsApp',
                description: 'Múltiplas contas WhatsApp por empresa via Meta Cloud API e 360dialog. Suporte a grupos, gerenciamento de participantes, templates aprovados pela Meta, figurinhas e fila de atendimento configurável.',
            },
            {
                id: 'email',
                name: 'E-mail',
                description: 'Envio e recebimento de e-mails com histórico vinculado ao contato e ao lead. Editor rico com formatação, pastas organizáveis e acesso ao histórico completo de trocas.',
            },
            {
                id: 'chamadas',
                name: 'Chamadas',
                description: 'Discagem direta e gravação de chamadas via Directcall. Player de áudio integrado, múltiplas visualizações de histórico e vinculação automática de cada chamada ao contato correspondente.',
            },
            {
                id: 'tickets',
                name: 'Tickets',
                description: 'Gestão de chamados com estados configuráveis por empresa e categorias personalizáveis. Cada ticket fica vinculado ao contato para contexto completo no atendimento.',
            },
            {
                id: 'templates',
                name: 'Templates de Mensagem',
                description: 'Biblioteca de templates para WhatsApp com controle de status de aprovação pela Meta. Reutilização em campanhas e atendimentos individuais com variáveis dinâmicas por contato.',
            },
            {
                id: 'campanhas',
                name: 'Campanhas',
                description: 'Criação e gestão de campanhas de mensagens com controle de status: ativo, pausado e arquivado. Segmentação por base de contatos e acompanhamento de entrega.',
            },
        ],
    },
    {
        id: 'inteligencia-ia',
        number: '03',
        title: 'Inteligência & IA',
        description: 'Agentes configuráveis com base de conhecimento própria, automações visuais e rastreamento completo de ROI por canal de aquisição.',
        modules: [
            {
                id: 'agentes',
                name: 'Agentes de IA',
                description: 'Configure agentes com base de conhecimento própria, fine-tuning via datasets, playground em tempo real e histórico completo de execuções. Tabulação automática de conversas, melhoria de instruções e clonagem com um clique.',
            },
            {
                id: 'flow-builder',
                name: 'Flow Builder',
                description: 'Canvas visual de arrastar e soltar para criação de automações. Gatilhos por evento, condição, mudança de etapa e eventos de conversa. Histórico completo de execução para auditoria e ajuste sem código.',
            },
            {
                id: 'rastreamento',
                name: 'Rastreamento UTM',
                description: 'Links rastreáveis com parâmetros UTM por campanha. Atribuição de origem para cada lead com integração direta ao Facebook Ads via CAPI e Google Ads. Comparação de desempenho entre canais.',
            },
            {
                id: 'roi',
                name: 'ROI Dashboard',
                description: 'KPIs financeiros por canal de aquisição com tendências comparativas por período. Visão consolidada do retorno sobre investimento em mídia paga e orgânica.',
            },
        ],
    },
    {
        id: 'gestao',
        number: '04',
        title: 'Gestão & Análise',
        description: 'Ranking de vendedores, relatórios de gargalos, gestão de produtos e documentos vinculados ao negócio.',
        modules: [
            {
                id: 'vendedores',
                name: 'Vendedores',
                description: 'Ranking por performance, SLA de atendimento e taxa de conversão por vendedor. Visão gerencial para identificar padrões de alto desempenho e gargalos individuais.',
            },
            {
                id: 'relatorios',
                name: 'Relatórios',
                description: 'Análise de gargalos por etapa do funil, métricas em grid configurável e exportação de dados. Identificação visual de onde os leads pararam ou perderam velocidade no pipeline.',
            },
            {
                id: 'produtos',
                name: 'Produtos',
                description: 'Catálogo de produtos com importação em massa via planilha, exportação e lixeira com recuperação. Vinculação de produtos a leads para acompanhamento de propostas.',
            },
            {
                id: 'documentos',
                name: 'Documentos',
                description: 'Gestão de documentos vinculados a leads e contatos. Armazenamento centralizado sem necessidade de serviço externo para arquivos do processo comercial.',
            },
        ],
    },
    {
        id: 'automacao',
        number: '05',
        title: 'Automação & Configuração',
        description: 'Fluxos de automação visuais e configurações completas de empresa, permissões e integrações.',
        modules: [
            {
                id: 'flow-builder-config',
                name: 'Flow Builder',
                description: 'Automações configuradas visualmente com canvas drag-and-drop. Gatilhos múltiplos, condições compostas e histórico de execução para cada instância de fluxo ativado.',
            },
            {
                id: 'configuracoes',
                name: 'Configurações',
                description: 'Configuração de empresa, permissões por perfil, ativação e desativação de módulos, personalização de funis, integração com canais externos e gestão de usuários com hierarquias definidas.',
            },
        ],
    },
];

const navGroups = groups.map((g) => ({ id: g.id, number: g.number, title: g.title }));

export default function Funcionalidades() {
    const [activeGroup, setActiveGroup] = useState<string>(groups[0].id);

    return (
        <>
            <SEOHead
                title="Funcionalidades do Plenum CRM — 30+ módulos para equipes comerciais"
                description="Conheça todos os módulos do Plenum CRM: funil kanban, chat WhatsApp, agentes de IA, automações, relatórios e muito mais. Tudo em uma plataforma."
                canonical="https://plenum.com.br/funcionalidades"
            />
            <Navbar />
            <main className="pt-24 pb-32">
                <div className="max-w-6xl mx-auto px-6">
                    <FadeIn>
                        <nav className="flex items-center gap-2 text-xs text-[#9090A8] mb-8">
                            <a href="/" className="hover:text-white transition-colors">Início</a>
                            <span>/</span>
                            <span className="text-white">Funcionalidades</span>
                        </nav>

                        <h1
                            className="text-4xl md:text-5xl font-bold text-white mb-4"
                            style={{ fontFamily: '"Bricolage Grotesque", sans-serif', letterSpacing: '-0.03em' }}
                        >
                            Tudo que a operação comercial precisa
                        </h1>
                        <p className="text-[#9090A8] text-lg max-w-2xl mb-16">
                            30+ módulos em 5 grupos funcionais. Pipeline, comunicação, IA, gestão e automação — em uma única plataforma.
                        </p>
                    </FadeIn>

                    <div className="flex flex-col md:flex-row gap-12">
                        <aside className="md:w-56 flex-shrink-0">
                            <nav className="md:sticky md:top-24 flex flex-row md:flex-col gap-1 overflow-x-auto pb-2 md:pb-0">
                                {navGroups.map((g) => (
                                    <a
                                        key={g.id}
                                        href={`#${g.id}`}
                                        onClick={() => setActiveGroup(g.id)}
                                        className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm whitespace-nowrap transition-all ${
                                            activeGroup === g.id
                                                ? 'bg-white/8 text-white'
                                                : 'text-[#9090A8] hover:text-white hover:bg-white/5'
                                        }`}
                                    >
                                        <span className="text-xs font-mono text-[#7B2FFF]">{g.number}</span>
                                        {g.title}
                                    </a>
                                ))}
                            </nav>
                        </aside>

                        <div className="flex-1 space-y-24">
                            {groups.map((group) => (
                                <section key={group.id} id={group.id}>
                                    <div className="mb-8">
                                        <span className="text-xs font-mono text-[#7B2FFF] tracking-widest">{group.number}</span>
                                        <h2
                                            className="text-2xl md:text-3xl font-bold text-white mt-1 mb-2"
                                            style={{ fontFamily: '"Bricolage Grotesque", sans-serif', letterSpacing: '-0.02em' }}
                                        >
                                            {group.title}
                                        </h2>
                                        <p className="text-[#9090A8] text-sm max-w-lg">{group.description}</p>
                                    </div>

                                    <div className="space-y-0 border border-white/8 rounded-2xl overflow-hidden">
                                        {group.modules.map((mod, i) => (
                                            <div
                                                key={mod.id}
                                                id={mod.id}
                                                className={`p-6 ${i < group.modules.length - 1 ? 'border-b border-white/8' : ''}`}
                                            >
                                                <h3
                                                    className="text-white font-semibold text-base mb-2"
                                                    style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
                                                >
                                                    {mod.name}
                                                </h3>
                                                <p className="text-[#9090A8] text-sm leading-relaxed">{mod.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            ))}

                            <div className="border border-white/8 rounded-2xl p-8 text-center">
                                <p className="text-white font-semibold mb-2">Quer ver tudo funcionando?</p>
                                <p className="text-[#9090A8] text-sm mb-6">
                                    Agende uma sessão com a equipe para uma demonstração ao vivo.
                                </p>
                                <a
                                    href="/contato"
                                    className="inline-block bg-[#7B2FFF] hover:bg-[#9B4FFF] text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
                                >
                                    Falar com a equipe
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
