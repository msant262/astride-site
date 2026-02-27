import { Navbar } from '../components/layout/Navbar';
import { HeroSection } from '../components/sections/HeroSection';
import { BioSection } from '../components/sections/BioSection';
import { LatestReleaseSection } from '../components/sections/LatestReleaseSection';
import { GallerySection } from '../components/sections/GallerySection';
import { NewsSection } from '../components/sections/NewsSection';
import { ComingSoonSection } from '../components/sections/ComingSoonSection';
import { Footer } from '../components/layout/Footer';
import { usePageSEO } from '../hooks/usePageSEO';

export const Home = () => {
    usePageSEO({
        title: 'Home',
        description: 'Astride — indie dark pop artist. Explore music, lyrics, news and more from the rising voice in the dark.',
        url: '/'
    });

    return (
        <div className="flex flex-col min-h-screen bg-astrideBlack text-white">
            <Navbar />
            <HeroSection />
            <BioSection />
            <LatestReleaseSection />
            <NewsSection />
            <ComingSoonSection />
            <GallerySection />
            <Footer />
        </div>
    );
};
