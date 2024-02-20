import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PhotoCard from './PhotoCard';

const GalleryContainer = styled.div`
  max-width: 360px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const PhotoGallery = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch('https://pixabay.com/api/?key=19026224-3e73fe5ba621ff9035f503b47')
            .then(response => response.json())
            .then(data => {
                if (data && data.hits) {
                    setPhotos(data.hits);
                }
            })
            .catch(error => console.error('Error fetching photos:', error));
    }, []);

    return (
        <GalleryContainer>
            {photos.map(photo => (
                <PhotoCard key={photo.id} photo={photo} />
            ))}
        </GalleryContainer>
    );
}

PhotoGallery.propTypes = {
    data: PropTypes.shape({
        hits: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                previewURL: PropTypes.string.isRequired,
                tags: PropTypes.string.isRequired,
                likes: PropTypes.number.isRequired,
            })
        ).isRequired,
    }).isRequired,
};

export default PhotoGallery;
