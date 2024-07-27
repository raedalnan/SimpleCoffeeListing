import bg from './assets/bg-cafe.jpg';
import Hero from './Hero';
import { useEffect, useState } from 'react';
import Card from './Card';

type CardType = {
  available: boolean;
  id: number;
  image: string;
  name: string;
  popular: boolean;
  price: string;
  rating: number;
  votes: number;
};

function App() {
  const [showAllProducts, setShowAllProducts] = useState(true);
  const [cards, setCards] = useState<CardType[]>([]);

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json'
    )
      .then((res) =>
        res.ok ? res.json() : console.log('there is an error fetching data')
      )
      .then((data) => setCards(data))
      .catch((error) => console.log('error', error));
  }, []);

  return (
    <div
      className="h-full w-full bg-very-dark-gray flex justify-center align-middle"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="bg-dark-charcoal w-10/12 min-h-screen mt-20 md:mt-36 lg:mt-56 rounded-2xl flex justify-start items-center flex-col">
        <Hero
          showAllProducts={showAllProducts}
          setShowAllProducts={setShowAllProducts}
        />
        <div className="w-full lg:w-8/12 flex flex-wrap justify-center">
          {cards.map((card) =>
            showAllProducts ? (
              <Card
                available={card.available}
                key={card.id}
                image={card.image}
                name={card.name}
                popular={card.popular}
                price={card.price}
                rating={card.rating}
                votes={card.votes}
              />
            ) : (
              card.available && (
                <Card
                  available={card.available}
                  key={card.id}
                  image={card.image}
                  name={card.name}
                  popular={card.popular}
                  price={card.price}
                  rating={card.rating}
                  votes={card.votes}
                />
              )
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
