import React from 'react';
import AddPostForm from './AddPostForm';
import { Button } from 'reactstrap';

const FormWrapper = (props) => {
  return (
    <div>
      <Button
        color="info"
        onClick={props.toggleAddPostForm}
        >
          Show Post Form
        </Button>
        {
          props.showAddPostForm
          ? <AddPostForm addPost={props.addPost} />
          : null
        }
    </div>
  )
}

export default FormWrapper;
