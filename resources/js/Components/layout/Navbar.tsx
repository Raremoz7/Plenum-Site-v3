import { useEffect, useState } from 'react';
import { PlenumLogo } from '@/Components/ui/PlenumLogo';
import { Button } from '@/Components/ui/Button';
import { List, X } from '@phosphor-icons/react';

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const links = [
        { label: 'Módulos', href: '#modulos' },
        { label: 'Integrações', href: '#integracoes' },
        { label: 'Contato', href: '#contato' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'navbar-scrolled' : 'bg-transparent'}`}
        >
            <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <PlenumLogo />

                <ul className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
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
                <div className="md:hidden bg-[#0A0118] border-t border-white/8 px-6 py-6 flex flex-col gap-6">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-white/70 hover:text-white text-base transition-colors"
                            onClick={() => setMobileOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <Button variant="primary" size="md" className="w-full justify-center">
                        Ver demonstração
                    </Button>
                </div>
            )}
        </header>
    );
}
