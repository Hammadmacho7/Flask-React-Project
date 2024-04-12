import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Recipe from './Recipes'


export default function Home() {

  const [recipes, setRecipes] = useState([]);
  useEffect(
    () => {
        fetch('/recipe/recipes')
            .then(res => res.json())
            .then(data => {
              setRecipes(data)
          })
            .catch(err => console.log(err))
    }, []
);

  return (
    <div className="recipes">
      <h1 className="heading">List of all Recipes</h1>
      {/* <Link to = "/signup" className="btn btn-primary">Get Started</Link> */}
      { //recipe is a state 
        recipes.map(
          (recipe) =>(
          <Recipe title={recipe.title} description = {recipe.description}/>
          )
        )
      }
    </div>
  )
}
