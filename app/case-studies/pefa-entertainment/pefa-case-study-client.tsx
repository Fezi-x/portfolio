'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import Link from 'next/link';

type CaseStudyMeta = {
  title: string;
  summary: string;
  year: string;
  readTime: string;
  tags: string[];
};

type PEFACaseStudyClientProps = {
  meta: CaseStudyMeta;
  contentHtml: string;
};

export default function PEFACaseStudyClient({
  meta,
  contentHtml,
}: PEFACaseStudyClientProps) {
  return (
    <main className="min-h-screen py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Case Studies
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{meta.title}</h1>

          <p className="text-xl text-muted-foreground mb-8">{meta.summary}</p>

          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{meta.year}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{meta.readTime}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {meta.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-primary/10 border border-primary/20 rounded-full text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-16"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        <div className="mt-16 pt-8 border-t border-border">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all case studies
          </Link>
        </div>
      </div>
    </main>
  );
}
