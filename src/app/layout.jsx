import '../components/App.scss'

export const metadata = {
  title: 'Stock Viz',
  desciption: 'Visualization of historic stock and crypto prices',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}
