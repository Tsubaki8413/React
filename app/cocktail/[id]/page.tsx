import { getCocktailById } from '../../../lib/api';
import Link from 'next/link';

export default async function CocktailDetail({ params }: { params: { id: string } }) {
  const { id } = await params;
  const cocktail = await getCocktailById(id);

  if (!cocktail) return <p>Loading...</p>;

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <Link href="/" className="text-blue-500 underline mb-4 inline-block">← Back to List</Link>
      
      <h1 className="text-4xl font-bold mb-4">{cocktail.strDrink}</h1>
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} className="rounded-xl mb-6 w-full" />
      
      <div className="mb-6">
        <h2 className="text-2xl font-semibold border-b pb-2 mb-3">Ingredients (材料)</h2>
        <ul className="list-disc list-inside">
          <li>{cocktail.strIngredient1}</li>
          <li>{cocktail.strIngredient2}</li>
          <li>{cocktail.strIngredient3}</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold border-b pb-2 mb-3">Instructions (作り方)</h2>
        <p className="leading-relaxed">{cocktail.strInstructions}</p>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
  const data = await res.json();

  return data.drinks.map((drink: any) => ({
    id: drink.idDrink,
  }));
}