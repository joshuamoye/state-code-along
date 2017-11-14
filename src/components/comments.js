import React from 'react';
import OneComment from './one-comment';

class Comments extends React.Component {
constructor(){
  super();
  this.state={
    newComment: ['working?']
  }
}


  render() {
    const comments = this.props.comments.map( (item, index) => <OneComment key={index} comment={item}/>)
    return (
      <div>
        {comments}
      </div>
    );
  }
}

export default Comments;
