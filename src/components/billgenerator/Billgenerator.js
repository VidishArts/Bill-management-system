import React, { useState } from 'react'
import './bill.css'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../../userReducer'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'



const Billgenerator = () => {

  const [fields, setFields] = useState('hide')
  const [remove,setRemove] = useState('+ Add Items')

  const addfields = () => {
    if (fields === 'hide') {
      setFields('show')
      setRemove('Remove Items')
    } else {
      setFields('hide')
      setRemove('+ Add Items')
    }

    
  }



  const [name, setName] = useState('')
  const [tel, setTel] = useState('')
  const [address, setAddress] = useState('')
  const [date, setDate] = useState('')
  const [productquantity,setProductquanity]=useState('')
  const [productname,setProductname]=useState('')
  const [billingprice,setBillingprice]=useState('')
  const [productprice,setProductprice]=useState('')




  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  console.log(users);


  const savedata = (e) => {
    e.preventDefault();
    dispatch(addUser({ name, tel, address, date, productquantity, billingprice , productname , productprice }))
    if(Response){
      toast.success("Your Order Is Booked")
    }


  }


  return (
    <div>
    <div>   <Toaster toastOptions={
      {
        style: {
          backgroundColor: 'coral',
          color: '#fff'
        }
      }
    } /></div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="biling text-center fs-2 my-4">Bill Generator</div>
          </div>
        </div>

        <div className="container">

          <div className="row mt-3"  >
            <div className="col-md-1"></div>
            <div className="col-md-10 box">

              <form onSubmit={savedata} align='center' className="row g-2 pt-3">
                <div className="col ">
                  <label htmlFor="inputEmail4" className="form-label lab">
                    Client Name
                  </label>
                  <input type="text" onChange={e => setName(e.target.value)} name='name' className="form-control" id="inputEmail4" />
                </div>
                <div className="col">
                  <label htmlFor="inputEmail4" className="form-label lab">
                    Client Number
                  </label>
                  <input type="tel" onChange={e => setTel(e.target.value)} name='tel' className="form-control" id="inputEmail4" />
                </div>
                <div className="col">
                  <label htmlFor="inputEmail4" className="form-label lab">
                    Client Address
                  </label>
                  <input type="address" onChange={e => setAddress(e.target.value)} name='address' className="form-control" id="inputEmail4" />
                </div>
                <div className="col">
                  <label htmlFor="inputEmail4" className="form-label lab">
                    Date
                  </label>
                  <input type="date" onChange={e => setDate(e.target.value)} name='date' className="form-control" id="inputEmail4" />
                </div>







                <div className={`${fields}`}>

                 <div className="row">
                   
                 <div className="col ">
                 <label htmlFor="inputEmail4" className="form-label lab">
                   Product Name
                 </label>
                 <input type="text" onChange={e => setProductname(e.target.value)} name='productname' className="form-control" id="inputEmail4" required/>
               </div>
               <div className="col">
                 <label htmlFor="inputEmail4" className="form-label lab">
                   Product Quantity
                 </label>
                 <input type="number" onChange={e => setProductquanity(e.target.value)} name='productquantity' className="form-control" id="inputEmail4" required/>
               </div>
               <div className="col">
                 <label htmlFor="inputEmail4" className="form-label lab">
                  Product Price
                 </label>
                 <input type="address" onChange={e => setProductprice(e.target.value)} name='productprice' className="form-control" id="inputEmail4" required/>
               </div>
               <div className="col">
                 <label htmlFor="inputEmail4" className="form-label lab">
                  Total Price
                 </label>
                 <input type="number" onChange={e => setBillingprice(e.target.value)} name='Billingprice' className="form-control" id="inputEmail4" required/>
               </div>
                 
                 </div>

                </div>




                <div className="col-12" style={{ marginTop: '3%' }}>
                  <button type="button" className="btn btn-info mb-5" onClick={addfields}>
                    {remove}
                  </button>
                </div>

                <div className="col-12" style={{ marginTop: '-2%' }}>
                  <button type="submit" className="btn btn-primary mb-5">
                    Submit
                  </button>
                </div>
              </form>




            </div>
            <div className="col-md-1"></div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Billgenerator
