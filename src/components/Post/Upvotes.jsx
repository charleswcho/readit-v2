import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import './Upvotes.sass';

function Upvotes({ ups, isMobile }) {
  const iconFontSize = isMobile ? 'inherit' : 'small';
  const fontSize = isMobile ? 'caption' : 'body1';

  return (
    <div className="upvotes">
      <ArrowUpwardIcon className="upvote-icon" fontSize={iconFontSize} />

      <Typography variant={fontSize} gutterBottom>
        {ups.toLocaleString()}
      </Typography>
    </div>
  );
}

Upvotes.propTypes = {
  ups: PropTypes.number.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default Upvotes;
