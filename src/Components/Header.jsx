import React from 'react'
import { Nav , Container, Navbar, Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
    const wishList = useSelector((state=>state.wishListReducer))
    const cart = useSelector((state=>state.cartReducer))
  return (
    <>
      <Navbar expand="lg" className="bg-primary position-fixed top-0 w-100" style={{zIndex:1}}>
      <Container>
        <Navbar.Brand>
            <Link to={'/'} style={{color:'white',fontWeight:'bold',textDecoration:'none'}}>
            <i class="fa-solid fa-truck-fast fa-bounce"></i>{' '}E-cart
            </Link>  
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>
                <Link to={'/wishlist'} style={{color:'white',fontWeight:'bold',textDecoration:'none'}}>
                    <i class="fa-solid fa-heart text-danger"></i>{' '}Wishlist
                    <Badge bg="success rounded ms-2">{wishList.length}</Badge>
                </Link>
            </Nav.Link>
            <Nav.Link>
                <Link to={'/cart'} style={{color:'white',fontWeight:'bold',textDecoration:'none'}}>
                <i class="fa-solid fa-cart-shopping text-warning"></i>{' '}Cart
                <Badge bg="success rounded ms-2">{cart.length}</Badge>
                </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header