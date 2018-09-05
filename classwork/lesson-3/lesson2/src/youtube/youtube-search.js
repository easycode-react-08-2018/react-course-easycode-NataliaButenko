import React, {Component} from 'react';

export class YoutubeSearch extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    }
  };

  render() {

    return(
      <div>
        <input type='test' value={this.state.value}/>
        <div>
          <button className='repository'>Repository</button>
          <button className='organization'>Organization</button>
        </div>

      </div>
    )

  }
}