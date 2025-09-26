import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoIosTimer } from "react-icons/io";
import { IoPeople } from "react-icons/io5";

const RecipeWithId = () => {
  const [recipe, setRecipe] = useState(null);
  const params = useParams();

  useEffect(() => {
    // send req with given id
    // https://dummyjson.com/recipes/id

    getRecipe();

    async function getRecipe() {
      const res = await fetch(`https://dummyjson.com/recipes/${params.id}`);
      const data = await res.json();

      setRecipe(data);
    }
  }, []);

  return (
    <div className="max-w-7xl m-auto">
      {recipe && (
        <div className="py-8">
          <div>
            <h1 className="text-4xl font-bold text-neutral-800">
              {recipe.name}
            </h1>
            <div className="flex gap-4 items-center text-neutral-500 mt-2 mb-4">
              <p className="flex gap-2 items-center bg-neutral-200 px-2 rounded-2xl">
                {/* Todo - add starts according to rating */}
                {recipe.rating}
              </p>
              <p className="flex gap-2 items-center px-2 rounded-2xl bg-neutral-200">
                <IoIosTimer />
                {recipe.prepTimeMinutes}
              </p>
              <p className="flex gap-2 items-center px-2 rounded-2xl bg-neutral-200">
                <IoPeople />
                {recipe.servings}
              </p>
              <p className="flex gap-2 items-center px-2 rounded-2xl bg-neutral-200">
                {recipe.difficulty}
              </p>
            </div>
          </div>
          <div className="flex gap-8 mt-8">
            <img className="max-w-md rounded-4xl" src={recipe.image} alt="" />
            <div className="">
              <h2 className="text-2xl font-bold mb-4">Ingredients:</h2>
              <div className="flex flex-wrap gap-6">
                {recipe.ingredients.map((ing, index) => {
                  return (
                    <p className="shrink-0">
                      {index + 1}. {"  "}
                      {ing}
                    </p>
                  );
                })}
              </div>

              <h2 className="text-2xl font-bold my-4">Instructions:</h2>
              <div className="flex flex-col gap-6">
                {recipe.instructions.map((ins, index) => {
                  return (
                    <p className="shrink-0">
                      {index + 1}. {"  "}
                      {ins}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeWithId;
