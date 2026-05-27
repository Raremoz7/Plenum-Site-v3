import { useEffect } from 'react';

interface SEOHeadProps {
    title: string;
    description: string;
    canonical?: string;
    ogImage?: string;
    jsonLd?: object | object[];
}

function setMeta(property: string, content: string, attr: 'name' | 'property' = 'name') {
    let el = document.querySelector(`meta[${attr}="${property}"]`);
    if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, property);
        document.head.appendChild(el);
    }
    el.setAttribute('content', content);
}

export function SEOHead({ title, description, canonical, ogImage, jsonLd }: SEOHeadProps) {
    const fullTitle = title.includes('Plenum') ? title : `${title} — Plenum CRM`;
    const image = ogImage ?? `${import.meta.env.BASE_URL}hero-mockup.png`;

    useEffect(() => {
        document.title = fullTitle;
        setMeta('description', description);
        setMeta('og:title', fullTitle, 'property');
        setMeta('og:description', description, 'property');
        setMeta('og:image', image, 'property');
        setMeta('og:type', 'website', 'property');
        setMeta('twitter:card', 'summary_large_image');
        setMeta('twitter:title', fullTitle);
        setMeta('twitter:description', description);

        if (canonical) {
            let link = document.querySelector('link[rel="canonical"]');
            if (!link) {
                link = document.createElement('link');
                link.setAttribute('rel', 'canonical');
                document.head.appendChild(link);
            }
            link.setAttribute('href', canonical);
        }

        if (jsonLd) {
            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.textContent = JSON.stringify(Array.isArray(jsonLd) ? jsonLd : [jsonLd]);
            document.head.appendChild(script);
            return () => { document.head.removeChild(script); };
        }
    }, [fullTitle, description, canonical, image, jsonLd]);

    return null;
}
