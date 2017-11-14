import React from 'react';
import OneComment from './one-comment';

class Comments extends React.Component {
constructor(){
  super();
  this.state={
    newComments: ['working?']
  }
}


  render() {
    const comments = this.props.comments.map( (item, index) => <OneComment key={index} comment={item}/>)
    const comments = this.state.newComments.map( (item, index) => <OneComment key={index} comment={item}/>)

    return (
      <div>
        {comments}
        {newComments}
      </div>
    );
  }
}

export default Comments;
