import * as C from './styles';
import Lottie from 'react-lottie';
import animationData from '../../assets/loading.json'

export const Loading = ()=>{

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    renderSettings:{
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return(
    <C.Container>
      <Lottie options={defaultOptions} isClickToPauseDisabled/>
    </C.Container>
  )
}