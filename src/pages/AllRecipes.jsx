import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();

    async function getRecipes() {
      const res = await fetch("https://dummyjson.com/recipes");
      const data = await res.json();

      console.log(data.recipes);

      setRecipes(data.recipes);
    }
  }, []);

  return (
    <div className="max-w-7xl m-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {recipes.map((recipe) => {
          return (
            <Link
              key={recipe.id}
              to={`/recipe/${recipe.id}`}
              className="rounded-2xl p-4 border flex flex-col gap-4"
            >
              <img className="rounded-2xl border" src={recipe.image} alt="" />
              <p className="font-bold text-xl">{recipe.name}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AllRecipes;
