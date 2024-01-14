import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {

    const links = [
        {
            id : 1,
            link : "dashboard"
        },
        {
            id : 2,
            link : 'contact'
        },
        {
          id : 3,
          link : 'about'
        }
    ];

  return (
    <div className='flex justify-center items-center list-none gap-6'>
      {
        links.map(({link,id})=>{
            return <li key={id}>
                <Link to={link}>{link}</Link>
            </li>
        })
      }
      
    </div>
  )
}

export default Navbar
