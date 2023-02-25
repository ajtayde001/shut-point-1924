import React, { useState,useEffect } from 'react';
import '../App.css';
import { Button, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react'
import { CartOrderSummary } from '../cardComponent/CartOrderSummary'
//bootstrap
import { useDisclosure } from '@chakra-ui/react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import Alert from 'react-bootstrap/Alert';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  HStack,
  PinInput,
  PinInputField,
} from '@chakra-ui/react'
const Checkout = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const params = useParams();
  const { total } = params;
  
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()
  const [otp1, setotp1]=useState("")
  const [otp2, setotp2]=useState("")
  const [otp3, setotp3]=useState("")
  const [otp4, setotp4]=useState("")
  const [otp, setotp]=useState(0)
  let mainOtp;

  const HandelClick=()=>{
  mainOtp=(Math.floor(Math.random() * 10000));
   
    alert("Your OTP is " + mainOtp);
    setotp(mainOtp)
  }
  // useEffect(()=>{
  
  // },[])
 
  console.log(otp)
  const HandelSubmit=()=>{
   
    let interOtp=otp1+otp2+otp3+otp4
    console.log(interOtp)
    console.log(otp)

    if(otp==interOtp){
      console.log("done")
     
      setShow(true)
      setShow1(false)
    }else{
      console.log("rong")
      setShow1(true)
      setShow(false)
    }
  }
