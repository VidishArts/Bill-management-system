import React from 'react'
import './custom.css'
import { useSelector } from 'react-redux'

const Customers = () => {
   
  const users = useSelector((state)=>state.users);

    return (
        <div>


                    <div className="container">
                      <div className="row">
                        <div className="col-md-12">

                        <div className='heading' >Customer List Table</div>
                           
                           
                        </div>
                      </div>

                      <div className="row" style={{marginTop:'5%'}}>
                       <div className="col-md-12">
                       <table className="table table-dark table-striped table-hover">
                       <thead>
                         <tr>
                           <th scope="col">Client Name</th>
                           <th scope="col">Contact Details</th>
                           <th scope="col">Address</th>
                           <th scope="col">Billing Date</th>
                           <th scope="col">Product Quantity</th>
                           <th scope="col">Billing Price</th>
                     
                         </tr>
                       </thead>
                       <tbody>
                       
                       {users.map((user,index)=>(
                        <tr key ={index} >
                              <td>{user.name}</td>
                              <td>{user.tel}</td>
                              <td>{user.address}</td>
                              <td>{user.date}</td>
                              <td>{user.productquantity}</td>
                              <td>{user.billingprice}</td>
                           
                        </tr>
                       ))}
                      
                       </tbody>
                     </table>
                       </div>
                      </div>
                    </div>



        </div>
    )
}

export default Customers
