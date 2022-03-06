import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const post = ({ post }) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <a className="flex items-center cursor-pointer">
        <span className="mr-5">
          {post.frontmatter.cover && (
            <Image
              src={post.frontmatter.cover}
              alt={post.frontmatter.cover_alt}
              width={100}
              height={100}
            />
          )}
        </span>
        <div>
          <h3 className="font-medium">{post.frontmatter.title}</h3>
          <small className="italic"> Posted on {post.frontmatter.date}</small>
          <p>{post.frontmatter.excerpt}</p>
        </div>
      </a>
    </Link>
  )
}

export default post
