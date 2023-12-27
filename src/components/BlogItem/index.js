// Write your JS code here
import './index.css'

function BlogItem(params) {
  const {key, blogDetails} = params
  const {title, description, publishedDate} = blogDetails
  return (
    <li className="each-blog" key={key}>
      <div className="post-head-date">
        <h1 className="profile-name">{title}</h1>
        <p className="profession">{publishedDate}</p>
      </div>
      <div className="post-description">
        <p className="profession">{description}</p>
        <hr />
      </div>
    </li>
  )
}

export default BlogItem
