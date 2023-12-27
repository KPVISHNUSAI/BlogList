import BlogItem from '../BlogItem'

import './index.css'

function BlogList({blogs}) {
  return (
    <ul className="blogs">
      {blogs.map(eachBlog => (
        <BlogItem key={eachBlog.id} blogDetails={eachBlog} />
      ))}
    </ul>
  )
}
export default BlogList
