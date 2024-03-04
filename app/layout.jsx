import "@styles/globals.css"

export const metadata = {
    title: "Artify",
    description: "Art Marketplace"
}

const layout = ({ children }) => {
  return (
    <html lang="en">
        <body>
            <main>
                {children}
            </main>
        </body>
    </html>
  )
}

export default layout