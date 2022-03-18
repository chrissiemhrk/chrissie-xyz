import React from 'react'

const uses = () => {
  return (
    <section className="pb-10">
      <h3>What I use in my day to day activities</h3>
      <h4 className="mt-5 font-medium">Desk setup</h4>
      <ul className="pl-8 mt-1">
        <li>MacBook Pro 2018 15''</li>
      </ul>
      <h4 className="mt-5 font-medium">Coding</h4>
      <ul className="pl-8">
        <li className="flex flex-col">
          <span className="mt-2">Editor</span>
          <span className="pl-5 mt-2">VSCode</span>
        </li>
        <li className="flex flex-col mt-5">
          <span>Theme</span>
          <span className="pl-5 mt-2">Electron Highlighter</span>
        </li>
        <li className="flex flex-col mt-5">
          <span>Terminal</span>
          <span className="pl-5 mt-2">ITerm2 (zsh)</span>
        </li>
        <li className="flex flex-col mt-5">
          <span>Browser</span>
          <span className="pl-5 mt-2">Firefox Developer Edition</span>
        </li>
        <li className="flex flex-col mt-5">
          <span>Design</span>
          <span className="pl-5 mt-2">Figma</span>
        </li>
      </ul>
      <h4 className="mt-5 font-medium">Productivity</h4>
      <ul className="pl-8">
        <li className="mt-2">Apple Notes</li>
        <li className="mt-2">Apple Reminder</li>
        <li className="mt-2">Flow</li>
      </ul>
    </section>
  )
}

export default uses
