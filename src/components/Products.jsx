import AllProductBox from "./ComponentsItems/allProductBox";

const Products = ({ products }) => {
  
  return (
    <div className="container mx-auto py-8">
      {products.length>0?
      <>
      <h1 className="text-2xl font-semibold mb-8 text-center">Products</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.map((product,index) => (
          <AllProductBox key={index} product={product} index={index} /> 
        ))}
      </div>
      </>
      :<div className=" text-center">No Products Found</div>
      }
    </div>
  );
};

export default Products;
