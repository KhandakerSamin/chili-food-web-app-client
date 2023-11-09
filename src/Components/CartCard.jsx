/* eslint-disable react/prop-types */

const CartCard = ({ cart, handleDelete}) => {
    console.log(cart);
    const {name,image,Price,_id, PurchaseTime ,Quantity,MadeBy,Category} = cart
    return (
        <div className="card static card-side h-[280px]  shadow-xl">
            <figure><img className="h-[280px] rounded-l-2xl w-[300px]" src={image} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className=" font-bold text-2xl">{name}</h2>
                <h2 className="card-title text-lg">Category: {Category}</h2>
                <h2 className="card-title text-lg">Price: ${Price}</h2>
                <h2 className="card-title text-lg">Time: {PurchaseTime}</h2>
                <div className="card-actions pb-5">
                    <button onClick={() => handleDelete(_id)} className="btn btn-outline">Remove From Cart</button>
                </div>
            </div>
        </div>
    );
};

export default CartCard;