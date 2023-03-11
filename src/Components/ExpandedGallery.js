import React from 'react'

const ExpandedGallery = (props) => {

    function handleImageClick(isGalleryVisible) {
        props.setIsGalleryVisible(!isGalleryVisible)
        }


  return (
    <div className='expandedGallery' onClick={event => handleImageClick(props.isGalleryVisible)}>
        <img src={props.selectedImage.pic} alt={props.selectedImage.description} />
        <p className='description'>{props.selectedImage.description}</p>
    </div>
  )
}

export default ExpandedGallery