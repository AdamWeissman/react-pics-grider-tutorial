import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
        params: { query: term },
        
      });
      // }).then((responseFromUnsplash) => {
      //   console.log(responseFromUnsplash.data.results)
      // }); <- this promise based syntax, an alternate to async await syntax
    this.setState ({ images: response.data.results });
  }

  render() { 
  return ( 
    <div className="ui container" style={{ marginTop: '10px'}}>
      <SearchBar myOnSubmit={this.onSearchSubmit} />
      <ImageList images={this.state.images} />
      Found: {this.state.images.length} images
    </div>
    );
  }
}
export default App;