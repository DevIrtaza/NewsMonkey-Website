import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid">
   <Link to={"/"}> <a className="navbar-brand" href="/">NewsMonkey</a> </Link>
         

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
<Link to={"/"}><a className="nav-link active" aria-current="page" href="/">Home</a></Link>
        </li>
        <li className="nav-item">
       <Link to={"/World"}>   <a className="nav-link" href="/">World</a> </Link>
        </li>
        <li className="nav-item">
        <Link to={"/Politics"}>  <a className="nav-link" href="/">Politics</a></Link>
        </li>
        <li className="nav-item">
         <Link to={"/Tech"}> <a className="nav-link" href="/">Tech</a> </Link>
        </li>
        <li className="nav-item">
        <Link to={"/Lifestyle"}>  <a className="nav-link" href="/">Lifestyle</a> </Link>
        </li>
        <li className="nav-item">
       <Link to={"/Sports"}>   <a className="nav-link" href="/">Sports</a> </Link>
        </li>
        <li className="nav-item">
         <Link to={"/Entertainment"}>  <a className="nav-link" href="/">Entertainment</a> </Link>
        </li>
      
       
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button type="button" className='Searchbtn'>Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
