import React from 'react';
import PropTypes from 'prop-types';

import CircularProgress from '@material-ui/core/CircularProgress';

import Post from './Post';

import './posts.sass';

function Posts({ posts, loading }) {
  return loading ? (
    <div className="loading-page">
      <CircularProgress />
    </div>
  ) : (
    <ul className="posts">{posts.map((post, idx) => Post(post, idx))}</ul>
  );
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Posts;
