import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#8B1F1F] rounded-full opacity-20 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#2F4F2F] rounded-full opacity-20 translate-y-1/2 -translate-x-1/2" />
      
      <div className="container px-4 mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm Liza George
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Software Engineer specializing in web development, computer vision, and distributed systems
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <Button asChild variant="outline">
              <a href="https://github.com/lizageorge" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="https://linkedin.com/in/george-liza" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button asChild>
              <a href="mailto:hi.liza.george@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </a>
            </Button>
          </div>
        </div>
        
        <div className="relative flex-1">
          <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto">
            <div className="absolute inset-0 rounded-full border-2 border-[#2F4F2F] transform rotate-45" />
            <img
              src="/hero-image.png"
              alt="Profile"
              className="rounded-full w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

