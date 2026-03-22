interface FooterProps {
    name: string
}

export default function Footer({ name }: FooterProps) {
    const year = new Date().getFullYear()
    
    return (
        <footer
          className="flex items-center justify-between py-8 mb-4"
          style={{ borderTop: '1px solid var(--border)' }}
        >

            <span
              className="font-mono text-[10px] font-light tracking-widest uppercase"
              style={{ color: 'var(--muted)' }}
            >
                © {year} {name}
            </span>

            <span
              className="font-mono text-[10px] font-light tracking-wide"
              style={{ color: 'var(--muted)' }}
            >
                Casablanca, MA
            </span>

        </footer>
    )
}