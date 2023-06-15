import  { useEffect, useState } from 'react';
import LoadingSpin from '../Loading/loading';
import YouTube from 'react-player';
import { getYoutubeVideo } from '../../../../utils/apis/apis';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

import './videomodal.scss'

function VideomodalContent () {

  const [videoplay, setVideoPlay] = useState();
  const [loading, setLoading] = useState(true);

  async function VideoPlayer() {
    setLoading(true);  
    try {
      const param = await getYoutubeVideo();
      setVideoPlay(param.items);
      setLoading(false); 
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=> {
    VideoPlayer();
  },[]);

 

  return (
    <div className='InnerVideo-container'>
      <p>실시간 방송과 함께 집중도를 높여보세요!</p>
        {loading ? <LoadingSpin/> : null} 
        <Carousel autoPlay={false}>
          {videoplay && videoplay.map((items, index) => (
          <Paper key={index}>
            <div className='video_box'>
              <YouTube
                url={"https://www.youtu.be/"+items.snippet.resourceId.videoId} 
                loop={false} 
                controls={true}
              />
            </div>   
          </Paper>
          ))}
        </Carousel>      
    </div>
  );
}

export default VideomodalContent;