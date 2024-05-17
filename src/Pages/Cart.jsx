import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { emptyCart, removeFromCart } from '../Redux/Slice/cartSlice'


function Cart() {

  const cartArray = useSelector((state=>state.cartReducer))
  
  const dispatch = useDispatch()
  const [totPrice,setTotPrice]=useState(0)
  const navigate = useNavigate()


  useEffect(() => {
    setTotPrice(cartArray.reduce((p1,p2)=>p1+p2.price,0))        
  }, [cartArray])

  //another way
  /*
  const getCartTotal=()=>{
    if(cartArray.length>0) {
      setTotPrice(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }else {
      setTotalPrice(0)
    }
  }

  useEffect(() => {
    getCartTotal();
  }, [cartArray])
  */

  const handleCheckOut=()=>{
    dispatch(emptyCart()) 
    alert("Order placed successfully...Thank You For Purchasing") 
    navigate('/')  
  }
  
  return (
    <div className='w-100 ps-5' style={{marginTop:'50px',marginBottom:'30px'}}>
      <Row className='w-100'>
      {
        cartArray.length>0?
        <div className="row">
          <div className="col-lg-8">
            <table className='table shadow rounded'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product Name</th>
                  <th>Product Image</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>

                {
                cartArray.map((product,index)=>(
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{product.title}</td>
                    <td><img height={'250px'} width={'400px'} src={product.thumbnail} alt="product image" /></td>
                    <td>${product.price}</td>
                    <td><button className='btn' onClick={()=>dispatch(removeFromCart(product.id))}><i className='fa-solid fa-trash text-danger'></i></button></td>
                  </tr>
                ))
                }
              </tbody>
            </table>
          </div>
          <div className="col-lg-3">
            <div className="border mt-3 rounded shadow p-2 w-100">
              <h1 className='text-primary'>Cart Summary</h1>
              <h4>Total Products: <span className='fs-2 text-success'>{cartArray.length}</span></h4>
              <h5>Total: <span className='text-danger fw-bolder fs-2' >${totPrice}</span></h5>
              <div className="d-grid">
                <button className='btn btn-success' onClick={handleCheckOut}>Check Out</button>
              </div>
            </div>
          </div>

        </div>: <div style={{height:'90vh'}} className="d-flex w-100 flex-column justify-content-start align-items-center">
          <img src="https://bakestudio.in/assets/images/cart/empty-cart.gif" height={'400px'} width={'550px'}  alt="cart empty gif" />
          <h3 className='text-center text-danger'>Cart is Empty</h3>
          <Link style={{textDecoration:'none'}} className='btn btn-warning rounded' to={'/'}>Back to Home</Link>
        </div>
      }
      </Row>

    </div>
  )
}

export default Cart