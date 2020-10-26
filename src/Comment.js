//your code here
import React, { Component } from 'react'

class Comment extends Component {
    render(){
        return(
            <div calssName="comment">
                {this.props.commentText}
            </div> 
        )
    }
}

export default Comment