import NextImage, { type ImageProps } from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Wrapper do next/image que aplica o `basePath` aos caminhos locais
 * (ex.: "/images/...") — necessário porque o next/image não prefixa o `src`
 * automaticamente quando o site é servido sob um sub-caminho (GitHub Pages).
 *
 * URLs externas (http...) e imagens importadas (objetos) passam intactas.
 */
export function AppImage({ src, ...props }: ImageProps) {
  const finalSrc =
    typeof src === "string" && src.startsWith("/") ? `${basePath}${src}` : src;
  return <NextImage src={finalSrc} {...props} />;
}
