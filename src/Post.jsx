import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import './post.sass';

function Thumbnail({ thumbnail }) {
  const showThumbnail =
    thumbnail !== 'self' && thumbnail !== 'default' && thumbnail !== 'nsfw';

  return showThumbnail ? (
    <img className="thumbnail" src={thumbnail} alt="thumbnail" />
  ) : null;
}

Metrics.propTypes = {
  thumbnail: PropTypes.string.isRequired
};

function Metrics({ thumbnail, ups }) {
  return (
    <div className="metrics">
      <div className="upvotes">
        <ArrowUpwardIcon className="upvote-icon" fontSize="small" />

        <Typography variant="body1" gutterBottom>
          {ups.toLocaleString()}
        </Typography>
      </div>

      <Thumbnail thumbnail={thumbnail} />
    </div>
  );
}

Metrics.propTypes = {
  post: PropTypes.object.isRequired
};

function Content({ url, title, author, subreddit }) {
  return (
    <div className="content">
      <div className="title">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <Typography variant="body2" gutterBottom>
            {title}
          </Typography>
        </a>
      </div>
      <div className="under">
        <div className="author">
          <Typography variant="caption" gutterBottom>
            by
            <a
              href={`https://www.reddit.com/user/${author}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              {author}
            </a>
          </Typography>
        </div>
        <div className="subreddit">
          <Typography variant="caption" gutterBottom>
            to
            <a
              href={`https://www.reddit.com/r/${subreddit}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              {subreddit}
            </a>
          </Typography>
        </div>
      </div>
    </div>
  );
}

Content.propTypes = {
  post: PropTypes.object.isRequired
};

function Post(post, idx) {
  return (
    <li key={idx} className="post">
      {Metrics(post, idx)}
      {Content(post)}
    </li>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  idx: PropTypes.number.isRequired
};

export default Post;
