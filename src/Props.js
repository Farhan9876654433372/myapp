import React from 'react'

function Welcome(props){
    return(
        <div>
            <h1>welcome {props.name}</h1>
            <h2> {props.USN}</h2>
            <h2> {props.email}</h2>

        </div>
    )
         
    
}

function Props() {
  return (
    <div><Welcome name="Farhan" USN="4MK19CS056" email="mf2119240@gmail.com"  />
    
    </div>
  )
}

export default Props