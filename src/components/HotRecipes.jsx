import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HotRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();

    async function getRecipes() {
      // to do -- add try catch
      const res = await fetch(
        "https://dummyjson.com/recipes?limit=4&skip=0&select=name,image"
      );

      const data = await res.json();

      console.log(data.recipes);

      setRecipes(data.recipes);
    }
  }, []);

  return (
    <div className="max-w-7xl m-auto ">
      <h2 className="flex items-center justify-center gap-4 font-bold text-2xl pt-8">
        <div className="h-[3px] w-[50px] bg-black "></div>
        HOT RECIPES
        <div className="h-[3px] w-[50px] bg-black "></div>
      </h2>
      <p className="text-center uppercase pb-8">
        Locally sourced, organic ingredients for a fresh and eco-friendly
        experience
      </p>

      <div className="flex gap-8 py-8">
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

export default HotRecipes;
