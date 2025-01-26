import React from 'react';
import PropTypes from 'prop-types';


function CardItem({ src, text, label, path }) {
  return (
    <li className='cards__item'>
      <a className='cards__item__link' href={path}>
        <figure className='cards__item__pic-wrap' data-category={label}>
          <img src={src} alt='Post' className='cards__item__img' />
        </figure>
        <div className='cards__item__info'>
          {/* Use dangerouslySetInnerHTML to render raw HTML */}
          <div dangerouslySetInnerHTML={{ __html: text }} />
        </div>
      </a>
    </li>
  );
}

CardItem.propTypes = {
  src: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default CardItem;