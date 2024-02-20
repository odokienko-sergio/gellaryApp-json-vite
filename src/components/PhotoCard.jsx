import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Card = styled.div`
  position: relative;
  border: 1px solid #ccc;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`;

const Details = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  box-sizing: border-box;
`;

const PhotoCard = ({ photo }) => {
    return (
        <Card>
            <Image src={photo.previewURL} alt={photo.tags} />
            <Details>
                <span>{photo.tags}</span>
                <p>Likes: {photo.likes}</p>
            </Details>
        </Card>
    );
};

PhotoCard.propTypes = {
    photo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        previewURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired,
};

export default PhotoCard;
