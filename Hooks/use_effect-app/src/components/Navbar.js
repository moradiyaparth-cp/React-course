import React, {useEffect} from 'react'

const Navbar = ({color}) => {
   // Case 1: Run on evry render
    useEffect(() => {
        alert("Hey i will run on evry render");
        })

     // Case 2: Run only on first render
    useEffect(() => {
         alert("Hey welcome to my page. This is the first render");
     }, [])

     // Case 3: Run only when certain values changes
    useEffect(() => {
        alert("Hey i am running because color was changed");
    }, [color])

    // Example of Cleanup function
    useEffect(() => {
        alert("Hey welcome to my page. This is the first render of App.js");
        
   return () =>{
     alert("component was unmounted")
   }
    }, [])

  return (
    <div>I am a Navbar of {color} color</div>
  )
}

export default Navbar