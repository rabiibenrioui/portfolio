'use client'

import { useEffect, useRef } from "react"
import type { SkillCategory } from "@/types/portfolio"

interface SkillsProps {
    skills: SkillCategory[]
}

export default function Skills({ skills }: SkillsProps) {
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach((entry, i) => {
                    if(entry.isIntersecting) {
                        setTimeout(() => entry.target.classList.add('opacity-100', 'translate-y-0'), i * 80)
                        observer.unobserve(entry.target)
                    }
                })
            },
            {threshold: 0.1}
        )

        const cells = sectionRef.current?.querySelectorAll('.skill-cell')
        cells?.forEach(cell => observer.observe(cell))

        return () => observer.disconnect()
    }, [])

    return (
        <section id="skills" ref={sectionRef} className="py-16" style={{ borderTop: '1px solid var(--border)' }}>

            {/* section label */}
            <div>
                <span
                  className="font-mono text-[10px] font-light tracking-[0.18em] uppercase whitespace-nowrap"
                  style={{ color: 'var(--muted)' }}
                >
                    Skills
                </span>
                <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
            </div>

            {/* grid */}
            <div
                className="grid grid-cols-2 gap-px"
                style={{ background: 'var(--border)', border: '1px solid var(--border)' }}
            >
                {skills.map((skillGroup) => (
                    <div
                        key={skillGroup.category}
                        className="skill-cell p-6 opacity-0 translate-y-4 transition-all duration-700"
                        style={{ background: 'var(--color-bg)' }}
                        onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-surface)')}
                        onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-bg)')}
                    >
                        {/* category label */}
                        <p
                          className="font-mono text-[10px] font-normal tracking-[0.16em] uppercase mb-3"
                          style={{ color: 'var(--color-accent)' }}
                        >
                        {skillGroup.category}
                        </p>

                        {/* tags */}
                        <div className="flex flex-wrap gap-1.5">
                            {skillGroup.items.map(item => (
                                <span
                                  key={item}
                                  className="font-mono text-xs font-light px-2.5 py-0.5 rounded-sm transition-all duration-200"
                                  style={{
                                    color: 'var(--body)',
                                    border: '1px solid var(--border)',
                                }}
                                >
                                {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )

}