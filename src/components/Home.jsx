import React from 'react'
import amazon from '../assets/amazon.png'
import  flipkart from '../assets/flipkart.png'
import  shoe from  '../assets/nike_shoes.png'
function Home() {
    return (
        <section className='flex my-10 w-3/4 mx-auto max-h-full'>
            <div >
                <h1 className='text-7xl font-extrabold mb-7 uppercase'>Your feet deserve the best</h1>
             <p className='text-gray-600 font-medium text-justify'>
             Your feet deserve the best and we are here to help you with out shoes
             </p>
             <div >
                <button  className="text-white bg-red-500 h-1/2 mt-auto mb-auto px-3 py-1 font-medium mr-5">Shop Now</button>
                <button  className="text-gray-600 border-2 h-1/2 mt-auto mb-auto px-3 py-1 font-bold">Category</button>
             </div>

             <div >
                <p>Also avaiblable on</p>
                <div className='flex'>
                    <div className='w-6'><img src={flipkart} alt="flipkart logo" /></div>
                    <div className='w-8'><img src={amazon} alt="amazon logo" /></div>
                </div>
             </div>

            </div>
            <div>

                <div><img src={shoe} alt=" shoes image" /></div>
            </div>
        </section>
    )
}

export default Home;
