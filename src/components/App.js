import React, { useState } from 'react';

import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import StarIcon from '@material-ui/icons/Star';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import NewReleasesIcon from '@material-ui/icons/NewReleases';

import Posts from './Posts/Posts';

import useDataApi from '../utils/useDataApi';

import './App.sass';

function App() {
  const isMobile = useMediaQuery('(max-width: 600px)');
  const [filter, setFilter] = useState('best');
  const [data, loading, , getData] = useDataApi('https://www.reddit.com/best.json', {
    children: [],
  });
  const [count, setCount] = useState(25);
  const posts = data.children.map((child) => child.data);

  const handleSelectChange = (event) => {
    setFilter(event.target.value);

    getData(`https://www.reddit.com/${event.target.value}.json`);
    setCount(25);
  };

  const handleTabChange = (_, newValue) => {
    setFilter(newValue);

    getData(`https://www.reddit.com/${newValue}.json`);
    setCount(25);
  };

  const handleScrollBottom = () => {
    const before = data.before ? `&before=${data.before}` : '';

    getData(`https://www.reddit.com/hot.json?after=${data.after}${before}&count=${count}`);
    setCount(count + 25);
  };

  return (
    <div className="App">
      {!isMobile && (
        <AppBar position="static">
          <Toolbar className="toolbar">
            <a href="/">
              <Typography variant="h6">Readit</Typography>
            </a>

            <FormControl>
              <Select value={filter} onChange={handleSelectChange}>
                <MenuItem value="best">
                  <StarIcon className="select-icon" fontSize="small" /> Best
                </MenuItem>
                <MenuItem value="hot">
                  <TrendingUpIcon className="select-icon" fontSize="small" />
                  Hot
                </MenuItem>
                <MenuItem value="new">
                  <NewReleasesIcon className="select-icon" fontSize="small" />
                  New
                </MenuItem>
              </Select>
            </FormControl>
          </Toolbar>
        </AppBar>
      )}

      <Posts posts={posts} loading={loading} handleScrollBottom={handleScrollBottom} />

      {isMobile && (
        <AppBar position="fixed" color="primary" className="app-bar">
          <Tabs variant="fullWidth" value={filter} onChange={handleTabChange}>
            <Tab value="best" icon={<StarIcon />} label="Best" />
            <Tab value="hot" icon={<TrendingUpIcon />} label="Hot" />
            <Tab value="new" icon={<NewReleasesIcon />} label="New" />
          </Tabs>
        </AppBar>
      )}
    </div>
  );
}

export default App;
