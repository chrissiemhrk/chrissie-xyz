import Link from 'next/link'
import React, { useState } from 'react'

import Header from './header'
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen justify-between container mx-auto w-5/6 md:w-11/12">
      <Header />
      <main className="mb-auto mx-auto mt-10 w-11/12 md:w-10/12 lg:w-5/12">
        {children}
      </main>
      <footer className="mx-auto w-11/12 flex flex-row justify-between items-center lg:w-9/12 text-xs pb-5">
        <p>&copy; {new Date().getFullYear()}, Chrissie Muhorakeye</p>
      </footer>
    </div>
  )
}

export default Layout
