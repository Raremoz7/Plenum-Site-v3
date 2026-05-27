import { FadeIn } from '@/Components/ui/FadeIn';

interface ModuleItem {
    name: string;
    href: string;
}

interface Group {
    number: string;
    title: string;
    description: string;
    href: string;
    modules: ModuleItem[];
}

const groups: Group[] = [
    {
        number: '01',
        title: 'Operação Comercial',
        description: 'Pipeline, leads, contatos e tarefas em um único ambiente de trabalho.',
        href: '/modulos/operacao-comercial',
        modules: [
            { name: 'Dashboard', href: '/funcionalidades#dashboard' },
            { name: 'Leads', href: '/funcionalidades#leads' },
            { name: 'Funil', href: '/funcionalidades#funil' },
            { name: 'Contatos', href: '/funcionalidades#contatos' },
            { name: 'Tarefas', href: '/funcionalidades#tarefas' },
            { name: 'Calendário', href: '/funcionalidades#calendario' },
            { name: 'Prospecção', href: '/funcionalidades#prospeccao' },
            { name: 'Pagamentos', href: '/funcionalidades#pagamentos' },
        ],
    },
    {
        number: '02',
        title: 'Comunicação & Atendimento',
        description: 'Inbox unificado com WhatsApp, e-mail, chamadas e tickets.',
        href: '/modulos/comunicacao',
        modules: [
            { name: 'Chat WhatsApp', href: '/funcionalidades#chat' },
            { name: 'E-mail', href: '/funcionalidades#email' },
            { name: 'Chamadas', href: '/funcionalidades#chamadas' },
            { name: 'Tickets', href: '/funcionalidades#tickets' },
            { name: 'Templates', href: '/funcionalidades#templates' },
            { name: 'Campanhas', href: '/funcionalidades#campanhas' },
        ],
    },
    {
        number: '03',
        title: 'Inteligência & IA',
        description: 'Agentes configuráveis, automações e rastreamento de ROI.',
        href: '/modulos/inteligencia-ia',
        modules: [
            { name: 'Agentes de IA', href: '/funcionalidades#agentes' },
            { name: 'Flow Builder', href: '/funcionalidades#flow-builder' },
            { name: 'Rastreamento UTM', href: '/funcionalidades#rastreamento' },
            { name: 'ROI Dashboard', href: '/funcionalidades#roi' },
        ],
    },
    {
        number: '04',
        title: 'Gestão & Análise',
        description: 'Vendedores, relatórios, produtos e documentos.',
        href: '/funcionalidades#gestao',
        modules: [
            { name: 'Vendedores', href: '/funcionalidades#vendedores' },
            { name: 'Relatórios', href: '/funcionalidades#relatorios' },
            { name: 'Produtos', href: '/funcionalidades#produtos' },
            { name: 'Documentos', href: '/funcionalidades#documentos' },
        ],
    },
    {
        number: '05',
        title: 'Automação & Configuração',
        description: 'Fluxos visuais, permissões e configurações por empresa.',
        href: '/funcionalidades#automacao',
        modules: [
            { name: 'Flow Builder', href: '/funcionalidades#flow-builder' },
            { name: 'Configurações', href: '/funcionalidades#configuracoes' },
        ],
    },
];

function GroupCard({ group, large = false }: { group: Group; large?: boolean }) {
    return (
        <a
            href={group.href}
            className="block border border-white/8 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 group h-full"
        >
            <span className="text-xs font-mono text-[#7B2FFF] tracking-widest">{group.number}</span>
            <h3
                className={`font-bold text-white mt-2 mb-1 group-hover:text-white transition-colors ${large ? 'text-2xl' : 'text-lg'}`}
                style={{ fontFamily: '"Bricolage Grotesque", sans-serif', letterSpacing: '-0.02em' }}
            >
                {group.title}
            </h3>
            <p className="text-[#9090A8] text-sm mb-5 leading-relaxed">{group.description}</p>
            <ul className="flex flex-wrap gap-2">
                {group.modules.map((mod) => (
                    <li key={mod.name}>
                        <span className="text-xs text-white/50 bg-white/5 px-2.5 py-1 rounded-full">
                            {mod.name}
                        </span>
                    </li>
                ))}
            </ul>
        </a>
    );
}

export function ModulesOverviewSection() {
    return (
        <section className="py-32 max-w-6xl mx-auto px-6">
            <FadeIn className="mb-4">
                <p className="text-xs font-semibold text-[#7B2FFF] tracking-widest uppercase">
                    Módulos
                </p>
            </FadeIn>
            <FadeIn delay={80}>
                <h2
                    className="text-3xl md:text-4xl font-bold text-white mb-3"
                    style={{ fontFamily: '"Bricolage Grotesque", sans-serif', letterSpacing: '-0.02em' }}
                >
                    30+ módulos em 5 grupos funcionais
                </h2>
                <p className="text-[#9090A8] text-sm mb-16 max-w-xl">
                    Cada grupo cobre uma frente do negócio. Todos integrados, sem sistemas externos.
                </p>
            </FadeIn>

            <FadeIn delay={160}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-2">
                        <GroupCard group={groups[0]} large />
                    </div>
                    <div>
                        <GroupCard group={groups[1]} />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    {groups.slice(2).map((group) => (
                        <GroupCard key={group.number} group={group} />
                    ))}
                </div>
            </FadeIn>
        </section>
    );
}
