import React from 'react';
import PropTypes from 'prop-types';

import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';

import Upvotes from './Upvotes';

import './post.sass';

function Post(
  { thumbnail, ups, permalink, url, title, author, subreddit },
  idx
) {
  const isMobile = useMediaQuery('(max-width:600px)');
  const showThumbnail = thumbnail.match(
    /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g
  );

  return (
    <li key={idx} className="post">
      <div className="metrics">
        {!isMobile && <Upvotes ups={ups} isMobile={isMobile} />}

        {showThumbnail ? (
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img className="thumbnail" src={thumbnail} alt="thumbnail" />
          </a>
        ) : null}
      </div>

      <div className="content">
        <div className="title">
          <a
            href={`https://www.reddit.com${permalink}`}
            target="_blank"
            rel="noopener noreferrer"
          >
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

        {isMobile && <Upvotes ups={ups} isMobile={isMobile} />}
      </div>
    </li>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  idx: PropTypes.number.isRequired
};

export default Post;
