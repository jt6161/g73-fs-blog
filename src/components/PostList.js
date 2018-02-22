import React from 'react'
import { ListGroup } from 'reactstrap'
import Post from './Post'

const PostList = (props) => {
  console.log(props);
  let listOfPosts = props.post.map((currPost, i) => {
    return <Post key={i} post={currPost}/>
  })

  return (
    <ListGroup>
      {listOfPosts}
    </ListGroup>
  )
}

export default PostList;
