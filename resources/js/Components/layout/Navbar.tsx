import { useEffect, useRef, useState } from 'react';
import { PlenumLogo } from '@/Components/ui/PlenumLogo';
import { Button } from '@/Components/ui/Button';
import { List, X, CaretDown } from '@phosphor-icons/react';

const modulosLinks = [
    { label: 'Operação Comercial', href: '/modulos/operacao-comercial' },
    { label: 'Comunicação & Atendimento', href: '/modulos/comunicacao' },
    { label: 'Inteligência & IA', href: '/modulos/inteligencia-ia' },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [modulosOpen, setModulosOpen] = useState(false);
    const [mobileModulosOpen, setMobileModulosOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setModulosOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'navbar-scrolled' : 'bg-transparent'}`}
        >
            <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <a href="/"><PlenumLogo /></a>

                <ul className="hidden md:flex items-center gap-8">
                    <li ref={dropdownRef} className="relative">
                        <button
                            className="flex items-center gap-1 text-sm text-white/60 hover:text-white transition-colors duration-200"
                            onMouseEnter={() => setModulosOpen(true)}
                            onMouseLeave={() => setModulosOpen(false)}
                            onClick={() => setModulosOpen(!modulosOpen)}
                        >
                            Módulos
                            <CaretDown
                                size={14}
                                className={`transition-transform duration-200 ${modulosOpen ? 'rotate-180' : ''}`}
                            />
                        </button>
                        {modulosOpen && (
                            <div
                                className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                                onMouseEnter={() => setModulosOpen(true)}
                                onMouseLeave={() => setModulosOpen(false)}
                            >
                                <div className="bg-[#120828] border border-white/8 rounded-xl overflow-hidden min-w-[240px] shadow-xl shadow-black/40">
                                    {modulosLinks.map((link) => (
                                        <a
                                            key={link.href}
                                            href={link.href}
                                            className="block px-5 py-3.5 text-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </li>
                    <li>
                        <a href="/integracoes" className="text-sm text-white/60 hover:text-white transition-colors duration-200">
                            Integrações
                        </a>
                    </li>
                    <li>
                        <a href="/precos" className="text-sm text-white/60 hover:text-white transition-colors duration-200">
                            Preços
                        </a>
                    </li>
                    <li>
                        <a href="/contato" className="text-sm text-white/60 hover:text-white transition-colors duration-200">
                            Contato
                        </a>
                    </li>
                </ul>

                <div className="hidden md:flex items-center gap-3">
                    <Button variant="ghost" size="sm">Entrar</Button>
                    <Button variant="primary" size="sm">Ver demonstração</Button>
                </div>

                <button
                    className="md:hidden text-white/70 hover:text-white"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    {mobileOpen ? <X size={24} /> : <List size={24} />}
                </button>
            </nav>

            {mobileOpen && (
                <div className="md:hidden bg-[#0A0118] border-t border-white/8 px-6 py-6 flex flex-col gap-4">
                    <div>
                        <button
                            className="flex items-center gap-2 text-white/70 hover:text-white text-base transition-colors w-full"
                            onClick={() => setMobileModulosOpen(!mobileModulosOpen)}
                        >
                            Módulos
                            <CaretDown
                                size={14}
                                className={`transition-transform duration-200 ${mobileModulosOpen ? 'rotate-180' : ''}`}
                            />
                        </button>
                        {mobileModulosOpen && (
                            <div className="mt-2 pl-4 flex flex-col gap-3">
                                {modulosLinks.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        className="text-white/50 hover:text-white text-sm transition-colors"
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                    <a
                        href="/integracoes"
                        className="text-white/70 hover:text-white text-base transition-colors"
                        onClick={() => setMobileOpen(false)}
                    >
                        Integrações
                    </a>
                    <a
                        href="/precos"
                        className="text-white/70 hover:text-white text-base transition-colors"
                        onClick={() => setMobileOpen(false)}
                    >
                        Preços
                    </a>
                    <a
                        href="/contato"
                        className="text-white/70 hover:text-white text-base transition-colors"
                        onClick={() => setMobileOpen(false)}
                    >
                        Contato
                    </a>
                    <Button variant="primary" size="md" className="w-full justify-center mt-2">
                        Ver demonstração
                    </Button>
                </div>
            )}
        </header>
    );
}
