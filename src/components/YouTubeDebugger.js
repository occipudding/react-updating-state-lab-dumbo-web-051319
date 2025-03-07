import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {
  constructor() {
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  bitrateClickHandler = () => this.setState({
    settings: {
      ...this.state.settings,
      bitrate: 12
    }
  });

  resolutionClickHandler = () => this.setState({
    settings: {
      ...this.state.settings,
      video: {
        resolution: '720p'
      }
    }
  })

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.bitrateClickHandler}>Bitrate: {this.state.settings.bitrate}</button>
        <button className="resolution" onClick={this.resolutionClickHandler}>Resolution: {this.state.settings.video.resolution}</button>
      </div>
    )
  }
}
