'use client'
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import FoodCard from '../components/FoodCard';


const FoodsPage = () => {
  const [foods, setFoods] = useState([])
   const [loading, setLoading] = useState(false)
 
   const fetchFoods = () => {
     setLoading(true),
       setFoods( [
   {
     "id": 1,
     "name": "Chicken Biryani",
     "category": "Main Course",
     "price": 8.99,
     "rating": 4.7,
     "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
     "description": "Aromatic basmati rice cooked with tender chicken and spices.",
     "isAvailable": true
   },
   {
     "id": 2,
     "name": "Beef Burger",
     "category": "Fast Food",
     "price": 5.49,
     "rating": 4.5,
     "image": "https://images.unsplash.com/photo-1550547660-d9450f859349",
     "description": "Juicy grilled beef patty with lettuce, tomato, and cheese.",
     "isAvailable": true
   },
   {
     "id": 3,
     "name": "Margherita Pizza",
     "category": "Italian",
     "price": 7.99,
     "rating": 4.6,
     "image": "https://images.unsplash.com/photo-1548365328-5c6db322b4a3",
     "description": "Classic pizza topped with tomato sauce, mozzarella, and basil.",
     "isAvailable": true
   },
   {
     "id": 4,
     "name": "Grilled Chicken Salad",
     "category": "Healthy",
     "price": 6.25,
     "rating": 4.3,
     "image": "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
     "description": "Fresh vegetables with grilled chicken and light dressing.",
     "isAvailable": true
   },
   {
     "id": 5,
     "name": "French Fries",
     "category": "Snacks",
     "price": 2.99,
     "rating": 4.2,
     "image": "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5",
     "description": "Crispy golden fries with a pinch of salt.",
     "isAvailable": true
   },
   {
     "id": 6,
     "name": "Chocolate Milkshake",
     "category": "Beverages",
     "price": 3.5,
     "rating": 4.8,
     "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699",
     "description": "Rich and creamy chocolate shake topped with whipped cream.",
     "isAvailable": true
   },
   {
     "id": 7,
     "name": "Sushi Platter",
     "category": "Japanese",
     "price": 12.99,
     "rating": 4.9,
     "image": "https://images.unsplash.com/photo-1562158070-622a4a7d3c03",
     "description": "Assorted fresh sushi with soy sauce and wasabi.",
     "isAvailable": false
   },
   {
     "id": 8,
     "name": "Pasta Alfredo",
     "category": "Italian",
     "price": 9.25,
     "rating": 4.4,
     "image": "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
     "description": "Creamy Alfredo pasta with parmesan cheese.",
     "isAvailable": true
   }
       ])  
   }
 
 
    useEffect( () => {
       fetchFoods();
    }, []);
   
   return (
     <div className="title"
     >
        <div className="max-w-7xl mx-auto px-4 py-10">
 
       {/* Heading */}
       <h1 className="text-4xl font-bold text-center mb-8">
         Explore Delicious Foods 🍔
       </h1>
 
       {/* Search + Filter */}
       <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
 
         {/* Search Bar */}
         <input
           type="text"
           placeholder="Search food..."
           className="w-full md:w-1/2 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
         />
 
         {/* Filter Dropdown */}
         <select className="w-full md:w-1/4 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500">
           <option value="">All Categories</option>
           <option value="Fast Food">Fast Food</option>
           <option value="Main Course">Main Course</option>
           <option value="Italian">Italian</option>
           <option value="Healthy">Healthy</option>
         </select>
       </div>
 
       {/* Food Cards Container */}
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
 
                   {
                       foods.map(food => <FoodCard key={food.id} food={food} />)
         }
         
       </div>
 
     </div>
    </div>
   );
 }
 

export default FoodsPage;