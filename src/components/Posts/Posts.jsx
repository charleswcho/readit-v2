import React from 'react';
import PropTypes from 'prop-types';

import CircularProgress from '@material-ui/core/CircularProgress';

import Post from '../Post/Post';

import './Posts.sass';

const Posts = ({ posts, loading, handleScrollBottom }) => {
  const handleScrollEvent = ({ target }) => {
    if (target.scrollHeight - target.scrollTop === target.clientHeight) {
      handleScrollBottom();
    }
  };

  return loading ? (
    <div className="loading-page">
      <CircularProgress />
    </div>
  ) : (
    <ul className="posts" onScroll={handleScrollEvent}>
      {posts.map((post, idx) => (
        <Post post={post} idx={idx} />
      ))}
    </ul>
  );
};

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      thumbnail: PropTypes.string.isRequired,
      ups: PropTypes.number.isRequired,
      permalink: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      subreddit: PropTypes.string.isRequired,
    }),
  ).isRequired,
  loading: PropTypes.bool.isRequired,
  handleScrollBottom: PropTypes.func.isRequired,
};

export default Posts;
