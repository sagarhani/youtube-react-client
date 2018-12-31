import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component {

    state = { videos: [] };
    onSearchSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
    this.setState({ videos: response.data.items });
    console.log(response);
    };

    render() {
        return (
            <div className="ui container"> 
                <SearchBar onFormSubmit={this.onSearchSubmit}/>
                Fetched { this.state.videos.length } videos.
            </div>
        )
    }
};

export default App;