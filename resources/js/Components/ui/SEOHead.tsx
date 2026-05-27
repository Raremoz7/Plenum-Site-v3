import { Head } from '@inertiajs/react';

interface SEOHeadProps {
    title: string;
    description: string;
    canonical?: string;
    ogImage?: string;
    jsonLd?: object | object[];
}

export function SEOHead({ title, description, canonical, ogImage, jsonLd }: SEOHeadProps) {
    const fullTitle = title.includes('Plenum') ? title : `${title} — Plenum CRM`;
    const image = ogImage ?? '/hero-mockup.png';

    return (
        <Head>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonical ?? ''} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            {jsonLd && (
                <script type="application/ld+json">
                    {JSON.stringify(Array.isArray(jsonLd) ? jsonLd : [jsonLd])}
                </script>
            )}
        </Head>
    );
}
