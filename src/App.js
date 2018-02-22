import React, { Component } from 'react';
import './App.css';
import TopNav from './components/TopNav';
import Main from './components/Main';
import axios from 'axios';


class App extends Component {
    state = {
      showAddPostForm: false,
      posts: []
    }

    async componentDidMount() {
      let response = await fetch(`http://localhost:8000/posts`)
      let postArr = await response.json()
      this.setState({ posts: postArr})
    }

    toggleAddPostForm = () => {
      this.setState({ showAddPostForm: !this.state.showAddPostForm})
    }

    addPost = async (newPost) => {
      let response = await axios.post(`http://localhost:8000/posts`, newPost)
      console.log('response', response);
    }

    render() {
      return (
        <div className="App">
          <TopNav />
          <Main
            posts={this.state.posts}
            showAddPostForm={this.state.showAddPostForm}
            toggleAddPostForm={this.toggleAddPostForm}
            addPost={this.addPost}
         />
        </div>
      )
    }
  }

export default App;
