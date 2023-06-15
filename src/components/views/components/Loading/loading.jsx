import './loading.scss'
import Spin from '/public/imge/spin.gif'

const LoadingSpin = () => {
  return (
    <div className='Loadingbox'>
      <img src={Spin} alt='로딩중'/>
    </div>
  );
};

export default LoadingSpin;