export function Video({ href }: { href: string }) {
  return <>
    <div className="demo">
      <iframe
        src="https://www.youtube-nocookie.com/embed/aq84DJg2bcY?rel=0"
        title="Matthew demonstrates Konvo: DMs Only, 2 minutes 18 seconds"
        loading="eager"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
    <noscript><p className="video-fallback"><a href={href}>Watch the Konvo demo on YouTube</a></p></noscript>
  </>;
}
