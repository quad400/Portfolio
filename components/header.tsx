import Link from "next/link"
import Nav from "./nav"
import { Button } from "./ui/button"
import MobileNav from "./mobile-nav"


const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center">
            <Link href="/">
                <h1 className="text-4xl font-semibold">
                 Abdulquadri<span className="text-accent">.</span>
                </h1>
            </Link>
            {/* Desktop Nav */}
            <div className="hidden xl:flex justify-center item-center gap-8">

            <Nav />
            <Link href="/contact">
                <Button>Hire me</Button>
            </Link>
            </div>

            {/* Mobile Nav */}
            <div className="xl:hidden">
                <MobileNav />
            </div>
        </div>
    </header>
  )
}

export default Header