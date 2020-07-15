import React from 'react';

class SearchBar extends React.Component {
  render () {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>IMAGE SEARCH</label>
            <input type="text"></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;