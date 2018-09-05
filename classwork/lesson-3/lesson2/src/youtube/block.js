import React, {Component} from 'react';

const blockStyle = {
  height: '300px',
  width: '300px',
  backgroundColor: 'yellow',
};

export class ResizeableBlock extends Component {
  constructor() {
    super();
    this.state = {
      style: blockStyle
    }
  }
  componentDidMount() {
    window.addEventListener('resize', (event) => {
      if(window.innerWidth < 800 && window.innerHeight < 800) {
        this.setState({
          style: {
            width: '150px',
            height: '150px',
            backgroundColor: 'yellow'
          }
        })
        return;
      }
      this.setState({
        style: {
          width: '300px',
          height: '300px',
          backgroundColor: 'red'
        }
      })
      // console.log('height', window.innerHeight);
      // console.log('weight', window.innerWidth);
    })
  }

  componentWillUnmount() {
    console.log('component Will Unmount');
  }

  render() {
    return(
      <div style={this.state.style}>

      </div>
    )
  }
}