import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import ProfilePic from '../public/images/chrissie.png'
import { GrMenu, GrClose } from 'react-icons/gr'
const Layout = ({ children }) => {
  const router = useRouter()
  const [showNav, setShowNav] = React.useState(false)
  return (
    <div className="flex flex-col h-screen justify-between container mx-auto w-5/6 md:w-3/4">
      <header className="py-5 font-medium mb-10">
        <nav className="flex justify-between items-center">
          <Link href="/">
            <a className="flex">
              <span className="hidden md:block">
                <Image
                  src={ProfilePic}
                  alt="Picture of the Chrissie"
                  width={50}
                  height={50}
                />
              </span>
              <span className="flex flex-col md:ml-3">
                <span>Chrissie Muhorakeye</span>
                <span>Frontend Developer & UI Designer</span>
              </span>
            </a>
          </Link>
          <>
            <ul className="hidden md:flex justify-between w-60 navigation-links">
              <li>
                <Link href="/blog">
                  <a
                    className={
                      router.pathname == '/blog' ? 'active p-2' : 'p-2'
                    }
                  >
                    Blog
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/snippets">
                  <a
                    className={
                      router.pathname == '/snippets' ? 'active p-2' : 'p-2'
                    }
                  >
                    Snippets
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a
                    className={
                      router.pathname == '/contact' ? 'active p-2' : 'p-2'
                    }
                  >
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </>
          <button onClick={() => setShowNav(true)} className="block md:hidden">
            <GrMenu fontSize={25} />
          </button>
          {showNav && (
            <div className="absolute bg-emerald-600 text-slate-100 top-0 left-0 w-full p-8 mobile-menu md:hidden">
              <div className="flex justify-between">
                <Link href="/">
                  <a className="flex">
                    <span className="hidden md:block">
                      <Image
                        src={ProfilePic}
                        alt="Picture of the Chrissie"
                        width={50}
                        height={50}
                      />
                    </span>
                    <span className="flex flex-col md:ml-3">
                      <span>Chrissie Muhorakeye</span>
                      <span>Frontend Developer & UI Designer</span>
                    </span>
                  </a>
                </Link>
                <button
                  onClick={() => setShowNav(false)}
                  className="block md:hidden"
                >
                  <GrClose className="close-menu" fontSize={25} />
                </button>
              </div>
              <ul className="mt-10" onClick={() => setShowNav(false)}>
                <li className="mb-3">
                  <Link href="/blog">
                    <a className="py-2">Blog</a>
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="/snippets">
                    <a className="py-2">Snippets</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a className="py-2">Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </header>
      <main className="mb-auto mx-auto w-5/6 md:w-7/12">{children}</main>
      <footer className="">this is a footer</footer>
    </div>
  )
}

export default Layout
