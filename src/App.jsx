// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from './components/profile.jsx'

function App() {
  // const [count, setCount] = useState(0)
const image="https://i.pinimg.com/originals/6c/e6/12/6ce612510c63dfb27649277246c7e7c2.jpg"
const bio="am a programmer who is passionate about coding skills for life time"
return (
  <>
    <div className='cardInfo'>
      <ProfileCard profilePicture={image} name="peter wahu" age={22} bio={bio}/>
    </div>
    </>
  )
}
export default App
