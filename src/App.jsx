// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from './components/profile.jsx'

function App() {
  const users=[
    {
      name:"peter",
      image:"https://i.pinimg.com/originals/6c/e6/12/6ce612510c63dfb27649277246c7e7c2.jpg",
      age:23, 
      bio:"am a programmer who is passionate about coding skills for life time"
    },
    {
      name:"shakirah",
      image:"https://i.pinimg.com/originals/6c/e6/12/6ce612510c63dfb27649277246c7e7c2.jpg",
      age:21,
      bio:"a hardware programmer who likes to explore new technologies"
    },
    {
      name:"john",
      age:20,
      image:"https://i.pinimg.com/originals/6c/e6/12/6ce612510c63dfb27649277246c7e7c2.jpg",
      bio:"A cybersecurity research professional who loves to explore zero days exploitation"
    },
    {
      name:"Joy",
      age:18,
      image:"https://i.pinimg.com/originals/6c/e6/12/6ce612510c63dfb27649277246c7e7c2.jpg",
      bio:"A mathematician who loves to challenge the unsolved mathematics problems of our time."
    },

  ]

const image="https://i.pinimg.com/originals/6c/e6/12/6ce612510c63dfb27649277246c7e7c2.jpg"
const bio="am a programmer who is passionate about coding skills for life time"
return (
  <>
    <h2 className='heading'>Profile images</h2>
    <div className='cardInfo'>
    {users.map((user,index)=>{
      return <ProfileCard key={index} name={user.name} age={user.age} profilePicture={user.image} bio={user.bio} />
    })}

    </div>
    </>
  )
}
export default App
