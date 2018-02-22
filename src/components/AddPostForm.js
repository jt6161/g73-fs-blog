import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

class AddPostForm extends Component {
  state = {
    title: '',
    author: '',
    content: ''
  }

  handleSubmit = e => {
    e.preventDefault()
    let { title, author, content } = this.state
    this.props.addPost({
      title,
      author,
      content
    })
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="title-field">Title</Label>
              <Input
                type="text"
                id="title-field"
                onChange={e => this.setState({ title: e.target.value })}
                value={this.state.title}
                />
            </FormGroup>
            <FormGroup>
              <Label for="content-field">Content</Label>
              <Input
                type="text"
                id="content-field"
                onChange={e => this.setState({ content: e.target.value })}
                value={this.state.content}
                />
            </FormGroup>
            <FormGroup>
              <Label for="author-field">Author</Label>
              <Input
                type="text"
                id="author-field"
                onChange={e => this.setState({ author: e.target.value })}
                value={this.state.author}
                />
            </FormGroup>
            <Button type='submit'>Submit</Button>
        </Form>
     </Container>
    )
  }
}

export default AddPostForm;
