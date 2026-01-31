import { getCocktails } from '../lib/api';
import Link from 'next/link';

export default async function Home() {
  const cocktails = await getCocktails();

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-8">Cocktail Recipes</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cocktails.map((drink: any) => (
          <Link 
            key={drink.idDrink} 
            href={`/cocktail/${drink.idDrink}`}
            className="border rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            <img src={drink.strDrinkThumb} alt={drink.strDrink} />
            <div className="p-4">
              <h2 className="font-semibold">{drink.strDrink}</h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}