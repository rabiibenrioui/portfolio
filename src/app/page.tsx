import Navbar    from '@/components/portfolio/Navbar'
import Hero      from '@/components/portfolio/Hero'
import Skills    from '@/components/portfolio/Skills'
import Projects  from '@/components/portfolio/Projects'
import Contact   from '@/components/portfolio/Contact'
import Footer    from '@/components/portfolio/Footer'
import type { PortfolioData } from '@/types/portfolio'

// Page data
const data: PortfolioData = {
  name:      'Rabii Benrioui',
  role:      'Software Developer',
  tagline:   "I turn raw ideas into polished digital applications — from the first line of code to the final deployed experience.",
  location:  'Casablanca, MA',
  languages: 'English · French · German · Arabic',

  skills: [
    { category: 'Frontend',  items: ['HTML5', 'CSS3', 'JavaScript', 'React'] },
    { category: 'Backend',   items: ['Python', 'PHP', 'C#', 'MySQL'] },
    { category: 'Tools',     items: ['Git', 'GitHub', 'Vercel', 'Firebase'] },
    { category: 'Concepts',  items: ['Responsive Design', 'System Design', 'REST APIs'] },
  ],

  projects: [
    {
      id:          'calculator',
      number:      '01',
      name:        'Bank Interest Calculator',
      description: 'A clean utility app for calculating compound and simple interest across different banking scenarios.',
      url:         '#',
    },
    {
      id:          'landing',
      number:      '02',
      name:        'Company Landing Page',
      description: 'A responsive, conversion-focused marketing page built for a client — performance-optimised from the ground up.',
      url:         '#',
    },
    {
      id:          'dice',
      number:      '03',
      name:        'Mini Dice-Rolling Game',
      description: 'A lightweight browser game — fast, fun, and built to sharpen JavaScript fundamentals.',
      url:         '#',
    },
  ],

  socials: [
    { platform: 'linkedin', label: 'LinkedIn',   url: 'https://linkedin.com/in/rabiibenrioui' },
    { platform: 'github',   label: 'GitHub',     url: 'https://github.com/rabiibenrioui' },
    { platform: 'twitter',  label: 'X', url: 'https://x.com/rabiibenrioui' },
    { platform: 'email',    label: 'Email',       url: 'mailto:rabii.myself@gmail.com' },
  ],
}

export default function Home() {
  return (
    <main className='max-w-4xl mx-auto p-6'>
      <Navbar name={data.name} />
      
      <Hero 
        name={data.name}
        role={data.role}
        tagline={data.tagline}
        location={data.location}
        languages={data.languages}
        />
      
      <Skills skills={data.skills} />
      <Projects projects={data.projects} />
      <Contact socials={data.socials} />
      <Footer name={data.name} />
    </main>
  );
}
