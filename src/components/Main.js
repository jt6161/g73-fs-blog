import React from 'react';
import PostList from './PostList';
import FormWrapper from './FormWrapper';
import { Container, Row, Col } from 'reactstrap';


const Main = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <FormWrapper
            showAddPostForm={props.showAddPostForm}
            toggleAddPostForm={props.toggleAddPostForm}
            addPost={props.addPost}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <PostList
            post={props.posts}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default Main;
