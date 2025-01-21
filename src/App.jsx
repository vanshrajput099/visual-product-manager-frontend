import { useEffect, useState } from 'react'
import { getAllImages } from "./api/image.api"
import Upload from './components/Upload';
import { bg_color_dark } from './colors';
import Products from './components/Products';
import Header from './components/Header';

function App() {

  const [productData, setProductData] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState(null);
  const [showProducts, setShowProducts] = useState(true);

  useEffect(() => {
    const allProducts = async () => {
      const data = await getAllImages();
      if (data.status >= 400) {
        alert("Error Occurred While Fetching Images.");
      } else {
        setProductData(data.data)
      }
    };
    allProducts();
  }, [])

  return (
    <div className='w-full min-h-screen max-h-full' style={{ backgroundColor: bg_color_dark, fontFamily: 'Poppins , sans-serif' }} >
      <Header />
      <Upload setRelatedProducts={setRelatedProducts} setShowProducts={setShowProducts} />
      <Products setShowProducts={setShowProducts} showProducts={showProducts} relatedProducts={relatedProducts} productData={productData} />
    </div>
  )
}

export default App
