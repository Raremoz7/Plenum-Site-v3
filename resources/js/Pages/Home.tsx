import { Navbar } from '@/Components/layout/Navbar';
import { Footer } from '@/Components/layout/Footer';
import { HeroSection } from '@/Components/sections/HeroSection';
import { IntegrationsBar } from '@/Components/sections/IntegrationsBar';
import { FeatureFunnelSection } from '@/Components/sections/FeatureFunnelSection';
import { FeatureChatSection } from '@/Components/sections/FeatureChatSection';
import { FeatureAISection } from '@/Components/sections/FeatureAISection';
import { FAQSection } from '@/Components/sections/FAQSection';
import { CTASection } from '@/Components/sections/CTASection';

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <HeroSection />
                <IntegrationsBar />
                <FeatureFunnelSection />
                <FeatureChatSection />
                <FeatureAISection />
                <FAQSection />
                <CTASection />
            </main>
            <Footer />
        </>
    );
}
