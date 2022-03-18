import React from 'react'

const index = () => {
  return (
    <section>
      <h1 className="text-3xl font-semibold mb-10">Chrissie Muhorakeye</h1>
      <section>
        <p className="mb-5 font-light">
          I've always loved computers and the internet, ever since I was a kid.
          I was in high school when I built my first program for a Computer
          Science class. I fell in love with it and I decided right then and
          there that programming would be my future.
        </p>
        <p className="mb-5 font-light">
          The first language I learned was Scratch, and after that came C and
          Python. After taking a few classes in high school, though, I ran into
          a problem: the curriculum didn't cover web development at all. So I
          searched the internet for courses to learn web development and came
          upon FreeCodeCamp, where I taught myself the fundamentals of frontend
          web development.
        </p>
        <p className="mb-5 font-light">
          Now I work as a frontend developer at Ossix Technologies, where we're
          building 2u Money — a financial platform that lets users send money to
          anybody, anywhere in Africa. In my free time, when I'm not reading
          manga or watching YouTube videos (or k-dramas), you can find me
          experimenting with new web technologies, writing for my blog, and
          studying as much as possible about frontend design and development!
        </p>
      </section>
      <section className="mt-20">
        <p className="mb-5 font-light">
          Find me on:{' '}
          <a
            href="https:/github.com/chrissiemhrk"
            className="underline font-normal"
          >
            GitHub
          </a>
          ,{' '}
          <a
            href="https:/twitter.com/chrissiemhrk"
            className="underline font-normal"
          >
            Twitter
          </a>
          ,{' '}
          <a
            href="https:/linkedin.com/in/chrissiemhrk"
            className="underline font-normal"
          >
            LinkedIn
          </a>
        </p>
        <p className="mb-5 font-light">
          Mail me at{' '}
          <a
            href="mailto:chrissiemhrk@gmail.com"
            className="underline font-normal"
          >
            chrissiemhrk@gmail.com
          </a>
        </p>
      </section>
    </section>
  )
}
export default index
