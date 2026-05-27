import { PlenumLogo } from '@/Components/ui/PlenumLogo';
import { WhatsappLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';

export function Footer() {
    return (
        <footer className="border-t border-white/8 mt-0">
            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="md:col-span-1">
                        <PlenumLogo className="mb-4" />
                        <p className="text-sm text-[#9090A8] leading-relaxed mb-6">
                            Do lead ao fechamento, com histórico completo de cada contato.
                        </p>
                        <a
                            href="#contato"
                            className="text-sm text-[#7B2FFF] hover:text-[#9B4FFF] transition-colors font-medium"
                        >
                            Agendar conversa →
                        </a>
                    </div>

                    <div>
                        <h4 className="text-xs font-semibold tracking-widest text-[#9090A8] uppercase mb-5">
                            Módulos
                        </h4>
                        <ul className="space-y-3">
                            {['Funil de vendas', 'Chat & Atendimento', 'Agentes de IA', 'Flow Builder', 'Relatórios', 'Calendário'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-semibold tracking-widest text-[#9090A8] uppercase mb-5">
                            Integrações
                        </h4>
                        <ul className="space-y-3">
                            {['WhatsApp', 'Meta Ads', 'Google Ads', 'Google Calendar', 'Directcall', 'Instagram'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-semibold tracking-widest text-[#9090A8] uppercase mb-5">
                            Empresa
                        </h4>
                        <ul className="space-y-3 mb-8">
                            {['Contato', 'Política de privacidade'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex gap-4">
                            <a href="#" className="text-white/40 hover:text-white transition-colors">
                                <WhatsappLogo size={20} />
                            </a>
                            <a href="#" className="text-white/40 hover:text-white transition-colors">
                                <InstagramLogo size={20} />
                            </a>
                            <a href="#" className="text-white/40 hover:text-white transition-colors">
                                <LinkedinLogo size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/8 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-[#9090A8]">© 2026 Plenum CRM. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
