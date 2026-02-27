import { useState, useEffect } from 'react';
import { Navbar as HeroUINavbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileOpen(false);
    }, [location]);

    const isHome = location.pathname === '/';

    const navLinks = [
        { label: 'Home', to: '/', hover: 'hover:text-primary' },
        { label: 'Bio', to: isHome ? '#about' : '/#about', hover: 'hover:text-astrideMagenta', isHash: true },
        { label: 'Coming Soon', to: isHome ? '#music' : '/#music', hover: 'hover:text-astrideCyan', isHash: true },
        { label: 'Gallery', to: isHome ? '#gallery' : '/#gallery', hover: 'hover:text-primary', isHash: true },
        { label: 'Lyrics', to: '/lyrics', hover: 'hover:text-astrideMagenta' },
        { label: 'News', to: '/news', hover: 'hover:text-astrideCyan' },
        { label: 'Contact', to: '/contact', hover: 'hover:text-primary' },
    ];

    return (
        <>
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

                {/* Desktop Menu */}
                <NavbarContent className="hidden sm:flex gap-8" justify="center">
                    {navLinks.map((link) => (
                        <NavbarItem key={link.label}>
                            {link.isHash && isHome ? (
                                <a href={link.to} className={`text-sm font-semibold uppercase tracking-widest text-foreground ${link.hover} transition-colors`}>
                                    {link.label}
                                </a>
                            ) : (
                                <Link to={link.to} className={`text-sm font-semibold uppercase tracking-widest text-foreground ${link.hover} transition-colors`}>
                                    {link.label}
                                </Link>
                            )}
                        </NavbarItem>
                    ))}
                </NavbarContent>
                <NavbarContent justify="end" className="hidden sm:flex gap-3">
                    <NavbarItem>
                        <a href="https://open.spotify.com/artist/6zla1Vobe9SgbR9cty1mr9?si=ivsPLOtqRGyHPZ2-ANtU0w" target="_blank" rel="noopener noreferrer"
                            className="w-9 h-9 rounded-full border border-astrideCyan/30 flex items-center justify-center text-white/50 hover:bg-astrideCyan hover:text-black transition-all hover:shadow-[0_0_12px_rgba(0,255,255,0.4)]">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.518 17.338c-.212.348-.667.458-1.01.246-2.766-1.69-6.248-2.073-10.366-1.135-.395.09-.785-.158-.875-.552-.09-.395.158-.785.552-.875 4.502-1.026 8.353-.591 11.455 1.306.342.21.452.665.244 1.01zm1.438-3.186c-.266.435-.838.572-1.275.305-3.18-1.954-8.074-2.542-11.776-1.391-.502.155-1.033-.125-1.189-.627-.156-.502.125-1.032.627-1.188 4.265-1.326 9.68-0.666 13.31 1.565.435.266.572.839.303 1.276h.001zm.14-3.321c-3.816-2.264-10.09-2.47-13.725-1.365-.592.179-1.218-.156-1.397-.749-.18-.593.156-1.219.749-1.397 4.19-1.274 11.137-1.037 15.539 1.574.526.312.698 1.002.386 1.528-.313.525-1.003.696-1.528.384L19.096 7.5z" /></svg>
                        </a>
                    </NavbarItem>
                    <NavbarItem>
                        <a href="https://www.youtube.com/@astrideoficial" target="_blank" rel="noopener noreferrer"
                            className="w-9 h-9 rounded-full border border-astrideMagenta/30 flex items-center justify-center text-white/50 hover:bg-astrideMagenta hover:text-white transition-all hover:shadow-[0_0_12px_rgba(255,0,255,0.4)]">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                        </a>
                    </NavbarItem>
                    <NavbarItem>
                        <a href="https://instagram.com/official.astride" target="_blank" rel="noopener noreferrer"
                            className="w-9 h-9 rounded-full border border-primary/30 flex items-center justify-center text-white/50 hover:bg-primary hover:text-black transition-all hover:shadow-[0_0_12px_rgba(249,168,38,0.4)]">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                        </a>
                    </NavbarItem>
                </NavbarContent>
                {/* Hamburger Button (mobile only) */}
                <NavbarContent justify="end" className="sm:hidden">
                    <NavbarItem>
                        <button
                            onClick={() => setMobileOpen((prev) => !prev)}
                            className="flex flex-col justify-center items-center gap-[5px] w-10 h-10 relative z-[60]"
                            aria-label="Toggle menu"
                        >
                            <span className={`block h-[2px] bg-white transition-all duration-300 ${mobileOpen ? 'w-6 rotate-45 translate-y-[7px]' : 'w-6'}`} />
                            <span className={`block h-[2px] bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0 w-0' : 'w-4'}`} />
                            <span className={`block h-[2px] bg-white transition-all duration-300 ${mobileOpen ? 'w-6 -rotate-45 -translate-y-[7px]' : 'w-6'}`} />
                        </button>
                    </NavbarItem>
                </NavbarContent>
            </HeroUINavbar>

            {/* Mobile Drawer Overlay */}
            <div
                className={`fixed inset-0 z-40 transition-all duration-300 sm:hidden ${mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
            >
                {/* Backdrop */}
                <div
                    className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${mobileOpen ? 'opacity-100' : 'opacity-0'}`}
                    onClick={() => setMobileOpen(false)}
                />

                {/* Drawer Panel */}
                <div className={`absolute top-0 right-0 h-full w-72 bg-black/95 border-l border-astrideMagenta/20 shadow-[0_0_40px_rgba(255,0,255,0.15)] flex flex-col pt-28 px-8 gap-6 transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    {/* Logo in mobile drawer */}
                    <p className="font-script text-4xl text-primary mb-4" style={{ textShadow: "0 0 10px rgba(249,168,38,0.5)" }}>
                        Astride
                    </p>

                    <nav className="flex flex-col gap-6">
                        {navLinks.map((link) => (
                            <div key={link.label}>
                                {link.isHash && isHome ? (
                                    <a
                                        href={link.to}
                                        onClick={() => setMobileOpen(false)}
                                        className={`text-sm font-black uppercase tracking-[0.3em] text-white/70 ${link.hover} transition-colors`}
                                    >
                                        {link.label}
                                    </a>
                                ) : (
                                    <Link
                                        to={link.to}
                                        className={`text-sm font-black uppercase tracking-[0.3em] text-white/70 ${link.hover} transition-colors`}
                                    >
                                        {link.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Social icons at bottom */}
                    <div className="mt-auto pb-12 flex gap-4">
                        <a href="https://open.spotify.com/artist/6zla1Vobe9SgbR9cty1mr9?si=ivsPLOtqRGyHPZ2-ANtU0w" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-astrideCyan/30 flex items-center justify-center hover:bg-astrideCyan hover:text-black transition-all">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.518 17.338c-.212.348-.667.458-1.01.246-2.766-1.69-6.248-2.073-10.366-1.135-.395.09-.785-.158-.875-.552-.09-.395.158-.785.552-.875 4.502-1.026 8.353-.591 11.455 1.306.342.21.452.665.244 1.01zm1.438-3.186c-.266.435-.838.572-1.275.305-3.18-1.954-8.074-2.542-11.776-1.391-.502.155-1.033-.125-1.189-.627-.156-.502.125-1.032.627-1.188 4.265-1.326 9.68-0.666 13.31 1.565.435.266.572.839.303 1.276h.001zm.14-3.321c-3.816-2.264-10.09-2.47-13.725-1.365-.592.179-1.218-.156-1.397-.749-.18-.593.156-1.219.749-1.397 4.19-1.274 11.137-1.037 15.539 1.574.526.312.698 1.002.386 1.528-.313.525-1.003.696-1.528.384L19.096 7.5z" /></svg>
                        </a>
                        <a href="https://www.youtube.com/@astrideoficial" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-astrideMagenta/30 flex items-center justify-center hover:bg-astrideMagenta hover:text-white transition-all">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                        </a>
                        <a href="https://instagram.com/official.astride" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary hover:text-black transition-all">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};
