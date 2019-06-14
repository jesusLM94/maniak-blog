import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <div>
    <Link to={post.frontmatter.title}>
      <div className="title">{post.frontmatter.title} </div>
      <div className="date">({post.frontmatter.date})</div>
    </Link>
  </div>
)

export default PostLink
