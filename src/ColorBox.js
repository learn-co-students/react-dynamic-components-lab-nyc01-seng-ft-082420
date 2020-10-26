import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity /*replace null with the value*/}}>
        {/* your conditional code here! */}
        {/* {console.log(this.props.opacity)} */}
        { this.props.opacity >= 0.2 ? <ColorBox opacity={this.props.opacity - 0.1}/> : null }
        {/* {console.log("minus 0.1: " + (this.props.opacity - 0.1) )} */}
      </div>
    )
  }

}

