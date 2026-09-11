import Link from "next/link";

export default function Nav({ resumeUrl }: { resumeUrl: string }) {
  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle/80 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1160px] items-center justify-between px-5 md:px-8">
        <Link href="/" className="flex items-center gap-2.5 text-[15px] font-semibold">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-on-primary">
            S
          </span>
          Sumesh S
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
