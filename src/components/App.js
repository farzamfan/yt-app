import React from 'react';

import SearchBar from './SearchBar';
import Youtube from '../apis/youtube';
import VideoList from './videoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { videos: [], selectedVideo: null };
  }

  componentDidMount() {
    this.onSearchSubmit('trending');
  }

  onSearchSubmit = async (term) => {
    const response = await Youtube.get('/search', {
      params: {
        q: term,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (v) => {
    this.setState({ selectedVideo: v });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
