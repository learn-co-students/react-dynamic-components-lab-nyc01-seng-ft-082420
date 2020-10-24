import React, { Component } from 'react'
//your code here

class Comment extends Component {
    render() {
        return (
            <div className="comment">
                {this.props.commentText}
            </div>
        )
    }

}

export default Comment;