import { useState, useEffect } from 'react';
import { Navbar as HeroUINavbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Determine if we should use hash links or regular links depending on if we are in Home
    const isHome = location.pathname === '/';

    return (
        <HeroUINavbar
            maxWidth="xl"
            className={`fixed top-0 left-0 right-0 transition-all duration-300 border-b w-full z-50 ${scrolled ? 'bg-black/95 backdrop-blur-xl border-astrideMagenta/20 shadow-[0_4px_30px_rgba(255,0,255,0.1)] py-2' : 'bg-gradient-to-b from-black/80 to-transparent border-transparent py-4'
                }`}
        >
            <NavbarBrand>
                <Link to="/" className="text-5xl sm:text-6xl font-script text-primary hover:scale-105 transition-transform" style={{ textShadow: "0 0 10px rgba(249, 168, 38, 0.5)" }}>
                    Astride
                </Link>
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-8" justify="center">
                <NavbarItem>
                    {isHome ? (
                        <a href="#music" className="text-sm font-semibold uppercase tracking-widest text-foreground hover:text-astrideMagenta transition-colors">
                            Music
                        </a>
                    ) : (
                        <Link to="/#music" className="text-sm font-semibold uppercase tracking-widest text-foreground hover:text-astrideMagenta transition-colors">
                            Music
                        </Link>
                    )}
                </NavbarItem>
                <NavbarItem>
                    <Link to="/news" className="text-sm font-semibold uppercase tracking-widest text-foreground hover:text-astrideCyan transition-colors">
                        News
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    {isHome ? (
                        <a href="#gallery" className="text-sm font-semibold uppercase tracking-widest text-foreground hover:text-primary transition-colors">
                            Gallery
                        </a>
                    ) : (
                        <Link to="/#gallery" className="text-sm font-semibold uppercase tracking-widest text-foreground hover:text-primary transition-colors">
                            Gallery
                        </Link>
                    )}
                </NavbarItem>
                <NavbarItem>
                    {isHome ? (
                        <a href="#about" className="text-sm font-semibold uppercase tracking-widest text-foreground hover:text-astrideMagenta transition-colors">
                            Bio
                        </a>
                    ) : (
                        <Link to="/#about" className="text-sm font-semibold uppercase tracking-widest text-foreground hover:text-astrideMagenta transition-colors">
                            Bio
                        </Link>
                    )}
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem>
                    {isHome ? (
                        <a href="#merch" className="text-sm font-semibold uppercase tracking-widest text-foreground hover:text-astrideCyan transition-colors">
                            Store
                        </a>
                    ) : (
                        <Link to="/#merch" className="text-sm font-semibold uppercase tracking-widest text-foreground hover:text-astrideCyan transition-colors">
                            Store
                        </Link>
                    )}
                </NavbarItem>
            </NavbarContent>
        </HeroUINavbar>
    );
};
