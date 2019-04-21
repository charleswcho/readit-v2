import React, { useState, useEffect } from 'react';

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

import Posts from './Posts';

import './App.sass';

function App() {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [selectValue, setSelectValue] = useState('best');
  const [tabValue, setTabValue] = useState('best');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // default url (front page of Reddit)
    let url = 'https://www.reddit.com/best.json';
    // If subreddits exist we make a custom url
    // if (reddit) {
    //   url = `https://www.reddit.com/r/${reddit}.json`
    // }

    getPosts(url);
  }, []);

  async function getPosts(url) {
    console.log(url);

    try {
      const res = await fetch(url);
      const json = await res.json();
      const posts = json.data.children.map(child => child.data);

      setPosts(posts);
    } catch (err) {
      console.error(err);
    }
  }

  const handleSelectChange = event => {
    setSelectValue(event.target.value);

    getPosts(`https://www.reddit.com/${event.target.value}.json`);
  };

  const handleTabChange = (_, newValue) => {
    setTabValue(newValue);

    getPosts(`https://www.reddit.com/${newValue}.json`);
  };

  return (
    <div className="App">
      {!isMobile ? (
        <AppBar position="static">
          <Toolbar className="toolbar">
            <Typography variant="h6">Readit</Typography>

            <FormControl>
              <Select value={selectValue} onChange={handleSelectChange}>
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
      ) : null}

      <Posts posts={posts} />

      {isMobile ? (
        <AppBar position="fixed" color="primary" className="app-bar">
          <Tabs variant="fullWidth" value={tabValue} onChange={handleTabChange}>
            <Tab value="best" icon={<StarIcon />} label="Best" />
            <Tab value="hot" icon={<TrendingUpIcon />} label="Hot" />
            <Tab value="new" icon={<NewReleasesIcon />} label="New" />
          </Tabs>
        </AppBar>
      ) : null}
    </div>
  );
}

export default App;
