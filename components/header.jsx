import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Initials from '../public/images/logo.svg'
import { GrMenu, GrClose } from 'react-icons/gr'
import Github from '../public/images/github.svg'
import Twitter from '../public/images/twitter.svg'
import Linkedin from '../public/images/linkedin.svg'
function Header() {
  const router = useRouter()
  const [showNav, setShowNav] = useState(false)
  return (
    <header className="py-5 mb-10">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <a className="flex flex-col z-50 md:ml-3">
            <Image
              src={Initials}
              alt="Chrissie Muhorakeye"
              width={50}
              height={50}
              Layout="fill"
            />
          </a>
        </Link>
        <>
          <ul className="hidden md:flex justify-between items-center w-94">
            <li className="mr-5 hover:underline">
              <Link href="/blog">
                <a
                  className={router.pathname == '/blog' ? 'active p-2' : 'p-2'}
                >
                  Blog
                </a>
              </Link>
            </li>
            <li className="mr-5 hover:underline">
              <Link href="/projects">
                <a
                  className={
                    router.pathname == '/projects' ? 'active p-2' : 'p-2'
                  }
                >
                  Projects
                </a>
              </Link>
            </li>
            <li className="mr-10 hover:underline">
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
            <li className="mr-5">
              <a href="https://github.com/chrissiemhrk">
                <Image src={Github} alt="Github logo" width={20} height={20} />
              </a>
            </li>
            <li className="mr-5">
              <a href="https://twitter.com/chrissiemhrk">
                <Image
                  src={Twitter}
                  alt="Twitter logo"
                  width={20}
                  height={20}
                />
              </a>
            </li>
            <li className="mr-5">
              <a href="https://linkedin.com/in/chrissiemhrk">
                <Image
                  src={Linkedin}
                  alt="Linkedin logo"
                  width={20}
                  height={20}
                />
              </a>
            </li>
          </ul>
        </>
        <button onClick={() => setShowNav(true)} className="block md:hidden">
          <GrMenu fontSize={25} className="menu-icon" />
        </button>
        {showNav && (
          <div
            className="absolute top-0 left-0 w-full border-b md:hidden"
            style={{
              backgroundColor: '#181818',
              padding: '1.25rem 1.6rem',
              borderBottomColor: '#fafafa'
            }}
          >
            <button
              onClick={() => setShowNav(false)}
              className="block float-right md:hidden pr-2  pt-3.5"
            >
              <GrClose className="menu-icon" fontSize={25} />
            </button>
            <ul className="pt-10 px-2" onClick={() => setShowNav(false)}>
              <li className="mb-3 mt-8">
                <Link href="/blog">
                  <a>Blog</a>
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/projects">
                  <a>Projects</a>
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/snippets">
                  <a>Snippets</a>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
