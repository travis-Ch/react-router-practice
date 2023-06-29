import { useState } from "react"
import { Navigate } from "react-router-dom"
export default function About() {
  const [user, setUser]= useState('mario')

  if(!user) {
    return <Navigate to="/" replace={true}/>
  }

  return (
    <div className='about'>
        <h2>About us</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quaerat quia optio beatae nihil similique incidunt, voluptate deleniti voluptatibus tenetur corporis animi. Modi corrupti cupiditate ea repellendus incidunt. Non, id. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti aut eveniet ad tenetur atque, ipsa dolorum accusantium facere placeat vero sint minima possimus, eligendi amet nihil, quas voluptatum. Exercitationem, atque?</p>

        <button onClick={() => setUser(null)}>Logout</button>
    </div>
  )
}
