import React from 'react'
import { useState } from 'react'
import Client from './Client'
import Editor from './Editor'

const EditorPage = () => {
  const [clients,setClients]=useState([
    {socketId:1,userName:"divyanshi"},
    {socketId:2,userName:"rashi"},
  ])
  return (
    <div className='container-fluid vh-100'>
      <div className='row h-100'>
        <div className='col-md-2 bg-dark text-light d-flex flex-column h-100' style={{boxShadow:"2px 0px 4px rgba(0,0,0,0.1)"}}>
          <img src="/codecast.png" alt="codecast" className='img-fluid mx-auto' style={{maxWidth:"150px", marginTop:"-43px"}}/>
          <hr style={{marginTop:"-3rem"}}/>
          <div className='d-flex flex-column overflow-auto'>
            {clients.map((c)=>{
              return(
                  <Client key={c.socketId} username={c.userName}/>
              )
            })} 
          </div>
          
          <div className='mt-auto'>
          <hr />
             <button className='btn btn-success'>Copy Room ID</button>
             <button className='btn btn-danger mt-2 mb-2 px-3 btn-block'>Leave Room</button>
          </div>
        </div>
        <div className='col-md-10 text-light d-flex flex-column h-100'>
          <Editor/>
        </div>
      </div>
    </div>
  )
}

export default EditorPage