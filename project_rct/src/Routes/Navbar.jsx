import { Link } from "react-router-dom";
import React, { useState, useEffect,useContext } from 'react';
import { AuthConetxt } from '../Context/AuthContextProvider';
import {
  Input,Divider
} from '@chakra-ui/react'
import { FaSearch, FaHeart, FaShoppingBag ,FaUser} from 'react-icons/fa'
function Navbar() {
  const [stickyClass, setStickyClass] = useState('');
  const [show, setShow] = useState(false);
  const {serach,setSearch}= useContext(AuthConetxt);

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 150 ? setStickyClass('sticky-nav') : setStickyClass('');
    }
  };
  return (
    <div>
      <div className={`navbar ${stickyClass}`} onMouseOver={() => setShow(true)} onMouseLeave={() => setShow(false)}>
        <Link to="/" ><div className="logo"><img src={require('../images/logo.png')} style={{ width: 40, height: 30 }} /><b style={{ marginTop: 10 }}>Indian Eagle</b></div></Link>

        <Link to="/men" className='nav-link' >Men</Link>
        <Link to="/women" className='nav-link'  >Women</Link>
        <Link to="/jeans" className='nav-link'  >Jeans</Link>
        <Link to="/winter" className='nav-link'  >Winter</Link>
        <Link to="/sale" className='nav-link'  >sale</Link>
        <Link to="/singup" className='nav-link'  >SingUp</Link>


        
       

        <div className="icon" style={{  gap:"20px"}} >
          <Input placeholder='Search' style={{ width: 200 }}onChange={(e)=>setSearch(e.target.value)} />
          <FaSearch fontSize="1.25rem" role={"button"} style={{ marginTop: 10, marginLeft: 10 }} />
          <Link to="/login"  >  <FaUser fontSize="1.25rem" role={"button"} style={{ marginTop: 10, marginLeft: 10 }} /></Link>
          <FaHeart fontSize="1.25rem" role={"button"} style={{ marginTop: 10, marginLeft: 10 }} />
          <Link to="/_card"  >    <FaShoppingBag fontSize="1.25rem" role={"button"} style={{ marginTop: 10, marginLeft: 10 }} /></Link>
        </div>
      </div>
      {/* 

       {show && <div className="modal" >
         
       <Container style={{display: "unset",}}>
  
    
     <Stack
       direction={{
         base: 'column-reverse',
         md: 'column',
         lg: 'row',
       }}
       spacing={{
         base: '12',
         md: '8',
       }}
     >
       <Stack direction="row" spacing="8" flex="1">
         <Stack spacing="4" minW="36" >
           <Text fontSize="sm" fontWeight="semibold" color="subtle">
             TOPS
           </Text>
           <Stack spacing="3" shouldWrapChildren>
             <Button variant="link">T-shirt</Button>
             <Button variant="link">Graphic Tees</Button>
             <Button variant="link">Shirt</Button>
           </Stack>
         </Stack>
         <Stack spacing="4" minW="36" flex="1">
           <Text fontSize="sm" fontWeight="semibold" color="subtle">
             BOTTOMS
           </Text>
           <Stack spacing="3" shouldWrapChildren>
             <Button variant="link">Jeans</Button>
             <Button variant="link">Shorts</Button>
             <Button variant="link">Pants</Button>
           </Stack>
         </Stack>
         
       </Stack>
    
     </Stack>
  
  
 </Container>
           
           </div>} */}
            <Divider />
    </div>
  )
}

export default Navbar 