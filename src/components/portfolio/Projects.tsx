'use client'

import { useEffect, useRef } from "react"
import type { Project } from "@/types/portfolio"

interface ProjectsProps {
    projects: Project[]
}

export default function Projects({ projects }: ProjectsProps) {
    const sectionRef = useRef<HTMLElement>(null)
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    setTimeout(() => entry.target.classList.add('opacity-100', 'translate-y-0'), i * 100)
                    observer.unobserve(entry.target)
                }
                })
            },
            { threshold: 0.1 }
        )

        const items = sectionRef.current?.querySelectorAll('.project-item')
        items?.forEach(item => observer.observe(item))

        return () => observer.disconnect()
    }, [])

    return (
        <section id="work" ref={sectionRef} className="py-16" style={{ borderTop: '1px solid var(--border)' }}>

            {/* section label */}
            <div className="flex items-center gap-4 mb-10">
                <span
                className="font-mono text-[10px] font-light tracking-[0.18em] uppercase whitespace-nowrap"
                style={{ color: 'var(--muted)' }}
                >
                Selected Work
                </span>
                <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
            </div>

            {/* projects list */}
            <div
            className="flex flex-col gap-px"
            style={{ background: 'var(--border)', border: '1px solid var(--border)' }}
            >
                {projects.map((project) => (
                    <a
                    key={project.id}
                    href={project.url}
                    target={project.url !== '#' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="project-item group grid grid-cols-[1fr_auto] items-start gap-6 px-8 py-7 opacity-0 translate-y-4 transition-all duration-700 no-underline"
                    style={{ background: 'var(--color-bg)' }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-surface)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-bg)')}
                    >
                    {/* Left — content */}
                    <div>
                        <p
                            className="font-mono text-[10px] font-light tracking-widest mb-2"
                            style={{ color: 'var(--muted)' }}
                        >
                            {project.number}
                        </p>
                        <h3
                            className="font-serif text-2xl font-normal leading-tight mb-1.5 transition-colors duration-200"
                            style={{ color: 'var(--color-heading)' }}
                            onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent)')}
                            onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-heading)')}
                        >
                            {project.name}
                        </h3>
                        <p
                            className="text-sm font-light leading-relaxed"
                            style={{ color: 'var(--muted)' }}
                        >
                            {project.description}
                        </p>
                        </div>

                        {/* Right — arrow */}
                        <span
                        className="font-mono text-base mt-1 transition-all duration-200"
                        style={{ color: 'var(--border)' }}
                        onMouseEnter={e => {
                            e.currentTarget.style.color     = 'var(--color-accent)'
                            e.currentTarget.style.transform = 'translate(4px, -4px)'
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.color     = 'var(--border)'
                            e.currentTarget.style.transform = 'translate(0, 0)'
                        }}
                        >
                        ↗
                        </span>
                    </a>
                ))}
            </div>

        </section>
    )
}