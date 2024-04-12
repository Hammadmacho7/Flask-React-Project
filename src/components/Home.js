import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Home() {
  return (
    <div className="home container">
      <h1 className="heading">Welcome to the Recipes Web App</h1>
      <Link to = "/signup" className="btn btn-primary">Get Started</Link>
    </div>
  )
}
