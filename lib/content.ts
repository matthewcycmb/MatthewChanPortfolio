import 'server-only';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

// Local Markdown paragraphs and explicit backslash line breaks. No HTML evaluation.
export function readStory(slug: string): string[] {
  if (!/^[a-z0-9-]+$/.test(slug)) throw new Error('Invalid story slug');
  return readFileSync(join(process.cwd(), 'content', 'stories', `${slug}.md`), 'utf8')
    .trim().split(/\n\s*\n/).map((paragraph) => paragraph.replace(/(?<!\\)\n/g, ' ').replace(/\\\n/g, '\n'));
}
