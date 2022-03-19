import React from 'react'

const uses = () => {
  return (
    <section className="pb-10">
      <h3>What I use in my day to day activities</h3>
      <details className="mt-10">
        <summary className="font-medium">Desk setup</summary>
        <p className="pl-8 mt-1">MacBook Pro 2018 15''</p>
      </details>
      <details className="mt-10">
        <summary className="font-medium">Coding</summary>
        <details className="pl-8 mt-1">
          <summary className="">Editor</summary>
          <p className="pl-8 mt-1">VSCode</p>
        </details>
        <details className="pl-8 mt-1">
          <summary className="">Theme</summary>
          <p className="pl-8 mt-1">Electron Highlighter</p>
        </details>
        <details className="pl-8 mt-1">
          <summary className="">Terminal</summary>
          <p className="pl-8 mt-1">ITerm2 (zsh)</p>
          <p className="pl-8 mt-1">Fig</p>
        </details>
        <details className="pl-8 mt-1">
          <summary className="">Browser</summary>
          <p className="pl-8 mt-1">Firefox Developer Edition</p>
        </details>
        <details className="pl-8 mt-1">
          <summary className="">Design</summary>
          <p className="pl-8 mt-1">Figma</p>
        </details>
      </details>
      <details className="mt-10">
        <summary className="font-medium">Productivity</summary>
        <p className="pl-8 mt-1">Apple Notes</p>
        <p className="pl-8 mt-1">Apple Reminder</p>
        <p className="pl-8 mt-1">Flow</p>
      </details>
    </section>
  )
}

export default uses
