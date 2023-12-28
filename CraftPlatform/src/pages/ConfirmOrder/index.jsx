import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar"
import Data from './Addresses&Coupon.json'
import style from './ConfirmOrder.module.css'

function ConfirmOrder()
{

    let adresses=Data.Adresses;
    let coupons=Data.Coupons;

    return<>
    <Navbar/>
    <div className={style.Container}>
        {/* Customer Addresses */}
        <div className={style.Column}>
            {
                adresses.map((Address,Key)=>{
                   return <div key={Key} className={style.row}>
                        <input type="radio" name="Address" className={style.SelectButton}/>
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
            <button className={style.SkipButton}>Ship Here</button>
            <Link to={'/AddAddress'}>
                <button className={style.Button}>+ Add a new address</button>
            </Link>
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
                                <input type="checkbox" name="Coupons" className={style.SelectCoupon}/>
                            </div>
                        </div>
                    </div>
                })
            }
            </div>
            </div>
            <button className={style.Button}>Apply</button>
        </div>
    </div>
    </>
}
export default ConfirmOrder