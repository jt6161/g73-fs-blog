import React from 'react';
import { ListGroupItem } from 'reactstrap';

const Post = (props) => {
  return (
    <ListGroupItem>
    <h3>{props.post.title}</h3>
    <p> - {props.post.author}</p>
    <p>{props.post.content}</p>
  </ListGroupItem>)
}

export default Post;
