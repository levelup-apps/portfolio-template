import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import resumeData from '../content/resume-data.json';


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: `${resumeData.basics.name} - ${resumeData.basics.headline}`,
    description: `${resumeData.basics.summary}`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

