import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { addqty, deleteitem, subqty } from '../Redux toolkit/Slice/cartSlice';

const ShoppingCart = () => {

    const navigate = useNavigate();

    const cart = useSelector((state)=>state.cart.cart);
    
    const dispatch = useDispatch();

    const handledelete = (id)=>{
        dispatch(deleteitem(id))
    }

    const handleaddqty = (id)=>{
        dispatch(addqty({id}))
    }

    const handlesubqty = (id)=>{
        dispatch(subqty({id}))
    }

    const handlecheck = ()=>{
        navigate("/checkout")
    }

    const subtotal = Math.round(cart?.map((item)=> item.qty * item.price).reduce((Link,c)=>Link+c,0))
    const total = subtotal + 10;
    
  return (
    <>
    <div className="container-fluid bg-secondary mb-5">
        <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: "300px"}}>
            <h1 className="font-weight-semi-bold text-uppercase mb-3">Shopping Cart</h1>
            <div className="d-inline-flex">
                <p className="m-0"><Link to="/">Home</Link></p>
                <p className="m-0 px-2">-</p>
                <p className="m-0"><Link to="/shop">Shop</Link></p>
                <p className="m-0 px-2">-</p>
                <p className="m-0">Shopping Cart</p>
            </div>
        </div>
    </div>
    <br />
    <div className="container-fluid pt-5">
        <div className="row px-xl-5">
            <div className="col-lg-8 table-responsive mb-5">
                <table className="table table-bordered text-center mb-0">
                    <thead className="bg-secondary text-dark">
                        <tr>
                            <th>Products</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    
                    <tbody className="align-middle">
                        {cart?.map((item,index)=>{
                            return(
                            <tr key={index}>
                            <td className="align-middle"><img src={item.image} alt="" style={{width: "50px"}}/> {item.title}</td>
                            <td className="align-middle">${item.price}</td>
                            <td className="align-middle">
                                <div className="input-group quantity mx-auto" style={{width: "100px"}}>
                                    <div className="input-group-btn">
                                        <button className="btn btn-sm btn-primary btn-minus" onClick={()=> handlesubqty(item.id)} >
                                        <i className="fa fa-minus"></i>
                                        </button>
                                    </div>
                                    <input className="form-control form-control-sm bg-secondary text-center"  value={item.qty || 1} readOnly/>
                                    <div className="input-group-btn">
                                        <button className="btn btn-sm btn-primary btn-plus" onClick={()=>handleaddqty(item.id)}>
                                            <i className="fa fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </td>
                            <td className="align-middle">${item.price * (item.qty || 1)}</td>
                            <td className="align-middle"><button className="btn btn-sm btn-primary" onClick={()=>handledelete(item.id)}><i className="fa fa-times"></i></button></td>
                        </tr>
                        )})}
                       
                    </tbody>
                </table>
            </div>


            <br />
            
            <div className="col-lg-4">
                <form className="mb-5" action="">
                    <div className="input-group">
                        <input type="text" className="form-control p-4" placeholder="Coupon Code"/>
                        <div className="input-group-append">
                            <button className="btn btn-primary">Apply Coupon</button>
                        </div>
                    </div>
                </form>
                <div className="card border-secondary mb-5">
                    <div className="card-header bg-secondary border-0">
                        <h4 className="font-weight-semi-bold m-0">Cart Summary</h4>
                    </div>
                    <div className="card-body">
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
                        <button className="btn btn-block btn-primary my-3 py-3" onClick={()=>handlecheck()}>Proceed To Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ShoppingCart