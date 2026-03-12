import './globals.css'

export const metadata = {
  title: '선거운동본부 route',
  description: '당신이 그리는 새로운 길',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}