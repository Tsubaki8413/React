export async function getCocktails() {
  const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
  if (!res.ok) throw new Error('Failed to fetch data');
  const data = await res.json();
  return data.drinks;
}

export async function getCocktailById(id: string) {
  const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
  
  const text = await res.text();
  if (!text) {
    throw new Error('API returned an empty response');
  }
  
  const data = JSON.parse(text);
  return data.drinks ? data.drinks[0] : null;
}