// console.log(otp1,otp2,otp3,otp4)


  return (

    <div className="maincontainer">

      <Alert show={show} variant="success" >
        <Alert.Heading className="d-flex justify-content-center ">congratulations your order ia placed</Alert.Heading>

        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me y'all!
          </Button>
        </div>
      </Alert>
{/* +++++++++++++++++++ */}
      <Alert show={show1} variant="danger" >
        <Alert.Heading className="d-flex justify-content-center ">Please Re-Enter Correct OTP</Alert.Heading>

        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow1(false)} variant="outline-danger">
            Close me y'all!
          </Button>
        </div>
      </Alert>
      <div class="container">

        <div class="row">
          <div class="col-md-4 order-md-2 mb-4">
            <CartOrderSummary grandTotal={total} type={"payment"} />
            {/* <h4 class="d-flex justify-content-between align-items-center mb-3">
                <span class="text-muted">Your cart</span>
                <span class="badge badge-secondary badge-pill">3</span>
              </h4>
              <ul class="list-group mb-3">
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 class="my-0">Product name</h6>
                    <small class="text-muted">Brief description</small>
                  </div>
                  <span class="text-muted">$12</span>
                </li>
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 class="my-0">Second product</h6>
                    <small class="text-muted">Brief description</small>
                  </div>
                  <span class="text-muted">$8</span>
                </li>
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 class="my-0">Third item</h6>
                    <small class="text-muted">Brief description</small>
                  </div>
                  <span class="text-muted">$5</span>
                </li>
                <li class="list-group-item d-flex justify-content-between bg-light">
                  <div class="text-success">
                    <h6 class="my-0">Promo code</h6>
                    <small>EXAMPLECODE</small>
                  </div>
                  <span class="text-success">-$5</span>
                </li>
                <li class="list-group-item d-flex justify-content-between">
                  <span>Total (USD)</span>
                  <strong>$20</strong>
                </li>
              </ul>

              <form class="card p-2">
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Promo code"/>
                  <div class="input-group-append">
                    <button type="button" class="btn btn-secondary">Redeem</button>
                  </div>
                </div>
              </form> */}
          </div>
          <div class="col-md-8 order-md-1">
            <h4 class="mb-3">Billing address</h4>
            <form class="needs-validation" novalidate>
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="firstName">First name</label>
                  <input type="text" class="form-control" id="firstName" placeholder="" required />
                  <div class="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="lastName">Last name</label>
                  <input type="text" class="form-control" id="lastName" placeholder="" required />
                  <div class="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
              </div>

              <div class="mb-3">
                <label for="username">Username</label>
                <div class="input-group">

                  <input type="text" class="form-control" id="username" placeholder="Username" required />
                  <div class="invalid-feedback">
                    Your username is required.
                  </div>
                </div>
              </div>

              <div class="mb-3">
                <label for="email">Email <span class="text-muted">(Optional)</span></label>
                <input type="email" class="form-control" id="email" placeholder="you@example.com" />
                <div class="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>

              <div class="mb-3">
                <label for="address">Address</label>
                <input type="text" class="form-control" id="address" placeholder="1234 Main St" required />
                <div class="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>

              <div class="mb-3">
                <label for="address2">Address 2 <span class="text-muted">(Optional)</span></label>
                <input type="text" class="form-control" id="address2" placeholder="Apartment or suite" />
              </div>

              <div class="row">
                <div class="col-md-5 mb-3">
                  <label for="country">Country</label>
                  <select class="custom-select d-block w-100" id="country" required>
                    <option value="">Choose...</option>
                    <option>India</option>
                  </select>
                  <div class="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>
                <div class="col-md-4 mb-3">
                  <label for="state">State</label>
                  <select class="custom-select d-block w-100" id="state" required>
                    <option value="">Choose...</option>
                    <option>Madhya Pradesh</option>
                  </select>
                  <div class="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>
                <div class="col-md-3 mb-3">
                  <label for="zip">Zip</label>
                  <input type="text" class="form-control" id="zip" placeholder="" required />
                  <div class="invalid-feedback">
                    Zip code required.
                  </div>
                </div>
              </div>
              <hr class="mb-4" />
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="same-address" />
                <label class="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
              </div>
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="save-info" />
                <label class="custom-control-label" for="save-info">Save this information for next time</label>
              </div>
              <hr class="mb-4" />

              <h4 class="mb-3">Payment</h4>

              <div class="d-block my-3">
                <div class="custom-control custom-radio">
                  <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked required />
                  <label class="custom-control-label" for="credit">Credit card</label>
                </div>
                <div class="custom-control custom-radio">
                  <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required />
                  <label class="custom-control-label" for="debit">Debit card</label>
                </div>
                <div class="custom-control custom-radio">
                  <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required />
                  <label class="custom-control-label" for="paypal">Paypal</label>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="cc-name">Name on card</label>
                  <input type="text" class="form-control" id="cc-name" placeholder="" required />
                  <small class="text-muted">Full name as displayed on card</small>
                  <div class="invalid-feedback">
                    Name on card is required
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="cc-number">Credit card number</label>
                  <input type="text" class="form-control" id="cc-number" placeholder="" required />
                  <div class="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-3 mb-3">
                  <label for="cc-expiration">Expiration</label>
                  <input type="text" class="form-control" id="cc-expiration" placeholder="" required />
                  <div class="invalid-feedback">
                    Expiration date required
                  </div>
                </div>
                <div class="col-md-3 mb-3">
                  <label for="cc-expiration">CVV</label>
                  <input type="text" class="form-control" id="cc-cvv" placeholder="" required />
                  <div class="invalid-feedback">
                    Security code required
                  </div>
                </div>
              </div>
              <hr class="mb-4" />
              {/* <Button colorScheme="blue" size="lg" fontSize="md" rightIcon={<FaArrowRight />}
              //  onClick={() =>{

              //   HandelClick()}}
                >
                Checkout
              </Button> */}
              <>
        <Button onClick={()=>{HandelClick()
        onOpen()}} colorScheme="blue" size="lg" fontSize="md" rightIcon={<FaArrowRight />}>Checkout</Button>
        <AlertDialog
          motionPreset='slideInBottom'
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          isOpen={isOpen}
          isCentered
        >
          <AlertDialogOverlay />
  
          <AlertDialogContent>
            <AlertDialogHeader>Discard Changes?</AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
            <HStack>
    <PinInput>
      <PinInputField onChange={(e)=>setotp1(e.target.value)} />
      <PinInputField onChange={(e)=>setotp2(e.target.value)}/>
      <PinInputField onChange={(e)=>setotp3(e.target.value)}/>
      <PinInputField onChange={(e)=>setotp4(e.target.value)}/>
    </PinInput>
  </HStack>
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} rightIcon={<FaArrowRight />}
              onClick={()=>{HandelSubmit()
               onClose()
                }}>
               SUBMIT
              </Button>
              
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </>
            </form>
          </div>
        </div>
        
        <footer class="my-5 pt-5 text-muted text-center text-small">
          <p class="mb-1"> &copy; 2021 AEO Management Co. All Rights Reserved.</p>
          <ul class="list-inline">
            <li class="list-inline-item"><a href="#">Privacy</a></li>
            <li class="list-inline-item"><a href="#">Terms</a></li>
            <li class="list-inline-item"><a href="#">Support</a></li>
          </ul>
        </footer>
      </div>
    </div>

  )
}

export default Checkout;