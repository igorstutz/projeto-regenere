import { AppImage as Image } from "@/components/ui/app-image";
import { SpotlightMarquee } from "@/components/ui/spotlight-marquee";
import { apoiadoresContent } from "@/content/apoiadores";

/**
 * Faixa animada com os logos dos apoiadores (patrocinadores + parceiros).
 * O logo que passa pelo centro ganha cor e destaque (efeito spotlight).
 */
export function PartnersMarquee() {
  const logos = apoiadoresContent.groups
    .flatMap((g) => g.items)
    .map((s) => ({ src: s.logo, alt: s.name }));

  const items = logos.map(({ src, alt }) => (
    <Image
      key={src}
      src={src}
      alt={alt}
      width={220}
      height={88}
      className="h-12 w-auto object-contain sm:h-16"
    />
  ));

  return <SpotlightMarquee items={items} />;
}
