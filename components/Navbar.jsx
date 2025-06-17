import Link from "next/link"
import Image from "next/image"
import { auth } from "@/auth"
import Logout from "./auth/Logout";

const Navbar = async ({ sideMenu }) => {
  const session = await auth();
  return (
    <nav className="max-w-7xl flex mx-auto justify-between px-4 py-4 absolute top-0 w-full left-0 right-0 z-50">
      <Link href="/">
        <Image
          src="/stayswift.svg"
          alt="Stay Swift Logo"
          width={200}
          height={200}
          className="h-[35px] md:h-[40px] lg:h-[50px]"
        />
      </Link>

      {
        sideMenu && (
          <ul className="hidden md:flex items-center gap-6">
            <li>
              <Link href="#">Recommended Places</Link>
            </li>

            <li>
              <Link href="#">About Us</Link>
            </li>

            <li>
              <Link href="#">Contact us</Link>
            </li>

            <li>
              <Link href="/bookings">Bookings</Link>
            </li>

            <li>
              {
                session?.user ? (
                  <div className="px-4 py-2 rounded-md block text-white font-bold shadow-lg hover:shadow-primary/50 active:scale-95 transition-all" style={{ backgroundColor: "#FF6A28" }}>
                    <span className="mx-1"> {session?.user?.name} </span>
                    <span> | </span>
                    <Logout />
                  </div>
                ) : (<Link href="/login" className="px-8 py-2 rounded-md block text-white font-bold shadow-lg hover:shadow-primary/50 active:scale-95 transition-all" style={{ backgroundColor: "#FF6A28" }}>
                  Login
                </Link>)
              }
            </li>
          </ul>
        )
      }
    </nav>
  )
}

export default Navbar