import {React,useState} from 'react'
import { toast } from 'react-hot-toast';
import {v4 as uuid} from 'uuid'

const Home = () => {
    const [roomId,setroomId]=useState("");
    const [userName,setuserName]=useState("")

    const generateRoomId=(e)=>{
        e.preventDefault()
        const id=uuid();
        setroomId(id)
        toast.success("Room Id is generated")
    }

  return (
    <div className='container-fluid'>
       <div className='row justify-content-center align-items-center min-vh-100'>
            <div className='col-12 col-md-6'>
                <div className='card shadow-sm p-2 mb-5 bg-secondary rounded'>
                    <div className='card-body text-center bg-dark'>
                        <img className="img-fluid mx-auto d-block" src="./codecast.png" alt="logo" style={{maxWidth:"150px"}}/>
                        <h4 className='text-light'>Enter the ROOM ID</h4>
                        <div className='form-group'>
                            <input type="text" className='form-control mb-2' placeholder='ROOM ID' value={roomId} onChange={(e)=>setroomId(e.target.value)}/>
                        </div>
                        <div className='form-group'>
                            <input type="text" className='form-control mb-2' placeholder='USERNAME' value={userName} onChange={(e)=>setuserName(e.target.value)}/>
                        </div>
                        <button className='btn btn-success btn-lg btn-block'>JOIN</button>
                        <p className='mt-3 text-light'>Don't have a room ID? create <span className='text-success p-2' style={{cursor:"pointer"}} onClick={generateRoomId}>New Room</span></p>

                    </div>
                </div>
            </div>

       </div>






    </div>
  )
}

export default Home