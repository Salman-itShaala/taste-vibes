import { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";

const HotRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {}, []);

  useEffect(() => {
    getRecipes();

    async function getRecipes() {
      // to do -- add try catch
      try {
        const res = await fetch(
          "https://dummyjson.com/recipes?limit=4&skip=0&select=name,image"
        );

        const data = await res.json();

        setRecipes(data.recipes);
      } catch (error) {
        console.log(error);
        alert("Someting went wrong");
      } finally {
        setLoading(false);
      }
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
        {loading ? (
          <>
            {[1, 2, 3, 4].map((el) => {
              return (
                <div className="rounded-2xl">
                  <div>
                    <Skeleton
                      width={300}
                      height={340}
                      baseColor="#202020"
                      highlightColor="#444"
                    />
                  </div>
                  <div>
                    <Skeleton
                      width={300}
                      baseColor="#202020"
                      highlightColor="#444"
                    />
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          recipes.map((recipe) => {
            return (
              <Link
                key={recipe.id}
                to={`/recipe/${recipe.id}`}
                className="rounded-2xl p-4 border flex flex-col gap-4 h-[340px] w-2xl"
              >
                <img
                  className="rounded-2xl border h-[300px] "
                  src={recipe.image}
                  alt=""
                />
                <p className="font-bold text-xl">{recipe.name}</p>
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default HotRecipes;
