import React from 'react'
import '../components/Home.css'

function Service() {
  return (
    <div>
      <h1>OUR SERVICES</h1>

      <div className="container-fluid">

       <div className="row">

        <div className="col-4">

        <div className="items ">
          <img height={250} width={400} className='rounded' src="https://d3nn873nee648n.cloudfront.net/900x600/15990/5-SS666734.jpg" alt="" /></div>
          <h5>GST</h5>
        </div>
        <div className="col-4">
        <div className="items">
          <img height={250} width={400} className='rounded' src="https://cdn.pixabay.com/photo/2021/11/30/15/33/realtor-6835635_640.png" alt="" /></div>
          <h5>FINANCIAL LOAN</h5>
        </div>
        <div className="col-4">
        <div className="items">
          <img height={250} width={400} className='rounded' src="https://cdn.pixabay.com/photo/2017/09/07/08/54/money-2724241_1280.jpg" alt="" /></div>
          <h5>INVESTMENT</h5>
        </div>
        </div>

        <div className="row mt-4">
          <div className="col-4">
          <img height={250} width={400} className='rounded' src="https://cdn.pixabay.com/photo/2019/04/02/09/27/income-tax-4097292_640.jpg" alt="" />
          <h5>ACCOUNTING FINANCE</h5>
          </div>
          <div className="col-4">
          <img height={250} width={400} className='rounded' src="https://cdn.pixabay.com/photo/2015/10/31/21/31/bookkeeper-1016299_640.jpg" alt="" />
          <h5>FINANCIAL ACCOUNTING</h5>
          </div>
          <div className="col-4">
           <img height={250} width={400} className='rounded' src="https://media.istockphoto.com/id/1318617341/photo/low-angle-view-group-of-volunteers-busy-working-by-arranging-vegetables-and-clothes-on.jpg?s=612x612&w=0&k=20&c=CJsDJ1nIMKr5NPBQufc5eyjsbSV_3XhqgcQusavGXIk=" alt="" />
           <h5>NGO/TRUST</h5>
          </div>
        </div>

        


      

        


       
      

      </div>
    </div>
  )
}

export default Service