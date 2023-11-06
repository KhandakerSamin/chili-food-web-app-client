/* eslint-disable react/prop-types */

const CartCard = ({ cart, handleDelete}) => {
    console.log(cart);
    const {name,image,Price,_id, PurchaseTime ,Quantity,MadeBy,Category} = cart
    return (
        <div className="card card-side h-[250px]  bg-base-100 shadow-xl">
            <figure><img className="h-[250px] rounded-l-2xl w-[300px]" src={image} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-2xl">{name}</h2>
                <h2 className="card-title">Category: {Category}</h2>
                <h2 className="card-title">Price: ${Price}</h2>
                <h2 className="card-title">Time: {PurchaseTime}</h2>
                <div className="card-actions ">
                    <button onClick={() => handleDelete(_id)} className="btn btn-outline">Remove From Cart</button>
                </div>
            </div>
        </div>
    );
};

export default CartCard;