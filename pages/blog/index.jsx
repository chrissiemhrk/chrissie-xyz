import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Post from '../../components/post'

const blog = ({ posts }) => {
  return (
    <section className="pb-10">
      {posts.map((post) => {
        return <Post post={post} key={post.slug} />
      })}
    </section>
  )
}

export default blog

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
      posts: posts.sort(
        (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
      )
    }
  }
}
