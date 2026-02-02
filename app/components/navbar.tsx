'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Home } from 'lucide-react';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    // Check if we're on a case study page
    const isCaseStudyPage = pathname?.startsWith('/case-studies');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/#home', label: 'Home' },
        { href: '/#projects', label: 'Projects' },
        { href: '/case-studies', label: 'Case Studies' },
        { href: '/#contact', label: 'Contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
        >
            <motion.div
                animate={{
                    width: isScrolled ? 'auto' : 'auto',
                    paddingLeft: isScrolled ? '1.5rem' : '2rem',
                    paddingRight: isScrolled ? '1.5rem' : '2rem',
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="flex items-center gap-1 px-8 py-3 bg-card/80 backdrop-blur-xl border border-border rounded-full shadow-lg"
            >
                {isCaseStudyPage ? (
                    // Show only Home icon on case study pages
                    <Link
                        href="/"
                        className="relative p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-accent/50"
                        aria-label="Home"
                    >
                        <Home className="w-5 h-5" />
                    </Link>
                ) : (
                    // Show all nav links on homepage
                    <>
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-accent/50"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </>
                )}
            </motion.div>
        </motion.nav>
    );
}