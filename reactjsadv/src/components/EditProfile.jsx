import React, { useContext, useState } from 'react'
import {AppContext} from '../App'

export default function EditProfile() {
    const {setUserName} = useContext(AppContext)
    const [userNameADD, setuserNameADD] = useState('')
  return (
    <div>
        <h1>EditProfile</h1>
        <input type="text" onChange={(e)=>{
            setuserNameADD(e.target.value)
        }} />
        <button onClick={()=>{
            setUserName(userNameADD)
        }} >ADD</button>
    </div>
  )
}
