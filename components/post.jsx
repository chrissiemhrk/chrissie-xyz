import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const post = ({ post }) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <a className="flex items-center justify-between cursor-pointer border-b border-stone-700 py-3 md:px-10">
        <h3>{post.frontmatter.title}</h3>
        <small>{post.frontmatter.date}</small>
      </a>
    </Link>
  )
}

export default post
