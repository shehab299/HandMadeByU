import Orders from './ShopOrders.json'
function ShopOrders()
{

    return<>
    {Orders.map((order)=>{
        return<div>
         <div key={order.orderId}>{order.CustomerName}</div>
            <div>
                <p>Address:</p>
                <p>{order.CustomerAddress.Street}</p>
                <p>{order.CustomerAddress.City}</p>
                <p>{order.CustomerAddress.Country}</p>
            </div>
        {order.Products.map((product, index)=>{
            return <div key={product.productId}>
                <img src={product.image_URL} width='200px' height='100px'/>
                <p>{product.ProductName}</p>
                <p>{product.Price}$</p>
                <p>{product.Quantity}</p>
            </div>
        })}
        </div>

    })}
    </>
}
export default ShopOrders