'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, FileText, BookOpen, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { PDFViewer } from '@/app/components/pdfviewer';

export default function CaseStudiesPage() {
    const [selectedPDF, setSelectedPDF] = useState<{ url: string; title: string } | null>(null);

    return (
        <main className="min-h-screen py-24 px-6 md:px-12">
            {/* PDF Viewer Modal */}
            <AnimatePresence>
                {selectedPDF && (
                    <PDFViewer
                        pdfUrl={selectedPDF.url}
                        title={selectedPDF.title}
                        onClose={() => setSelectedPDF(null)}
                    />
                )}
            </AnimatePresence>
            <div className="max-w-4xl mx-auto">
                {/* Back Navigation */}
                <Link
                    href="/#case-studies"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>

                {/* Page Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Case Studies</h1>
                    <p className="text-xl text-muted-foreground">
                        Deep dives into real projects, decisions made under constraints,
                        and lessons learned from shipping products.
                    </p>
                </motion.div>

                {/* Case Study List */}
                <div className="space-y-8">
                    {/* PEFA Entertainment Case Study */}
                    <motion.article
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="border border-border rounded-xl p-8 hover:border-muted transition-colors"
                    >
                        <Link href="/case-studies/pefa-entertainment" className="group">
                            <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                                PEFA Entertainment: Building for Scale
                            </h2>

                            <p className="text-muted-foreground mb-4">
                                How we shipped a content platform under tight timelines,
                                balanced performance with features, and iterated based on
                                real user behavior.
                            </p>

                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 text-xs bg-primary/10 border border-primary/20 rounded-full text-primary">
                                    Frontend
                                </span>
                                <span className="px-3 py-1 text-xs bg-primary/10 border border-primary/20 rounded-full text-primary">
                                    DevOps
                                </span>
                                <span className="px-3 py-1 text-xs bg-primary/10 border border-primary/20 rounded-full text-primary">
                                    Performance
                                </span>
                            </div>
                        </Link>
                    </motion.article>

                    {/* Placeholder for more case studies */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="border border-dashed border-border rounded-xl p-8 text-center"
                    >
                        <p className="text-muted-foreground">More case studies coming soon</p>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}