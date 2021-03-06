import React, { useEffect } from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.min.css'
const postPage = ({ frontmatter: { title, date }, slug, content }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      Prism.highlightAll()
    }
  }, [])
  return (
    <section className="blog-post pb-12 flex-row">
      <Link href="/blog">
        <a className="  lg:fixed left-80">&#8592; Blog</a>
      </Link>
      <h1 className="text-3xl mb-2 mt-10 lg:mt-0 font-normal">{title}</h1>
      <small className="text-stone-300">{date}</small>
      <ReactMarkdown children={content} className="my-10 leading-7" />
    </section>
  )
}

export default postPage

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join(process.cwd(), 'posts'))
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', '')
    }
  }))
  return {
    paths: paths,
    fallback: false
  }
}
export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join(process.cwd(), 'posts', slug + '.md'),
    'utf8'
  )
  const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      slug,
      content
    }
  }
}
