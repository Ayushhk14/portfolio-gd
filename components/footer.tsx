export function Footer() {
  return (
    <footer className="border-t border-border/50 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <a
          href="#"
          className="font-display text-lg font-bold tracking-tight text-foreground transition-colors hover:text-primary"
        >
          Ayush Kachhi
        </a>
        <p className="text-xs text-muted-foreground">
          {`\u00A9 ${new Date().getFullYear()} Ayush Kachhi. All rights reserved.`}
        </p>
        <div className="flex gap-6">
          {["About", "Projects", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
