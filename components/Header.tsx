import Link from "next/link";
import Image from "next/image";
import Navigates from "@/components/Navitems";
import UserDropdown from "@/components/UserDropdown";

const Header = () =>{
    return (
        <header className="sticky top-0 header">
                <div className="container header-wrapper">
                    <Link href="/">
                        <Image src="/assets/icons/newomen.svg" alt="OmenEdge logo" width={140} height={32} className="h-8 w-auto cursor-pointer"/>
                    </Link>
                    <nav className="hidden sm:block">
                        <Navigates />
                    </nav>

                    <UserDropdown />
                </div>

        </header>

    )
}
export default Header