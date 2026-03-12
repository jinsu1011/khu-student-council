import './globals.css' // 반드시 점 하나(./)여야 합니다.

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