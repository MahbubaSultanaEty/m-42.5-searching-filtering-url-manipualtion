import React from 'react';
import Image from 'next/image';

const FoodCard = ({food}) => {
    return ( 
         <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition text-black flex justify-center flex-col items-center">
            <Image
                src={food.image}
            width={200} height={100} alt={`${food.name} photo`}/>
           <div className="p-4">
                <h2 className="text-lg font-semibold">{food.name}</h2>
                <p className="text-sm ">{food.category}</p>
                <p className="font-bold mt-2">{food.price}</p>
           </div>
         </div>
 
    );
};

export default FoodCard;