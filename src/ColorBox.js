import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  opacityRender() {
    if (this.props.opacity >= 0.2) {
      let newOpacity = this.props.opacity -.1;
      return <ColorBox opacity={newOpacity} />
    }
    else {
      return null
    }
  }

  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>{this.opacityRender()}</div>
    )
  }

}

