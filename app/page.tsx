import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { getMarkdownContent, getHtmlContent } from "@/utils/markdown"

export default async function Home() {
  const aboutContent = await getHtmlContent('about')
  const experienceContent = await getHtmlContent('experience')
  const projectsContent = await getMarkdownContent('projects')
  const contactContent = await getHtmlContent('contact')

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      <Hero />
      <Projects content={projectsContent} />
      <Experience content={experienceContent} />
      <About content={aboutContent} />
      <Contact content={contactContent} />
    </main>
  )
}

