import { Card, CardContent } from "@/components/ui/card"

interface AboutProps {
  content: string;
}

export function About({ content }: AboutProps) {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div 
          className="prose prose-gray max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </section>
  )
}

