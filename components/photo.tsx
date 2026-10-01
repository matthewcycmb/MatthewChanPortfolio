'use client';

import { useRef } from 'react';
import Image from 'next/image';
import type { PortfolioPhoto } from '@/content/photos';

export function Photo({ photo, variant = 'print', previewCaption }: { photo: PortfolioPhoto; variant?: 'print' | 'thumbnail'; previewCaption?: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLAnchorElement>(null);
  const thumbnailShape = photo.height > photo.width * 1.8 ? 'photo-thumbnail-tall' : photo.width > photo.height ? 'photo-thumbnail-wide' : '';
  return <figure className={`photo-figure ${variant === 'thumbnail' ? `photo-thumbnail ${thumbnailShape}` : photo.height > photo.width ? 'photo-portrait' : ''}`}>
    <a ref={trigger} className="photo-print" href={photo.src} aria-label={`Enlarge photo: ${photo.alt}`} onClick={(event) => { event.preventDefault(); dialog.current?.showModal(); }}>
      <Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} sizes={variant === 'thumbnail' ? '144px' : '(max-width: 600px) 85vw, 510px'} style={variant === 'thumbnail' ? { objectFit: photo.fit ?? 'cover' } : undefined} />
    </a>
    {(previewCaption || photo.caption) && <figcaption>{previewCaption || photo.caption}</figcaption>}
    <dialog ref={dialog} className="photo-dialog" aria-label={photo.alt} onClose={() => trigger.current?.focus()} onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
      <button className="photo-close" onClick={() => dialog.current?.close()} aria-label="Close photo">×</button>
      <Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} sizes="90vw" />
      {photo.caption && <p>{photo.caption}</p>}
    </dialog>
  </figure>;
}
