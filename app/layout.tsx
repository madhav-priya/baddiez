import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = { title: 'SHE Scan — Food that fits you', description: 'Personalized food guidance for your body.' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html> }
