import { useSelector } from "react-redux"
import AllProductBox from "./ComponentsItems/allProductBox"


function CatagoryPreview({category,color}) {
  const { list } = useSelector(state => state.products);
  const catagoryProducts= list.filter((e)=>e.category == category)
  
  return (
    <div className="container mx-auto py-8 overflow-scroll p-6 w-full h-full">
      <div className=" grid place-items-center gap-2 text-center">
      <h1 className=" font-semibold text-2xl">{category}</h1>
      <span>Explore and Enjoy</span>
      <div style={{'background':color}} className="w-[20%] animate-bounce h-1"></div>
      </div>
      {catagoryProducts.length>0?
      <>
      <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 ">
        {catagoryProducts.map((product,index) => (
          <AllProductBox key={index} product={product} index={index} /> 
        ))}
      </div>
      </>
      :<div className=" text-center">No Products Found</div>
      }
    </div>
  )
}

export default CatagoryPreview
