import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="bg-black py-20 border-t border-astrideMagenta/20 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-astrideMagenta/5 rounded-full blur-[120px]" />

            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-16 relative z-10">

                {/* LOGO AND COPYRIGHT */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h2 className="font-script text-6xl text-primary tracking-widest drop-shadow-[0_0_10px_rgba(249,168,38,0.5)]">Astride</h2>
                    <p className="mt-6 text-foreground/50 text-sm font-light tracking-widest uppercase mb-8">
                        &copy; 2026 Astride Official.<br /> All Rights Reserved.
                    </p>

                    {/* SOCIAL LINKS */}
                    <div className="flex gap-4">
                        <a href="https://open.spotify.com/artist/6zla1Vobe9SgbR9cty1mr9?si=ivsPLOtqRGyHPZ2-ANtU0w" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border border-astrideCyan/30 flex items-center justify-center hover:bg-astrideCyan hover:text-black transition-all text-xl shadow-[0_0_15px_rgba(0,255,255,0.1)] hover:shadow-[0_0_20px_rgba(0,255,255,0.4)]">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.518 17.338c-.212.348-.667.458-1.01.246-2.766-1.69-6.248-2.073-10.366-1.135-.395.09-.785-.158-.875-.552-.09-.395.158-.785.552-.875 4.502-1.026 8.353-.591 11.455 1.306.342.21.452.665.244 1.01zm1.438-3.186c-.266.435-.838.572-1.275.305-3.18-1.954-8.074-2.542-11.776-1.391-.502.155-1.033-.125-1.189-.627-.156-.502.125-1.032.627-1.188 4.265-1.326 9.68-0.666 13.31 1.565.435.266.572.839.303 1.276h.001zm.14-3.321c-3.816-2.264-10.09-2.47-13.725-1.365-.592.179-1.218-.156-1.397-.749-.18-.593.156-1.219.749-1.397 4.19-1.274 11.137-1.037 15.539 1.574.526.312.698 1.002.386 1.528-.313.525-1.003.696-1.528.384L19.096 7.5z" /></svg>
                        </a>
                        <a href="https://www.youtube.com/@astrideoficial" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border border-astrideMagenta/30 flex items-center justify-center hover:bg-astrideMagenta hover:text-white transition-all text-xl shadow-[0_0_15px_rgba(255,0,255,0.1)] hover:shadow-[0_0_20px_rgba(255,0,255,0.4)]">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                        </a>
                        <a href="https://instagram.com/official.astride" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary hover:text-black transition-all text-xl shadow-[0_0_15px_rgba(249,168,38,0.1)] hover:shadow-[0_0_20px_rgba(249,168,38,0.4)]">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                        </a>
                    </div>
                </div>

                {/* SITEMAP */}
                <div className="flex flex-col items-center md:items-end w-full md:max-w-2xl mt-12 md:mt-0">
                    <span className="text-sm font-bold text-astrideMagenta tracking-[0.3em] uppercase mb-6 drop-shadow-[0_0_8px_rgba(255,0,255,0.3)]">Explore</span>
                    <ul className="flex flex-row flex-wrap justify-center md:justify-end gap-x-8 gap-y-4 text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/50">
                        <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                        <li><Link to="/#about" className="hover:text-astrideMagenta transition-colors">Bio</Link></li>
                        <li><Link to="/#music" className="hover:text-astrideCyan transition-colors">Coming Soon</Link></li>
                        <li><Link to="/#gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
                        <li><Link to="/lyrics" className="hover:text-astrideMagenta transition-colors">Lyrics</Link></li>
                        <li><Link to="/news" className="hover:text-astrideCyan transition-colors">News</Link></li>
                        <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};
