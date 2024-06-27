import React from 'react'
import  '../components/Home.css'

function Contacts() {
  return (
    <div>
    <div className="six">
        <h1 className='text1'>Contact Us</h1>

        <p className='four'>Any questions or remarks? just write us a message!</p>
        <div className="input">
        <label className='mo'>Email :</label>
        <input type="email" className='on ms-3' placeholder='Enter valid email address' />

        <label className='mo ms-3'>Name :</label>
        <input type="text" className='on ms-3' placeholder='Enter your Name'/>
        </div>

        <button  id='submit' className='btn btn-outline-primary'>SUBMIT</button>
    </div>

<div  className="back bg-primary p-5">
 <div className="ten d-flex rounded justify-content-between">
  <div className='om ms-5'>
  <img height={100} className='gun' src="https://cdn.pixabay.com/photo/2017/07/01/23/09/logo-2463101_640.png" alt="" />
   
   <h3>ABOUT CLUB</h3>
    <p className='text-light'>Running Guide <br/> Workouts</p>
    </div>
<div className='rom'>
  <img height={78} src="https://cdn.pixabay.com/photo/2017/01/31/14/36/blue-2024619_640.png" alt="" />
  <h3>PHONE (LANDLINE)</h3>
  <p className='text-light'>+ 912 3 567 8987 <br />
  + 912 5 252 3336</p>
  </div>
  <div className='tom me-5'>
  <img height={78} src="https://cdn.pixabay.com/photo/2013/07/13/14/05/location-162102_640.png" alt="" />
   <h3>OUR OFFICE LOCATION</h3>
   <p className='text-light'>The Interior Design Studio Company <br />
   The Courtyard, ​Al Quoz 1,​ Colorado, ​ USA</p>
   </div>
     </div>
     </div>
    </div>
  )
}

export default Contacts