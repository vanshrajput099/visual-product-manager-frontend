import React from 'react';

const ProductComponent = ({ data, index }) => {

    const categoryText =
        data?.category?.toUpperCase() || 'Default Category';

    return (
        <div style={{ backgroundColor: '#232323', border: '1px solid #292929' }} 
            className="rounded-2xl w-60 flex flex-col gap-2 p-4
                        xs-max:w-full
                        "
        >
            <div className='w-full'>
                <h1 className='text-white px-1 text-sm'>Category : {categoryText}</h1>
            </div>
            <div className='w-full max-h-full flex justify-center mt-2'>
                <img src={data.url} className='w-56 h-56 rounded-xl' alt="" />
            </div>
            <div className='w-full overflow-hidden mt-2'>
                <h1 className='text-white text-md font-medium text-center line-clamp-2'>{data.title}</h1>
            </div>
            <div className='w-full overflow-hidden'>
                <p style={{color:'#B3B3B3'}} className='text-left text-xs font-light line-clamp-2'>{data.desc}</p>
            </div>
        </div>
    )
}

export default ProductComponent