import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { Videos, ChannelCard } from '../components';
import { fetchFromAPI } from '../constants/fetchFromAPI';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  
  // using useParams to get access to id inside this code
  const { id } = useParams();

  // re-renders webpage everytime id changes
  useEffect(() => {
    // fetches channel data for channel page
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));

    // fetches videos data on the channel page
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items));
  }, [id])

  return (
    <Box minHeight="95vh">
      <Box>
        {/* top banner gradient cover image */}
        <div style={{
          height:'280px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }} />

        {/* reused channelcard component to render channel icon, title & sub count  */}
        {/* Note: margintop is used dynamically in channelcard code: margintop is 
        passed as a prop and only adjusts margintop when passed in code in other file i.e.: here */}
        <ChannelCard channelDetail={channelDetail} marginTop="-120px"  />
      </Box>

      <Box display="flex" p="2">
        {/* render the videos specific to the channel */}
        <Box sx={{ mr: { sm:'130px' }}} />
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail