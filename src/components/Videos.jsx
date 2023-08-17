import React from 'react';
import { Stack, Box } from '@mui/material';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

const Videos = ({ videos, direction }) => {

  return (
    <Stack 
     direction={ direction || "row" }
     flexWrap="wrap" 
     justifyContent="start" 
     gap={2}
    >
      {videos.map((item, index) =>(
        <Box key={index}>
          {/* Takes into consideration what the API returns and what to present on the app */}
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos