interface Stat {
    value: string;
    label: string;
}

const stats: Stat[] = [
    { value: '16', label: 'Módulos integrados' },
    { value: '5', label: 'Grupos funcionais' },
    { value: '360°', label: 'Visão do cliente' },
    { value: '1', label: 'Plataforma, todas as frentes' },
];

export function StatsBarSection() {
    return (
        <section className="bg-[#120828] border-y border-white/8">
            <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-0">
                {stats.map((stat, i) => (
                    <div
                        key={stat.label}
                        className={`flex flex-col items-center text-center py-8 px-4 ${
                            i < stats.length - 1 ? 'md:border-r border-white/8' : ''
                        } ${i === 1 ? 'border-r border-white/8 md:border-r' : ''}`}
                    >
                        <span
                            className="text-white font-extrabold leading-none"
                            style={{
                                fontFamily: '"Bricolage Grotesque", sans-serif',
                                fontSize: 'clamp(48px, 6vw, 72px)',
                                letterSpacing: '-0.04em',
                            }}
                        >
                            {stat.value}
                        </span>
                        <span className="text-[#9090A8] text-sm mt-3 max-w-[140px] leading-snug">
                            {stat.label}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
