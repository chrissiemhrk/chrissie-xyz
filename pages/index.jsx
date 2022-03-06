import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Post from '../components/post'
const index = ({ posts }) => {
  return (
    <section>
      <h1 className="text-3xl font-semibold mb-10">Hey, I'm Chrissie</h1>
      <p className="mb-20">
        I’m a Frontend Developer and UI Designer based in Kigali. I am currently
        at the Adventist University of Central Africa (AUCA) in Software
        Engineering. <br />
        <br />
        By day, you can find me writing for my blog, coming up with new designs
        on Figma, or programming with either ReactJS or VueJS. <br />
        <br />
        By night, I’m typically spending time with my family, watching YouTube
        videos or reading books. You can reach out on Twitter{' '}
        <a
          href="https://twitter.com/chrissiemhrk"
          className="border-b border-red-800 text-red-800"
        >
          @chrissiemhrk
        </a>{' '}
        or via email:{' '}
        <a
          href="mailto:chrissiemhrk@gmail.com"
          className="border-b border-red-800 text-red-800"
        >
          chrissiemhrk@gmail.com
        </a>
        .
      </p>
      <h2 className="text-xl font-medium mb-10">Recent Articles</h2>
      {posts.map((post) => {
        return <Post post={post} key={post.slug} />
      })}
    </section>
  )
}
export default index

export async function getStaticProps() {
  const files = fs.readdirSync(path.join(process.cwd(), 'posts'))
  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '')
    const markdownWithMeta = fs.readFileSync(
      path.join(process.cwd(), 'posts', filename),
      'utf8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)
    return {
      slug,
      frontmatter
    }
  })

  return {
    props: {
      posts: posts
    }
  }
}
