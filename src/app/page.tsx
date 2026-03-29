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
      id:          'clocky',
      number:      '01',
      name:        'Clocky',
      description: 'A feature-rich mobile clock app built with TypeScript, offering alarms, global timezones, and a stopwatch. Currently in development, with upcoming premium features like streak tracking and advanced utilities.',
      url:         'https://github.com/rabiibenrioui/Clocky',
    },
    {
      id:          'weather',
      number:      '02',
      name:        'My Weather',
      description: 'A sleek mobile weather app built with React Native and Expo, delivering real-time data from external APIs. Designed for quick, on-demand forecasts with a clean, responsive interface.',
      url:         'https://github.com/rabiibenrioui/MyWeather',
    },
    {
      id:          'youtube',
      number:      '03',
      name:        'YouTube Clone',
      description: 'A lightweight mobile YouTube-style app that fetches dynamic thumbnails and video metadata via API. Focused on UI accuracy and data handling, with smooth scrolling and browsing experience.',
      url:         'https://github.com/rabiibenrioui/YouTube-Clone',
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
