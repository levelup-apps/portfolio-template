import fs from 'fs'
import path from 'path'
import { remark } from 'remark'
import html from 'remark-html'
import matter from 'gray-matter'

export async function getMarkdownContent(filename: string) {
  const fullPath = path.join(process.cwd(), 'content', `${filename}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the metadata section
  const { content } = matter(fileContents)

  return content
}

export async function getHtmlContent(filename: string) {
  const fullPath = path.join(process.cwd(), 'content', `${filename}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the metadata section
  const { content } = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(content)
  
  return processedContent.toString()
}

