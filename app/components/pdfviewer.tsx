'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Download, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';

interface PDFViewerProps {
    pdfUrl: string;
    title: string;
    onClose: () => void;
}

export function PDFViewer({ pdfUrl, title, onClose }: PDFViewerProps) {
    const [zoom, setZoom] = useState(100);

    const handleZoomIn = () => setZoom((prev) => Math.min(prev + 10, 200));
    const handleZoomOut = () => setZoom((prev) => Math.max(prev - 10, 50));

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="h-full flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-border">
                    <div>
                        <h3 className="text-lg font-semibold">{title}</h3>
                        <p className="text-sm text-muted-foreground">PDF Document</p>
                    </div>

                    <div className="flex items-center gap-2">
                        {/* Zoom Controls */}
                        <button
                            onClick={handleZoomOut}
                            className="p-2 rounded-lg hover:bg-accent transition-colors"
                            aria-label="Zoom out"
                        >
                            <ZoomOut className="w-5 h-5" />
                        </button>

                        <span className="text-sm text-muted-foreground min-w-[4rem] text-center">
                            {zoom}%
                        </span>

                        <button
                            onClick={handleZoomIn}
                            className="p-2 rounded-lg hover:bg-accent transition-colors"
                            aria-label="Zoom in"
                        >
                            <ZoomIn className="w-5 h-5" />
                        </button>

                        <div className="w-px h-6 bg-border mx-2" />

                        {/* Download Button */}
                        <a
                            href={pdfUrl}
                            download
                            className="p-2 rounded-lg hover:bg-accent transition-colors"
                            aria-label="Download PDF"
                        >
                            <Download className="w-5 h-5" />
                        </a>

                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="p-2 rounded-lg hover:bg-accent transition-colors"
                            aria-label="Close viewer"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* PDF Content */}
                <div className="flex-1 overflow-auto p-6">
                    <div className="max-w-5xl mx-auto">
                        <iframe
                            src={`${pdfUrl}#view=FitH`}
                            className="w-full bg-white rounded-lg shadow-2xl"
                            style={{
                                height: 'calc(100vh - 120px)',
                                transform: `scale(${zoom / 100})`,
                                transformOrigin: 'top center',
                            }}
                            title={title}
                        />
                    </div>
                </div>

                {/* Mobile Warning */}
                <div className="md:hidden fixed bottom-6 left-6 right-6 bg-card border border-border rounded-lg p-4">
                    <p className="text-sm text-muted-foreground text-center">
                        For the best viewing experience, please download the PDF or view on desktop.
                    </p>
                </div>
            </div>
        </motion.div>
    );
}