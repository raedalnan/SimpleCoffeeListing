import starFill from './assets/Star_fill.svg';
import star from './assets/Star.svg';

type card = {
  available: boolean;
  image: string;
  name: string;
  popular: boolean;
  price: string;
  rating: number;
  votes: number;
};
const Card = ({
  available,
  image,
  name,
  popular,
  price,
  rating,
  votes,
}: card) => {
  return (
    <div className="flex flex-col w-full md:w-1/2 lg:w-1/3 gap-3 mb-16 hover:cursor-pointer overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="mx-4 mb-2 relative">
        <img src={image} alt="caffee cup" className="w-full rounded-xl" />
        {popular && (
          <span className="bg-goldenrod font-semibold text-sm p-1 rounded-full absolute top-2 left-2">
            Popular
          </span>
        )}
      </div>
      <div className="px-4">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-off-white font-medium text-lg">{name}</h3>
          <span className="px-1 py-[2px] rounded-[3px] font-bold bg-pale-mint text-sm text-very-dark-gray">
            {price}
          </span>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-1">
            <img src={rating ? starFill : star} alt="star" />
            {rating ? (
              <p className="text-off-white font-medium">
                {rating}{' '}
                <span className="text-slate-gray">({votes} votes)</span>
              </p>
            ) : (
              <span className="text-slate-gray">No Rating</span>
            )}
          </div>
          {!available && <p className="text-coral font-medium">Sold out</p>}
        </div>
      </div>
    </div>
  );
};

export default Card;
