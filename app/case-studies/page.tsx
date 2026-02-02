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

                {/* Learning & Documentation Section */}
                <div className="mt-24">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Learning & Documentation</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl">
                            Technical documentation and learning projects exploring new technologies,
                            frameworks, and best practices.
                        </p>
                    </motion.div>

                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {/* Documentation Card 1 */}
                        <motion.article
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="group bg-card border border-border rounded-lg p-5 hover:border-muted transition-colors"
                        >
                            <div className="flex items-start gap-3 mb-3">
                                <div className="p-2 bg-primary/10 border border-primary/20 rounded-md">
                                    <FileText className="w-5 h-5 text-primary" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold mb-1">React Performance Optimization</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Optimization techniques, memo patterns, and profiling strategies.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-1 mb-3">
                                <span className="px-2 py-0.5 text-xs bg-accent rounded-md text-muted-foreground">
                                    React
                                </span>
                                <span className="px-2 py-0.5 text-xs bg-accent rounded-md text-muted-foreground">
                                    Performance
                                </span>
                            </div>

                            <button
                                onClick={() => setSelectedPDF({
                                    url: '/documents/react-performance.pdf',
                                    title: 'React Performance Optimization'
                                })}
                                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors"
                            >
                                View PDF
                                <ArrowRight className="w-3 h-3" />
                            </button>
                        </motion.article>

                        {/* Documentation Card 2 */}
                        <motion.article
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="group bg-card border border-border rounded-lg p-5 hover:border-muted transition-colors"
                        >
                            <div className="flex items-start gap-3 mb-3">
                                <div className="p-2 bg-primary/10 border border-primary/20 rounded-md">
                                    <BookOpen className="w-5 h-5 text-primary" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold mb-1">TypeScript Design Patterns</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Common patterns, type utilities, and advanced typing techniques.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-1 mb-3">
                                <span className="px-2 py-0.5 text-xs bg-accent rounded-md text-muted-foreground">
                                    TypeScript
                                </span>
                                <span className="px-2 py-0.5 text-xs bg-accent rounded-md text-muted-foreground">
                                    Patterns
                                </span>
                            </div>

                            <button
                                onClick={() => setSelectedPDF({
                                    url: '/documents/typescript-patterns.pdf',
                                    title: 'TypeScript Design Patterns'
                                })}
                                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors"
                            >
                                View PDF
                                <ArrowRight className="w-3 h-3" />
                            </button>
                        </motion.article>

                        {/* Documentation Card 3 */}
                        <motion.article
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="group bg-card border border-border rounded-lg p-5 hover:border-muted transition-colors"
                        >
                            <div className="flex items-start gap-3 mb-3">
                                <div className="p-2 bg-primary/10 border border-primary/20 rounded-md">
                                    <FileText className="w-5 h-5 text-primary" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold mb-1">RAG API with FastAPI</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Building retrieval-augmented generation APIs using FastAPI and LLMs.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-1 mb-3">
                                <span className="px-2 py-0.5 text-xs bg-accent rounded-md text-muted-foreground">
                                    Python
                                </span>
                                <span className="px-2 py-0.5 text-xs bg-accent rounded-md text-muted-foreground">
                                    FastAPI
                                </span>
                                <span className="px-2 py-0.5 text-xs bg-accent rounded-md text-muted-foreground">
                                    RAG
                                </span>
                            </div>

                            <button
                                onClick={() => setSelectedPDF({
                                    url: '../case-studies/documents/legendary-aws-devops-codebuild-updated.pdf',
                                    title: 'RAG API with FastAPI'
                                })}
                                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors"
                            >
                                View PDF
                                <ArrowRight className="w-3 h-3" />
                            </button>
                        </motion.article>
                    </div>
                </div>
            </div>
        </main>
    );
}