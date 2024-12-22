import { ReactNode } from "react"
import NavBarComponent from "./home/navbar.component"
import Footer from "./testFooter"


type LayoutProps = {
    children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">

    <NavBarComponent />

    <main className="flex-grow">{children}</main>


    <Footer />
  </div>
  )
}

export default Layout
