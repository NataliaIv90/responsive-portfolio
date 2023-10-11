import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Natalia Ivantsova - junior frontend developer',
  description: 'Portfolio project. Natalia Ivantsova - junior frontend developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true} id='body'>{children}</body>
    </html>
  )
}
