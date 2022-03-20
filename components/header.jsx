import React from 'react'
import Link from 'next/link'
function Header() {
  return (
    <header className="py-5 mb-10">
      <nav className="flex justify-center md:justify-end items-center">
        <ul className="flex justify-between items-center w-94">
          <li className="mr-5 hover:underline">
            <Link href="/">
              <a>About</a>
            </Link>
          </li>
          <li className="mr-5 hover:underline">
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li className="mr-10 hover:underline">
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </li>
          <li className="hidden md:block mr-5">
            <a
              href="https://github.com/chrissiemhrk"
              className="underline text-sm"
            >
              GitHub
            </a>
          </li>
          <li className="hidden md:block mr-5">
            <a
              href="https://twitter.com/chrissiemhrk"
              className="underline text-sm"
            >
              Twitter
            </a>
          </li>
          <li className="hidden md:block kmr-5">
            <a
              href="https://linkedin.com/in/chrissiemhrk"
              className="underline text-sm"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
