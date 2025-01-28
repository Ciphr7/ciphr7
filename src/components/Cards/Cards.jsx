import React, { useEffect, useState } from 'react';
import './Cards.css';
import CardItem from '../CardItem/CardItem';

function Cards({ categoryName }) {
  const [posts, setPosts] = useState([]);
  const [categoryId, setCategoryId] = useState(null);

  useEffect(() => {
    const fetchCategoryId = async () => {
      try {
        const response = await fetch(
          `https://app.ciphr7.com/wp-json/wp/v2/categories?slug=${categoryName}`
        );
        const data = await response.json();

        if (data.length > 0) {
          setCategoryId(data[0].id); // Get the category ID
        } else {
          console.error('Category not found');
        }
      } catch (error) {
        console.error('Error fetching category:', error);
      }
    };

    fetchCategoryId();
  }, [categoryName]);

  useEffect(() => {
    const fetchPosts = async () => {
      if (!categoryId) return;

      try {
        const response = await fetch(
          `https://app.ciphr7.com/wp-json/wp/v2/posts/?_embed&categories=${categoryId}`
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, [categoryId]);

  return (
    <div className='cards'>
      <h1>Our Works</h1>
      <div className='cards__container'>
        <div className='cards__wrapper '>
          {posts.length > 0 ? (
            <ul className='cards__items'>
              {posts.map((post) => {
                const image =
                  post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'images/default.jpg'; // Fallback image
                return (
                  <CardItem
                    key={post.id}
                    src={image}
                    text={post.title.rendered}
                    label=''
                    path={`/post/${post.id}`}
                  />
                );
              })}
            </ul>
          ) : (
            <p>Loading posts...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cards;
