import { readStory } from '@/lib/content';
export function Story({ slug, as: Tag = 'p' }: { slug: string; as?: 'p' | 'li' }) {
  return <>{readStory(slug).map((paragraph, index) => <Tag key={index}>{paragraph.split(/(\[[^\]\n]+\]\(https:\/\/[^\s)]+\)|\*\*[^*]+\*\*|\n)/g).map((part, partIndex) => {
    if (part === '\n') return <br key={partIndex} />;
    const link = part.match(/^\[([^\]]+)\]\((https:\/\/[^\s)]+)\)$/);
    if (link) return <a key={partIndex} href={link[2]} target="_blank" rel="noreferrer">{link[1]}</a>;
    return part.startsWith('**') && part.endsWith('**') ? <strong key={partIndex}>{part.slice(2, -2)}</strong> : part;
  })}</Tag>)}</>;
}
