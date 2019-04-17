import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import './post.sass';

const First = (post, idx) => {
  // default thumbnail
  let img = (
    <div className="thumbnail">
      <i className="fa fa-book fa-4x" aria-hidden="true" />
    </div>
  );

  const { thumbnail, ups } = post;

  // Replace default thumbnail with given thumbnail
  if (thumbnail !== 'self' && thumbnail !== 'default' && thumbnail !== 'nsfw') {
    img = <img className="thumbnail" src={thumbnail} alt="thumbnail" />;
  }

  return (
    <div className="first">
      <div className="upvotes">
        <ArrowUpwardIcon className="select-icon" fontSize="small" />

        <Typography variant="body1" gutterBottom>
          {ups.toLocaleString()}
        </Typography>
      </div>
      {img}
    </div>
  );
};

const Second = post => {
  const { url, title, author, subreddit } = post;

  return (
    <div className="second">
      <div className="title">
        <a href={url}>
          <Typography variant="body2" gutterBottom>
            {title}
          </Typography>
        </a>
      </div>
      <div className="under">
        <div className="author">
          <Typography variant="caption" gutterBottom>
            by
            <a href={`https://www.reddit.com/user/${author}`}> {author}</a>
          </Typography>
        </div>
        <div className="subreddit">
          <Typography variant="caption" gutterBottom>
            to
            <a href={`https://www.reddit.com/r/${subreddit}`}> {subreddit}</a>
          </Typography>
        </div>
      </div>
    </div>
  );
};

const Post = (post, idx) => {
  return (
    <li key={idx} className="post">
      {First(post, idx)}
      {Second(post)}
    </li>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  idx: PropTypes.number.isRequired
};

export default Post;
