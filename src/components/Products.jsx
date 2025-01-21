import React from 'react';
import { sec_color_bg } from '../colors';
import { ThreeDots } from 'react-loader-spinner';
import ProductComponent from './ProductComponent';
import { IoMdArrowBack } from "react-icons/io";

const Images = ({ productData, relatedProducts, showProducts, setShowProducts }) => {

    if (productData === null && showProducts)
        return <div className='w-full flex justify-center items-center gap-5'>
            <h1 className='text-white text-3xl'>Loading...</h1>
            <ThreeDots
                visible={true}
                height="80"
                width="80"
                color="white"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>

    return (
        <>
            {
                showProducts ?
                    <h1 className='mt-5 px-10 text-white font-medium text-4xl
                                    xs-max:text-xl
                                    xs:text-2xl
                    '>
                        All Products
                    </h1>
                    :
                    <h1 className='mt-5 px-10 flex gap-2 text-white font-medium text-4xl
                                    xs-max:text-xl
                                    xs:text-2xl
                    '>
                        <IoMdArrowBack className='text-white hover:cursor-pointer' onClick={() => setShowProducts(true)} />
                        Related Products
                    </h1>

            }
            <div className="w-full flex justify-center mt-4 px-10">
                <div style={{ backgroundColor: sec_color_bg, border: '1px solid #292929' }} className="flex w-6/7 flex-wrap py-7 px-2 rounded-2xl justify-around gap-12">
                    {
                        relatedProducts && !showProducts ?
                            relatedProducts.map((ele, index) => {
                                return <ProductComponent data={ele} key={index} />
                            }) : null
                    }
                    {
                        productData && showProducts ?
                            productData.map((ele, index) => {
                                return <ProductComponent data={ele} key={index} />
                            }) : null
                    }
                </div>
            </div>
        </>
    );
};

export default Images;
