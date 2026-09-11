import Link from "next/link";
import EditableText from "@/components/EditableText";
import { NavBrand } from "@/lib/types";

export default function Nav({
  brand,
  resumeUrl,
  isAdmin,
}: {
  brand: NavBrand;
  resumeUrl: string;
  isAdmin: boolean;
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle/80 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1160px] items-center justify-between px-5 md:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-[15px] font-semibold text-on-primary">
            S
          </span>
          <span className="flex flex-col leading-tight">
            <EditableText
              value={brand.name}
              path="nav.name"
              isAdmin={isAdmin}
              as="span"
              className="text-[15px] font-semibold text-text-primary"
            />
            <EditableText
              value={brand.subtitle}
              path="nav.subtitle"
              isAdmin={isAdmin}
              as="span"
              className="text-[10.5px] font-semibold uppercase tracking-wide text-text-tertiary"
            />
          </span>
        </Link>
        <nav className="hidden items-center gap-1 text-sm text-text-muted md:flex">
          <Link href="/#impact" className="rounded-full px-3.5 py-2 hover:bg-surface-container hover:text-text-primary">
            Impact
          </Link>
          <Link href="/#experience" className="rounded-full px-3.5 py-2 hover:bg-surface-container hover:text-text-primary">
            Experience
          </Link>
          <Link href="/#work" className="rounded-full px-3.5 py-2 hover:bg-surface-container hover:text-text-primary">
            Thinking
          </Link>
          <Link href="/#contact" className="rounded-full px-3.5 py-2 hover:bg-surface-container hover:text-text-primary">
            Contact
          </Link>
          <a
            href={resumeUrl}
            download
            className="ml-2 rounded-full bg-primary px-4 py-2 font-medium text-on-primary hover:bg-primary-container"
          >
            Résumé
          </a>
        </nav>
      </div>
    </header>
  );
}
