import { useState } from 'react';
import { useEffect } from 'react'
import { musicState  } from '../../../../store/store.jsx';
import { useRecoilState } from 'recoil';
import { getYoutube } from '../../../../utils/apis/apis.jsx';
import LoadingSpin from '../Loading/loading.jsx';
import './modal.scss'

function ModalOpen () {

  const [musicList, setMusicList] = useRecoilState(musicState);
  const [loading, setLoading] = useState(true);
  const [music, setMusic] = useState([]);
  const [link, setLink] = useState("");
  const [play, setPlay] = useState(false);

  async function createList() {
    setLoading(true); 
    try {
      const param = await getYoutube();
      setMusic(param.items);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    createList();
  },[]);

  const musicEvent = (key, img) => {
    let play = false;
    let paths = "";

    const path = "https://www.youtu.be/"+key;
    if(path === link) {
      play = false;
        setPlay(false);
        setLink("");
    } else{
      play = true;
        setLink(path);
        setPlay(true);
        paths = path;``
    }

    const musicInfo = {
      playStatus : play,
      thumNailImag : img,
      youtubeLink: paths,
    };
    setMusicList(musicInfo);
  }

  return(
    <div className="ModalContainer">
      {loading ? <LoadingSpin/> : null}
      {music && music.map((obj, index) => (
        <div className='music_box' key={index}>
          <img src={obj.snippet.thumbnails.maxres.url} 
          onClick={() => musicEvent(obj.snippet.resourceId.videoId, obj.snippet.thumbnails.maxres.url)}/>        
        </div>
      ))}
    </div>
  )
}
export default ModalOpen