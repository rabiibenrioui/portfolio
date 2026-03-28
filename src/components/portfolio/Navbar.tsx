'use client'

import { useEffect, useState } from "react"

interface NavbarProps {
    name: string
}

export default function Navbar({ name }: NavbarProps) {
    const [scrolled, setScrolled] = useState(false)

    // set the scroll effect
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll)

        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // grab the first name
    const firstName = name.split(" ")[0];

    // navbar links
    const links = [
        { label: 'Skills', section:'skills' },
        { label: 'Work', section:'work' },
        { label: 'Contact', section:'contact' }
    ]

    return (
        <nav
          className="sticky top-0 z-50 flex items-center justify-between"
          style={{
            borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
            backdropFilter: scrolled ? 'blur(12px)' : 'none',
            background: scrolled ? 'rgba(10,10,9,0.8)' : 'transparent',
          }}
          >
            {/* Wordmark */}

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="font-mono text-sm font-light tracking-widest uppercase"
              style={{color: 'var(--color-accent)'}}>
                {firstName}
            </button>

            {/* Links */}
            <ul className="flex gap-4 list-none items-center">
                {links.map(({ label, section }) => (
                    <li key={section}>

                        <button
                          onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })}
                          className="font-mono text-sm font-light tracking-widest uppercase transition-colors duration-200"
                          style={{ color: 'var(--muted)' }}
                          onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-heading)')}
                          onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
                          >
                            {label}
                        </button>

                    </li>
                ))}
            </ul>


        </nav>
    )
}