import { useEffect } from 'react';

interface SEOProps {
    title: string;
    description: string;
    url?: string;
    image?: string;
}

const SITE_NAME = 'Astride';
const DEFAULT_IMAGE = 'https://theastride.com/og-image.jpg';
const ARTIST_URL = 'https://theastride.com';

export const usePageSEO = ({ title, description, url, image }: SEOProps) => {
    useEffect(() => {
        const fullTitle = `${title} | ${SITE_NAME}`;
        const pageUrl = url ? `${ARTIST_URL}${url}` : ARTIST_URL;
        const ogImage = image || DEFAULT_IMAGE;

        // Basic
        document.title = fullTitle;

        const setMeta = (selector: string, content: string) => {
            let el = document.querySelector(selector) as HTMLMetaElement | null;
            if (!el) {
                el = document.createElement('meta');
                const [attr, val] = selector.replace('meta[', '').replace(']', '').split('=');
                el.setAttribute(attr, val.replace(/"/g, ''));
                document.head.appendChild(el);
            }
            el.setAttribute('content', content);
        };

        setMeta('meta[name="description"]', description);
        setMeta('meta[name="robots"]', 'index, follow');

        // Open Graph
        setMeta('meta[property="og:title"]', fullTitle);
        setMeta('meta[property="og:description"]', description);
        setMeta('meta[property="og:url"]', pageUrl);
        setMeta('meta[property="og:image"]', ogImage);
        setMeta('meta[property="og:type"]', 'website');
        setMeta('meta[property="og:site_name"]', SITE_NAME);

        // Twitter Card
        setMeta('meta[name="twitter:card"]', 'summary_large_image');
        setMeta('meta[name="twitter:title"]', fullTitle);
        setMeta('meta[name="twitter:description"]', description);
        setMeta('meta[name="twitter:image"]', ogImage);

        // Canonical
        let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', pageUrl);

        return () => {
            // Reset title on unmount
            document.title = `${SITE_NAME} - Stay in the dark`;
        };
    }, [title, description, url, image]);
};
