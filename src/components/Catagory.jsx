import { useNavigate } from "react-router-dom";

function Catagory({ Catagoryitems }) {
  
  return (
    <div className="w-full h-full grid place-items-center">
      <div className="w-[90%] h-[90%] overflow-auto grid place-items-center">
        <h2 className="h-[10%] text-center text-xl md:text-2xl">Categories</h2>
        <div className="overflow-auto md:overflow-scroll h-[86%] grid gap-4 grid-cols-2 md:grid-cols-6">
          {Catagoryitems.map((e, index) => (
            <CatBOX e={e} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
}

const CatBOX=({e})=>{
  const navigate = useNavigate();

  const handleClick = (category,bg) => {
    navigate("/categorypage", { state: { category:category,bg:bg } });
  };

  return(
    <div className="flex flex-col text-xs md:text-sm">
    <div className="h-[60%] w-[100%] bg-gray-500">
      <img src={e.image} className="h-full w-full object-cover" alt="image" />
    </div>
    <div className="h-[30%] bg-stone-200 flex justify-center items-center text-center">
      {e.description}
    </div>
    <button
      onClick={() => handleClick(e.name,e.background)}
      style={{ background: e.background }}
      className=" text-white font-semibold h-[10%] text-xs md:text-sm"
    >
      {e.name}
    </button>
  </div>
)
}

export default Catagory;
