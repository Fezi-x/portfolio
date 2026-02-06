import fs from 'fs/promises';
import path from 'path';

import SampleCaseStudyClient from './sample-case-client';

type CaseStudyMeta = {
  title: string;
  summary: string;
  year: string;
  readTime: string;
  tags: string[];
};

type ParsedCaseStudy = {
  meta: CaseStudyMeta;
  contentHtml: string;
};

const DEFAULT_META: CaseStudyMeta = {
  title: 'Sample Case Study Title',
  summary:
    'A short summary that describes the problem, the solution, and the outcome in 1–2 sentences.',
  year: '2025',
  readTime: '5 min read',
  tags: ['Product', 'Engineering', 'Design'],
};

function parseFrontmatter(source: string): ParsedCaseStudy {
  const match = source.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) {
    return { meta: DEFAULT_META, contentHtml: source.trim() };
  }

  const [, frontmatter, body] = match;
  const meta: Record<string, string | string[]> = {};
  let currentKey: string | null = null;

  for (const rawLine of frontmatter.split('\n')) {
    const line = rawLine.trim();
    if (!line) {
      continue;
    }

    if (line.startsWith('- ') && currentKey) {
      const list = meta[currentKey];
      if (Array.isArray(list)) {
        list.push(line.slice(2).trim().replace(/^"|"$/g, ''));
      } else {
        meta[currentKey] = [line.slice(2).trim().replace(/^"|"$/g, '')];
      }
      continue;
    }

    const separatorIndex = line.indexOf(':');
    if (separatorIndex === -1) {
      continue;
    }

    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim();

    if (!value) {
      meta[key] = [];
      currentKey = key;
    } else {
      meta[key] = value.replace(/^"|"$/g, '');
      currentKey = null;
    }
  }

  const resolvedMeta: CaseStudyMeta = {
    title: typeof meta.title === 'string' ? meta.title : DEFAULT_META.title,
    summary: typeof meta.summary === 'string' ? meta.summary : DEFAULT_META.summary,
    year: typeof meta.year === 'string' ? meta.year : DEFAULT_META.year,
    readTime: typeof meta.readTime === 'string' ? meta.readTime : DEFAULT_META.readTime,
    tags: Array.isArray(meta.tags) && meta.tags.length > 0 ? meta.tags : DEFAULT_META.tags,
  };

  return {
    meta: resolvedMeta,
    contentHtml: body.trim(),
  };
}

export default async function SampleCaseStudy() {
  const filePath = path.join(
    process.cwd(),
    'app',
    'case-studies',
    'sample-case',
    'sample-case.md'
  );
  const source = await fs.readFile(filePath, 'utf8');
  const { meta, contentHtml } = parseFrontmatter(source);

  return <SampleCaseStudyClient meta={meta} contentHtml={contentHtml} />;
}
