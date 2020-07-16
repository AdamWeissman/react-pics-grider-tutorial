import React from 'react';


//if you wanted the list item to be in a div, you'd need to put the key on the div

const ImageList = (props) => {
  const images = props.images.map(({ description, id, urls }) => {
    return <img alt={description} key={id} src={urls.regular} />
  })
  return <div>{images}</div>
};

export default ImageList;