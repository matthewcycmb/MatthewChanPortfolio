import Image from 'next/image';
import type { PortfolioPhoto } from '@/content/photos';

export function PhotoStack({ photos, label }: { photos: PortfolioPhoto[]; label?: string }) {
  return <span className="photo-stack" aria-hidden="true">
    {photos.length ? photos.slice(0, 3).map((photo, index) => <span className={`stack-print stack-print-${index}`} key={photo.src}><Image src={photo.src} alt="" width={photo.width} height={photo.height} sizes="80px" style={{ objectFit: photo.fit ?? 'cover', objectPosition: photo.position }} /></span>) : <span className="stack-print stack-label">{label}</span>}
  </span>;
}
