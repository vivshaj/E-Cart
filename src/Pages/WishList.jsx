import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWishlist } from '../Redux/Slice/wishListSlice'
import { addToCart } from '../Redux/Slice/cartSlice'

function WishList() {
  const wishListArray = useSelector((state=>state.wishListReducer))
  
  const dispatch = useDispatch()
  const handleWishlistToCart = (product)=>{
    dispatch(addToCart(product))
    dispatch(removeFromWishlist(product.id))
  }

  return (
    <div className='w-100 ps-5' style={{marginTop:'50px'}}>
      <Row className='w-100'>
      {
        wishListArray.length>0?
        wishListArray.map((product,index)=>(
          <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
                <Card className='shadow rounded' style={{ width: '18rem',height:'27rem' }}>
                    <Card.Img variant="top" src={product.thumbnail} height={'200px'} />
                    <Card.Body>
                        <Card.Title className='text-primary'>{product.title}</Card.Title>
                        <Card.Text>
                          <p>{product.description.slice(0,50)}...</p>
                          <h5>$ {product.price}</h5>
                        </Card.Text>
                        <div className="d-flex justify-content-between ">
                            <Button className='btn btn-light' onClick={()=>dispatch(removeFromWishlist(product.id))}><i className='fa-solid fa-trash text-danger'></i></Button>
                            <Button className='btn btn-light' onClick={()=>handleWishlistToCart(product)}><i className='fa-solid fa-cart-shopping text-warning'></i></Button>
                        </div>
                    </Card.Body>
                </Card>
          </Col>
        )): <div style={{height:'90vh'}} className="d-flex w-100 flex-column justify-content-start align-items-center">
          <img src="https://bakestudio.in/assets/images/cart/empty-cart.gif" height={'400px'} width={'550px'}  alt="cart empty gif" />
          <h3 className='text-center text-danger'>Wishlist is Empty</h3>
          <Link style={{textDecoration:'none'}} className='btn btn-warning rounded' to={'/'}>Back to Home</Link>
        </div>

      }
      </Row>

    </div>
  )
}

export default WishList