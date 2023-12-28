import { useState } from "react";
import Navbar from "../../components/Navbar"
import Data from './Addresses&Coupon.json'
import style from './ConfirmOrder.module.css'

function ConfirmOrder()
{

    let adresses=Data.Adresses;
    let coupons=Data.Coupons;

    const [selectedAddress,setSelectedAddress]=useState(null);
    const [selectedCoupons,setSelectedCoupons]=useState([]);

    function onAddressChange(e)
    {
        setSelectedAddress(e.target.value)
    }

    function onCouponChange(e)
    {
        const {value,checked}= e.target
        if(checked)
        {
            setSelectedCoupons(pre=>[...pre,value])
        }
        else
        {
            setSelectedCoupons(pre=>{return [...pre.filter((coupon)=>coupon!=value)]})
        }
    }

    function handleApplyClick()
    {
        setSelectedCoupons([])
        
    }

    function handleShipClick()
    {
        console.log
        if(selectedAddress==null)
        {
            alert('please Choose An address')
        }
        else{
            
            setSelectedAddress(null)
        }
    }

    console.log(selectedCoupons)
    console.log(selectedAddress)

    return<>
    <Navbar/>
    <div className={style.Container}>
        {/* Customer Addresses */}
        <div className={style.Column}>
            {
                adresses.map((Address,Key)=>{
                   return <div key={Key} className={style.row}>
                        <input type="radio" name="Address" checked={(selectedAddress==Key)} className={style.SelectButton} value={Key} onChange={onAddressChange}/>
                        <div className={style.AddressBox}>
                            <div className={style.row}>
                            <p>Street:&nbsp;</p>
                            <p>{Address.Street}</p>
                            </div>
                            <div className={style.row}>
                            <p>City:&nbsp;</p>
                            <p>{Address.City}</p>
                            </div>
                            <div className={style.row}>
                            <p>Country:&nbsp;</p>
                            <p>{Address.Country}</p>
                            </div>
                        </div>
                    </div>
            })}
            <button className={style.SkipButton} onClick={()=>handleShipClick()}>Ship Here</button>
            <button className={style.Button}>+ Add a new address</button>
        </div>
        {/* Customer Coupons */}
        <div className={style.Column}>
            <div className={style.CouponsBox}>
            <h2>Available Promo Codes</h2>
            <div>
            {
                coupons.map((coupon,Key)=>{
                    return <div key={Key}> 
                        <div className={style.CouponBox}>
                            <div className={style.Container}>
                                <div>
                                <div className={style.row}>
                                <p>Coupon Code:&nbsp;</p>
                                <p>{coupon.Code}</p>
                                </div>
                                <div>
                                <div className={style.row}>
                                <p>ProductID:&nbsp;</p>
                                <p>{coupon.PID}</p>
                                </div>
                                </div>
                                <div className={style.row}>
                                <p>Discount:&nbsp;</p>
                                <p>{coupon.Discount}%</p>
                                </div>
                                </div>
                                <input type="checkbox" name="Coupons" value={Key} className={style.SelectCoupon} onChange={onCouponChange}/>
                            </div>
                        </div>
                    </div>
                })
            }
            </div>
            </div>
            <button className={style.Button} onClick={()=>handleApplyClick()}>Apply</button>
        </div>
    </div>
    </>
}
export default ConfirmOrder