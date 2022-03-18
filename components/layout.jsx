import React, { useState } from 'react'

import Header from './header'
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen justify-between container mx-auto w-5/6 md:w-11/12">
      <Header />
      <main className="mb-auto mx-auto mt-20 w-5/6 md:w-5/12">{children}</main>
      <footer className="mx-auto w-5/6 md:w-9/12 text-xs pb-5">
        &copy; {new Date().getFullYear()}, Chrissie Muhorakeye
      </footer>
    </div>
  )
}

export default Layout
