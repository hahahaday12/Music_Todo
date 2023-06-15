import {
  RecoilRoot,
} from 'recoil'; 
import LandingPage from './components/views/LandingPage/LandingPage'
import './App.scss'

function App() {

  return (
    <>
    <RecoilRoot> 
      <LandingPage/>
    </RecoilRoot>  
    </>
  )
}

export default App
