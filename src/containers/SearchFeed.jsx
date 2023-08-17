import React, { useState, useEffect} from 'react';
import { Box, Typography } from '@mui/material';
import { Videos } from '../components';
import { fetchFromAPI } from '../constants/fetchFromAPI';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);

  // useEffect for changing rendering of webpage whenever a search is submitted
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      //use .then for async functions 
      .then((data) => setVideos(data.items))
  }, [searchTerm]);

  return (
    // coded to dynamically changed types of videos based on search
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>

    <Typography variant='h4' fontWeight="bold" marginBottom={2} sx={{ color: 'white' }}>
      Search reslts for: <span style={{ color: '#F31503' }}>
        {searchTerm}
      </span> videos
    </Typography>

    <Videos videos={videos} />

  </Box>
  )
}

export default SearchFeed