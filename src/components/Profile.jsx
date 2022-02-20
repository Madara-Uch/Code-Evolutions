import React from 'react';

function Profile() {
  return (
    <div style={{display:"flex",flexDirection:"row",height:"100vh"}}>
        <div style={{height:"inherit" , backgroundColor:"lightcoral",width:"30%"}}>
            <div style={{height:"30%", backgroundColor:"lightgreen"}}></div>
            <div style={{height:"70%", backgroundColor:"lightyellow"}}></div>
        </div>
        <div style={{height:"inherit" , backgroundColor:"lightblue",width:"70%"}}></div>
    </div>
  )
}

export default Profile