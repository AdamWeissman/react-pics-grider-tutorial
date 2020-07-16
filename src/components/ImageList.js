import './ImageList.css'
import React from 'react';
import ImageCard from './ImageCard'


//if you wanted the list item to be in a div, you'd need to put the key on the div
// also note how destructuring converts the iterator in place. const images = props.images.map(({ description, id, urls }) => {
const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} pic={image} />
  })
  return <div className="image-list">{images}</div>
};

export default ImageList;