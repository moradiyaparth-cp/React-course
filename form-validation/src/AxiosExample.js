import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Axios = () => {
    const [userData, setData] = useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            console.log(response)
            setData(response.data)
        })
    }, [])
  return (
    <div>
        <h1 style={{textAlign:'center'}}>Axios Example</h1>

            <table>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Website</th>
                    </tr>
        {userData.map((data, i) => {
            return(
               

                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>{data.name}</td>
                        <td>{data.username}</td>
                        <td>{data.email}</td>
                        <td>{data.website}</td>
                    </tr>
              
            )
        })}
            </table>
    </div>
  )
}

export default Axios