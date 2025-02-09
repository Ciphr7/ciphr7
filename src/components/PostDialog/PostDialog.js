import React, { useEffect, useState } from 'react';


function PostDialog({ postId, onClose }) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://app.ciphr7.com/wp-json/wp/v2/posts/${postId}?_embed`);
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    if (postId) {
      fetchPost();
    }
  }, [postId]);

  if (!post) return null;

  const image = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'images/default.jpg';

  // Function to strip shortcodes and excessive HTML
  const cleanContent = (content) => {
    return content
      .replace(/\[.*?\]/g, '') // Remove shortcodes like [et_pb_section]
      .replace(/<[^>]+>/g, '') // Remove HTML tags
      .replace(/&nbsp;/g, ' ') // Replace non-breaking spaces
      .trim(); // Remove extra spaces
  };

  return (
    <div className="post-dialog-backdrop" onClick={onClose}>
      <div className="post-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✖</button>
        <img src={image} alt={post.title.rendered} className="post-image" />
        <h2 className="post-title">{post.title.rendered}</h2>
        <p className="post-content">{cleanContent(post.content.rendered)}</p>
      </div>
    </div>
  );
}

export default PostDialog;
