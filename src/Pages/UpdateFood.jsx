import { useContext } from 'react';
import bannerImg from '../assets/img/addProductbg.jpg';
import { AuthContext } from '../Providers/AuthProviders';
import axios from 'axios';
import swal from 'sweetalert';
import { useLoaderData } from 'react-router-dom';

const UpdateFood = () => {
  const bannerStyle = {
    backgroundImage: `url(${bannerImg})`,
  };

  const food = useLoaderData();
  console.log(food);

  const {
    Count,
    Category,
    _id,
    Description,
    FoodOrigin,
    Image,
    MadeBy,
    Name,
    Price,
    Quantity,
  } = food;

  const { user } = useContext(AuthContext);
  const userEmail = user?.email;

  const handleUpdateFood = (event) => {
    event.preventDefault();
    const form = event.target;

    const Name = form.name.value;
    const Category = form.category.value;
    const Quantity = form.quantity.value;
    const MadeBy = userEmail;
    const Price = form.price.value;
    const FoodOrigin = form.price2.value;
    const Description = form.description.value;
    const Image = form.image.value;
    const Count = 0;

    const foodItem = {
      Name,
      Category,
      Quantity,
      Price,
      FoodOrigin,
      MadeBy,
      Description,
      Image,
      Count,
    };

    console.log(foodItem);

    const url = `http://localhost:5000/allFoods/${_id}`;
    axios.put(url, foodItem).then((res) => {
      console.log(res.data);
      swal('Food Updated', 'You Updated a Food Successfully!', 'success');
    });
  };

  return (
    <div>
      <div className="bg-cover rounded-2xl mx-2 min-h-[350px]" style={bannerStyle}>
        <h1 className="text-white text-7xl font-bold text-center pb-4 pt-20">Update Your Food</h1>
        <p className="text-center font-semibold text-white text-3xl">
          Give Proper Information to Update Food
        </p>
        <p className="text-center font-semibold text-white text-2xl">For Confirm Update Click the Update Food Button</p>
      </div>

      <div className="relative mb-16">
        <div className="mb-12 ml-4 mt-6"></div>
        <div className="bg-cover flex justify-center items-center h-full">
          <div className="w-2/3 h-5/6 rounded-md bg-[#F4F3F0]">
            <h1 className="text-4xl mt-12 mb-5 font-bold text-[#374151] text-center">
              Update Your Food Item
            </h1>
            <div className="mx-14">
              <div>
                <form onSubmit={handleUpdateFood} className="my-8">
                  <h1 className="text-center font-bold py-5 text-3xl">Food Information</h1>
                  <div className="flex gap-x-10">
                    <div className="w-1/2">
                      <label className="label">
                        <span className="label-text">Food Name</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Food name here"
                        defaultValue={Name}
                        name="name"
                        className="input w-full"
                        required
                      />
                      <label className="label">
                        <span className="label-text">Food Image Url</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Give the photo URL"
                        defaultValue={Image}
                        name="image"
                        className="input w-full"
                        required
                      />
                      <label className="label">
                        <span className="label-text">Food Category</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Food category here"
                        defaultValue={Category}
                        name="category"
                        className="input w-full"
                        required
                      />
                    </div>
                    <div className="w-1/2">
                      <label className="label">
                        <span className="label-text">Food Quantity</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Food quantity here"
                        defaultValue={Quantity}
                        name="quantity"
                        className="input w-full"
                        required
                      />
                      <label className="label">
                        <span className="label-text">Food Price ($)</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Give price here"
                        defaultValue={Price}
                        name="price"
                        className="input w-full"
                        required
                      />
                      <label className="label">
                        <span className="label-text">Food Origin</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Food Origin"
                        defaultValue={FoodOrigin}
                        name="price2"
                        className="input w-full"
                        required
                      />
                    </div>
                  </div>
                  <label className="label">
                    <span className="label-text">Short Description</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Short description"
                    defaultValue={Description}
                    name="description"
                    className="input w-full"
                    required
                  />
                  <h1 className="text-center font-bold pb-3 pt-6 text-3xl">Your Information</h1>
                  <div className="flex gap-x-10">
                    <div className="w-1/2">
                      <label className="label">
                        <span className="label-text">Added By (Name)</span>
                      </label>
                      <input
                        type="text"
                        defaultValue={user?.displayName}
                        name="origin"
                        className="input w-full"
                        required
                      />
                    </div>
                    <div className="w-1/2">
                      <label className="label">
                        <span className="label-text">Added By (Email)</span>
                      </label>
                      <input
                        type="text"
                        defaultValue={user?.email}
                        name="userName"
                        className="input w-full"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-10 mt-8">
                    <button
                      type="submit"
                      className="btn normal-case text-xl font-bold btn-outline text-[#331A15] w-full"
                    >
                      Update Food
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateFood;
