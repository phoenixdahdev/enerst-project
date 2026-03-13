import Link from "next/link";
import { CaretRight } from "@phosphor-icons/react/dist/ssr";

export function Breadcrumb({ title }: { title: string }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
      <Link href="/" className="text-white/40 transition-colors hover:text-amber">
        Home
      </Link>
      <CaretRight size={12} className="text-white/20" />
      <Link
        href="/properties"
        className="text-white/40 transition-colors hover:text-amber"
      >
        Properties
      </Link>
      <CaretRight size={12} className="text-white/20" />
      <span className="text-white/70 line-clamp-1">{title}</span>
    </nav>
  );
}
