import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
      <p className="text-4xl font-bold">{params.id}</p>

      {recipe && (
        <div>
          <img src={recipe.image} alt="" />
          <p>{recipe.name}</p>
        </div>
      )}
    </div>
  );
};

export default RecipeWithId;
