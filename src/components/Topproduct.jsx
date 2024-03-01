import AllProductBox from "./ComponentsItems/allProductBox";

function Catagory({ items }) {
  return (
    <div className="w-full h-full grid place-items-center">
      <h2 className="h-[10%] w-[90%] text-center text-xl md:text-2xl">
        Top products
      </h2>
      <div
        id="box"
        className="w-[90%] overflow-auto md:overflow-scroll h-[80%] grid gap-4 grid-cols-2 md:grid-cols-4"
      >
        {items.map((e,index) => (
          <AllProductBox product={e} key={index} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Catagory;
