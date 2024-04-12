import React from 'react'



const Recipes=({title,description})=>{
    return(
        <div className='recipe my-3'>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}


export default Recipes;