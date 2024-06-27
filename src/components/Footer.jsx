import React from 'react'
import { Link } from 'react-router-dom'
import '../components/Home.css'

function Footer() {
  return (
    <div>
         <div className="footer  bg-warning">

<div className="container-fluid">

  <div className="fun text-start  ms-3">
  <img height={80}  className='mt-2 rounded-circle' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&s" alt="" />

  </div>
  <div className="row">
    <div className="col-4 mt-2 mb-2 text-start ms-3">


 <h4 className=''>Description</h4>

 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolores, sapiente odio error animi eligendi doloribus alias. Itaque consectetur aut adipisci non amet, officiis, laboriosam perferendis aspernatur beatae deleniti harum!</p>

<h6>PHONE NO : <span className='text-danger'>+918169028940</span></h6>
<h6>EMAIL : <span className='text-danger'> ayushshelar@gmail.com</span></h6>
</div>

<div className="col-2 mt-2 ms-5 text-start">
<h4>Our Services</h4>

<ul className=''>
  <li>GST</li>
  <li>FINANCIAL LOAN</li>
  <li>INVESTMENT</li>
  <li>ACCOUNTING FINANCE</li>
  <li>NGO/TRUST</li>
  <li>FINANCIAL ACCOUNTING</li>
</ul>
</div>

<div className="col-2 mt-2 ms-5 text-start">
<h4>Quick Links</h4>

<ul className='lists '>
  <li ><Link className='font' to="/Home">Home</Link></li>
  <li><Link className='font' to="/Abouts">About</Link></li>
  <li><Link className='font' to="/Service">Service</Link></li>
  <li><Link className='font' to="/Career">Career</Link></li>
  <li><Link className='font' to="/Contacts">Contact us</Link></li>
</ul>

</div>

<div className="col-2 mt-2">
     <h4>Social Media</h4>

     <div className="icons">
     
     <img height={30} className='rounded-circle' src="https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266_640.jpg"alt="" />
     <img height={30} className='rounded-circle ms-3' src="https://cdn.pixabay.com/photo/2016/11/06/09/54/facebook-1802605_1280.png"alt="" />
     <img height={30} className='rounded-circle ms-3' src="https://cdn.pixabay.com/photo/2017/06/22/14/23/twitter-2430933_640.png"alt="" />
     </div>

     <div className='mt-3'>
     <img height={30} className='rounded-circle' src="https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_640.png"alt="" />
     <img height={30} className='rounded-circle ms-3' src="https://cdn.pixabay.com/photo/2017/08/22/11/56/linked-in-2668696_640.png"alt="" />
     <img height={30} className='rounded-circle ms-3' src="https://cdn.pixabay.com/photo/2016/04/24/14/34/youtube-1349699_640.png"alt="" />
     </div>
</div>

</div>
</div>
</div>
    </div>
  )
}

export default Footer