import React, { useEffect } from 'react'
import { useState } from 'react';
import axios  from 'axios'

const Home = () => {
    const [users, setUsers] = useState();

    useEffect(() => {
      
        axios.get("http://localhost:8080/users")
            .then(res => {
                console.log(res)
                setUsers(res.data)
            })
        .catch(err=>console.log(err))
     
    }, [])
    

  return (
      <div>Home</div>
      
  )
}

export default Home