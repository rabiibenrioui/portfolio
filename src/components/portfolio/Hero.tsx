'use client'

import { useEffect, useRef } from "react"

interface HeroProps {
    name: string
    role: string
    tagline: string
    location: string
    languages: string
}

export default function Hero({ name, role, tagline, location, languages }: HeroProps) {
    const cursorRef = useRef<HTMLDivElement>(null)
    const glowRef = useRef<HTMLDivElement>(null)

    // split name for styling
    const [firstName, lastName] = name.split(" ")

    useEffect(() => {
        const cursor = cursorRef.current
        const glow = glowRef.current

        if(!cursor || !glow) return

        const move = (e: MouseEvent) => {
            cursor.style.left = e.clientX + 'px'
            cursor.style.top  = e.clientY + 'px'
            glow.style.left   = e.clientX + 'px'
            glow.style.top    = e.clientY + 'px'
        }

        window.addEventListener('mousemove', move)
        return () => window.removeEventListener('mousemove', move)
    }, [])
    
    return (
        <>

            {/* custom cursor */}
            <div
                ref={cursorRef}
                    className="fixed z-9999 w-2.5 h-2.5 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 mix-blend-screen transition-[width,height] duration-200"
                    style={{ background: 'var(--color-accent)' }}
            />
            <div
                ref={glowRef}
                className="fixed z-9998 w-72 h-72 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
                style={{
                    background: 'radial-gradient(circle, var(--glow) 0%, transparent 70%)',
                    transition: 'left 0.6s cubic-bezier(0.23,1,0.32,1), top 0.6s cubic-bezier(0.23,1,0.32,1)',
                }}
            />

            {/* hero section */}
            <section className="pt-10 pb-6" style={{ borderTop: 'none' }}>

                {/* role label */}
                <p
                className="font-mono text-xs font-light tracking-[0.16em] uppercase mb-5"
                style={{
                    color: 'var(--color-accent)',
                    animation: 'fadeUp 0.9s 0.1s ease both',
                }}
                >
                — {role}
                </p>

                {/* name */}
                <h1
                  className="font-serif text-7xl leading-none tracking-tight mb-7"
                  style={{
                    color: 'var(--color-heading)',
                    animation: 'fadeUp 0.9s 0.18s ease both',
                  }}
                >
                    {firstName}
                    <br />
                    <em style={{ color: 'var(--color-accent)' }}>{lastName}</em>
                </h1>

                {/* tagline */}
                <p
                  className="text-base font-light leading-relaxed max-w-md mb-9"
                  style={{
                    color: 'var(--body)',
                    animation: 'fadeUp 0.9s 0.26s ease both',
                  }}
                >
                    {tagline}
                </p>

                {/* meta row */}
                <div
                className="flex items-center justify-between px-2 gap-6"
                style={{ animation: 'fadeUp 0.9s 0.34s ease both' }}
                >
                    <span
                        className="font-mono text-xs font-light tracking-widest uppercase"
                        style={{ color: 'var(--muted)' }}
                    >
                        📍 {location}
                    </span>

                    <span
                        className="w-1 h-1 rounded-full"
                        style={{ background: 'var(--border)' }}
                    />
                    
                    <span
                        className="font-mono text-xs font-light tracking-wide"
                        style={{ color: 'var(--muted)' }}
                    >
                        {languages} 
                    </span>

                </div>

            </section>
            
        </>
    )
}