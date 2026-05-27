import { useState } from 'react';
import { useForm } from '@inertiajs/react';
import { Navbar } from '@/Components/layout/Navbar';
import { Footer } from '@/Components/layout/Footer';
import { SEOHead } from '@/Components/ui/SEOHead';
import { FadeIn } from '@/Components/ui/FadeIn';

interface ContactFormData {
    nome: string;
    empresa: string;
    whatsapp: string;
    mensagem: string;
    [key: string]: string;
}

const jsonLd = [
    {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contato — Plenum CRM',
        url: 'https://plenum.com.br/contato',
        about: {
            '@type': 'Organization',
            name: 'Plenum CRM',
            url: 'https://plenum.com.br',
            contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer support',
                availableLanguage: 'Portuguese',
            },
        },
    },
];

export default function Contato() {
    const { data, setData, post, processing, errors, wasSuccessful } = useForm<ContactFormData>({
        nome: '',
        empresa: '',
        whatsapp: '',
        mensagem: '',
    });

    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        post('/contato', {
            onSuccess: () => setSubmitted(true),
        });
    }

    return (
        <>
            <SEOHead
                title="Fale com a equipe do Plenum CRM"
                description="Entre em contato com a equipe do Plenum CRM. Agende uma demonstração ou tire dúvidas sobre módulos, preços e implementação."
                canonical="https://plenum.com.br/contato"
                jsonLd={jsonLd}
            />
            <Navbar />
            <main className="pt-24 pb-32">
                <div className="max-w-6xl mx-auto px-6">
                    <FadeIn>
                        <nav className="flex items-center gap-2 text-xs text-[#9090A8] mb-8">
                            <a href="/" className="hover:text-white transition-colors">Início</a>
                            <span>/</span>
                            <span className="text-white">Contato</span>
                        </nav>

                        <h1
                            className="text-4xl md:text-5xl font-bold text-white mb-4"
                            style={{ fontFamily: '"Bricolage Grotesque", sans-serif', letterSpacing: '-0.03em' }}
                        >
                            Fale com a equipe
                        </h1>
                        <p className="text-[#9090A8] text-lg max-w-xl mb-16">
                            Dúvidas sobre módulos, preços ou implementação — ou só quer ver o sistema funcionando antes de decidir.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <FadeIn delay={80}>
                            {submitted || wasSuccessful ? (
                                <div className="border border-white/8 rounded-2xl p-8">
                                    <p className="text-white font-semibold text-lg mb-2">Mensagem recebida.</p>
                                    <p className="text-[#9090A8] text-sm">
                                        A equipe do Plenum vai retornar pelo WhatsApp em breve.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div>
                                        <label className="block text-sm text-white/70 mb-1.5" htmlFor="nome">
                                            Nome
                                        </label>
                                        <input
                                            id="nome"
                                            type="text"
                                            value={data.nome}
                                            onChange={(e) => setData('nome', e.target.value)}
                                            className="w-full bg-[#120828] border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#7B2FFF] transition-colors"
                                            placeholder="Seu nome"
                                            required
                                        />
                                        {errors.nome && <p className="text-red-400 text-xs mt-1">{errors.nome}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm text-white/70 mb-1.5" htmlFor="empresa">
                                            Empresa
                                        </label>
                                        <input
                                            id="empresa"
                                            type="text"
                                            value={data.empresa}
                                            onChange={(e) => setData('empresa', e.target.value)}
                                            className="w-full bg-[#120828] border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#7B2FFF] transition-colors"
                                            placeholder="Nome da empresa"
                                            required
                                        />
                                        {errors.empresa && <p className="text-red-400 text-xs mt-1">{errors.empresa}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm text-white/70 mb-1.5" htmlFor="whatsapp">
                                            WhatsApp
                                        </label>
                                        <input
                                            id="whatsapp"
                                            type="tel"
                                            value={data.whatsapp}
                                            onChange={(e) => setData('whatsapp', e.target.value)}
                                            className="w-full bg-[#120828] border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#7B2FFF] transition-colors"
                                            placeholder="(00) 00000-0000"
                                            required
                                        />
                                        {errors.whatsapp && <p className="text-red-400 text-xs mt-1">{errors.whatsapp}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm text-white/70 mb-1.5" htmlFor="mensagem">
                                            Mensagem
                                        </label>
                                        <textarea
                                            id="mensagem"
                                            value={data.mensagem}
                                            onChange={(e) => setData('mensagem', e.target.value)}
                                            rows={4}
                                            className="w-full bg-[#120828] border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#7B2FFF] transition-colors resize-none"
                                            placeholder="Conte um pouco sobre a operação e o que você precisa..."
                                        />
                                        {errors.mensagem && <p className="text-red-400 text-xs mt-1">{errors.mensagem}</p>}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="w-full bg-[#7B2FFF] hover:bg-[#9B4FFF] disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-semibold px-6 py-4 rounded-xl transition-colors"
                                    >
                                        {processing ? 'Enviando...' : 'Enviar mensagem'}
                                    </button>
                                </form>
                            )}
                        </FadeIn>

                        <FadeIn delay={160}>
                            <div className="space-y-10">
                                <div>
                                    <p className="text-white font-semibold mb-2">Atendimento via WhatsApp</p>
                                    <p className="text-[#9090A8] text-sm mb-4">
                                        Prefere falar direto? Nossa equipe responde pelo WhatsApp em horário comercial.
                                    </p>
                                    <a
                                        href="https://wa.me/5500000000000"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm text-[#7B2FFF] hover:text-[#9B4FFF] transition-colors"
                                    >
                                        Abrir conversa no WhatsApp →
                                    </a>
                                </div>

                                <div className="border-t border-white/8 pt-8">
                                    <p className="text-white font-semibold mb-2">Horário de atendimento</p>
                                    <div className="space-y-1">
                                        <p className="text-[#9090A8] text-sm">Segunda a sexta: 9h às 18h</p>
                                        <p className="text-[#9090A8] text-sm">Sábado: 9h às 13h</p>
                                    </div>
                                </div>

                                <div className="border-t border-white/8 pt-8">
                                    <p className="text-white font-semibold mb-2">Demonstração ao vivo</p>
                                    <p className="text-[#9090A8] text-sm">
                                        Agendamos uma sessão para mostrar o sistema funcionando no seu contexto — funil, WhatsApp, IA e tudo mais. Sem pressão.
                                    </p>
                                </div>

                                <div className="border-t border-white/8 pt-8">
                                    <p className="text-white font-semibold mb-4">Acesso rápido</p>
                                    <div className="space-y-2">
                                        <a href="/funcionalidades" className="block text-sm text-[#9090A8] hover:text-white transition-colors">
                                            Ver todas as funcionalidades →
                                        </a>
                                        <a href="/precos" className="block text-sm text-[#9090A8] hover:text-white transition-colors">
                                            Informações de preço →
                                        </a>
                                        <a href="/integracoes" className="block text-sm text-[#9090A8] hover:text-white transition-colors">
                                            Integrações disponíveis →
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
