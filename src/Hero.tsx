import vector from './assets/vector.svg';

type hero = {
  showAllProducts: boolean;
  setShowAllProducts: React.Dispatch<React.SetStateAction<boolean>>;
};

const Hero = ({ showAllProducts, setShowAllProducts }: hero) => {
  function handleClick() {
    setShowAllProducts(false);
  }
  function handleClickAll() {
    console.log(typeof showAllProducts);
    setShowAllProducts(true);
  }
  return (
    <div className="flex justify-center items-center flex-col mt-20 p-10 lg:p-20 gap-4 w-full lg:w-7/12 relative z-50">
      <img src={vector} className=" absolute top-0 right-32 -z-10 w-2/5" />
      <h1 className="text-off-white text-4xl font-sans font-bold">
        Our Collection
      </h1>
      <p className="text-slate-gray text-md lg:text-lg align-middle text-center font-semibold">
        Introducing our Coffee Collection, a selection of unique coffees from
        different roast types and origins, expertly roasted in small batches and
        shipped fresh weekly.
      </p>
      <div className="flex gap-5 px-6">
        <button
          onClick={handleClickAll}
          className={`text-off-white overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out py-3 px-4 rounded-lg ${showAllProducts && 'bg-slate-gray'}`}
        >
          All Products
        </button>
        <button
          onClick={handleClick}
          className={`text-off-white overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out py-3 px-4 rounded-lg ${!showAllProducts && 'bg-slate-gray'}`}
        >
          Available Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
