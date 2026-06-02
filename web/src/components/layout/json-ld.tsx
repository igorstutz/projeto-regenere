/**
 * Insere um bloco de dados estruturados (JSON-LD) no documento.
 * Renderizado no servidor; seguro pois o conteúdo é serializado de objetos
 * controlados (não há entrada do usuário).
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
