import { Navbar } from '@/Components/layout/Navbar';
import { Footer } from '@/Components/layout/Footer';
import { HeroSection } from '@/Components/sections/HeroSection';
import { IntegrationsBar } from '@/Components/sections/IntegrationsBar';
import { StatsBarSection } from '@/Components/sections/StatsBarSection';
import { ModulesOverviewSection } from '@/Components/sections/ModulesOverviewSection';
import { FeatureFunnelSection } from '@/Components/sections/FeatureFunnelSection';
import { FeatureChatSection } from '@/Components/sections/FeatureChatSection';
import { FeatureAISection } from '@/Components/sections/FeatureAISection';
import { IntegrationsDeepSection } from '@/Components/sections/IntegrationsDeepSection';
import { PricingTeaserSection } from '@/Components/sections/PricingTeaserSection';
import { FAQSection } from '@/Components/sections/FAQSection';
import { CTASection } from '@/Components/sections/CTASection';
import { SEOHead } from '@/Components/ui/SEOHead';

export default function Home() {
    return (
        <>
            <SEOHead
                title="Plenum CRM — CRM completo com WhatsApp, IA e automações"
                description="Gerencie leads, atendimento via WhatsApp, agentes de IA e automações em uma única plataforma. 30+ módulos integrados para equipes comerciais."
                canonical="https://plenum.com.br"
            />
            <Navbar />
            <main>
                <HeroSection />
                <IntegrationsBar />
                <StatsBarSection />
                <ModulesOverviewSection />
                <FeatureFunnelSection />
                <FeatureChatSection />
                <FeatureAISection />
                <IntegrationsDeepSection />
                <PricingTeaserSection />
                <FAQSection />
                <CTASection />
            </main>
            <Footer />
        </>
    );
}
