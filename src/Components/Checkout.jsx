import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'sonner';

const Checkout = () => {

    const cart = useSelector((state)=>state.cart.cart);
    const dispatch = useDispatch();

    const subtotal = Math.round(cart?.map((item)=> item.qty * item.price).reduce((a,c)=>a+c,0))
    const total = subtotal + 10;

  return (
    <>
     <div className="container-fluid bg-secondary mb-5">
        <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: "300px"}}>
            <h1 className="font-weight-semi-bold text-uppercase mb-3">Checkout</h1>
            <div className="d-inline-flex">
                <p className="m-0"><a href="/">Home</a></p>
                <p className="m-0 px-2">-</p>
                <p className="m-0">Checkout</p>
            </div>
        </div>
    </div>
    <br />
    <div className="container-fluid pt-5">
        <div className="row px-xl-5">
            <div className="col-lg-8">
                <div className="mb-4">
                    <h4 className="font-weight-semi-bold mb-4">Billing Address</h4>
                    <div className="row">
                        <div className="col-md-6 form-group">
                            <label>First Name</label>
                            <input className="form-control" type="text" placeholder="John"/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Last Name</label>
                            <input className="form-control" type="text" placeholder="Doe"/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>E-mail</label>
                            <input className="form-control" type="text" placeholder="example@email.com"/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Mobile No</label>
                            <input className="form-control" type="text" placeholder="+123 456 789"/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Address</label>
                            <input className="form-control" type="text" placeholder="123 Street"/>
                        </div>
                       
                        <div className="col-md-6 form-group">
                            <label>Country</label>
                            <select className="custom-select">
                                <option selected>United States</option>
                                <option>India</option>
                                <option>Russia</option>
                                <option>Canada</option>
                            </select>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>City</label>
                            <input className="form-control" type="text" placeholder="New York"/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>State</label>
                            <input className="form-control" type="text" placeholder="New York"/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>ZIP Code</label>
                            <input className="form-control" type="text" placeholder="123"/>
                        </div>
                        {/* <div className="col-md-12 form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="newaccount"/>
                                <label className="custom-control-label" for="newaccount">Create an account</label>
                            </div>
                        </div> */}
                        <div className="col-md-12 form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="shipto"/>
                                <label className="custom-control-label" for="shipto"  data-toggle="collapse" data-target="#shipping-address">Ship to different address</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="collapse mb-4" id="shipping-address">
                    <h4 className="font-weight-semi-bold mb-4">Shipping Address</h4>
                    <div className="row">
                        <div className="col-md-6 form-group">
                            <label>First Name</label>
                            <input className="form-control" type="text" placeholder="John"/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Last Name</label>
                            <input className="form-control" type="text" placeholder="Doe"/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>E-mail</label>
                            <input className="form-control" type="text" placeholder="example@email.com"/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Mobile No</label>
                            <input className="form-control" type="text" placeholder="+123 456 789"/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Address Line 1</label>
                            <input className="form-control" type="text" placeholder="123 Street"/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Address Line 2</label>
                            <input className="form-control" type="text" placeholder="123 Street"/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Country</label>
                            <select className="custom-select">
                                <option selected>United States</option>
                                <option>Afghanistan</option>
                                <option>Albania</option>
                                <option>Algeria</option>
                            </select>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>City</label>
                            <input className="form-control" type="text" placeholder="New York"/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>State</label>
                            <input className="form-control" type="text" placeholder="New York"/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>ZIP Code</label>
                            <input className="form-control" type="text" placeholder="123"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card border-secondary mb-5">
                    <div className="card-header bg-secondary border-0">
                        <h4 className="font-weight-semi-bold m-0">Order Total</h4>
                    </div>
                    <div className="card-body">
                        <h5 className="font-weight-medium mb-3">Products</h5>
                       
                        
                        
                        <hr className="mt-0"/>
                        <div className="d-flex justify-content-between mb-3 pt-1">
                            <h6 className="font-weight-medium">Subtotal</h6>
                            <h6 className="font-weight-medium">${subtotal}</h6>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-medium">Shipping</h6>
                            <h6 className="font-weight-medium">$10</h6>
                        </div>
                    </div>
                    <div className="card-footer border-secondary bg-transparent">
                        <div className="d-flex justify-content-between mt-2">
                            <h5 className="font-weight-bold">Total</h5>
                            <h5 className="font-weight-bold">${total}</h5>
                        </div>
                    </div>
                </div>
                <div className="card border-secondary mb-5">
                    <div className="card-header bg-secondary border-0">
                        <h4 className="font-weight-semi-bold m-0">Payment</h4>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" name="payment" id="paypal"/>
                                <label className="custom-control-label" for="paypal">Paypal</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" name="payment" id="directcheck"/>
                                <label className="custom-control-label" for="directcheck">Direct Check</label>
                            </div>
                        </div>
                        <div className="">
                            <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" name="payment" id="banktransfer"/>
                                <label className="custom-control-label" for="banktransfer">Bank Transfer</label>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer border-secondary bg-transparent">
                        <button className="btn btn-lg btn-block btn-primary font-weight-bold my-3 py-3" onClick={()=> toast.success('Order Placed')}>Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Checkout