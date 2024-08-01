import React from 'react';
import { Link, NavLink } from "react-router-dom";
import "./css/appBar.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './sidebar';
import ScrollUp from './scollUp';

function AppBar() {
    const openMenu = () => {
        const sidebar = document.querySelector('#side-bar')
        sidebar.classList.add('active')
    }

    window.addEventListener('scroll', function () {
        const l1 = document.querySelector('.l1')
        const l2 = document.querySelector('.l2')
        const l3 = document.querySelector('.l2-min')
        var rect = l1.getBoundingClientRect().bottom + l3?.getBoundingClientRect().bottom
        l2.classList.toggle('sticky', rect < 0)

        if (rect < 0) {
            document.querySelector(".page").style.paddingTop = `${l2.offsetHeight + 10}px`
        } else {
            document.querySelector(".page").style.paddingTop = '10px'
        }

    })

    return (
        <div id='app-bar'>
            <Sidebar />
            <ScrollUp />
            <div className='l1'>
                <div style={{ display: 'flex' }}>
                    <div className='menu-toggle-open' onClick={openMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" color='white' width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                        </svg>
                    </div>
                    <Link className='logo' to={"/admin/product"}>
                        Farafina
                    </Link>
                </div>
                <form className='search-bar' >
                    <select name="" id="">
                        <option value="">All</option>
                        <option value="">Cat 1</option>
                        <option value="">Cat 2</option>
                        <option value="">Cat 3</option>
                    </select>
                    <input type="search" placeholder={`Rechercher un article`} />
                    <button><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></button>
                </form>

                <div style={{ display: "flex" }}>

                    <Link className='connexion' to={'/login'}>
                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                        <span>Connexion</span>
                    </Link>
                    <Link className='shopping-cart' to={'/my-cart'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                        </svg>
                    </Link>
                </div>
            </div>
            <form className='l2-min'>
                <div className='search-bar' >
                    <select name="" id="">
                        <option value="">All</option>
                        <option value="">Cat 1</option>
                        <option value="">Cat 2</option>
                        <option value="">Cat 3</option>
                    </select>
                    <input type="search" placeholder={`Rechercher un article`} />
                    <button><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></button>
                </div>
            </form>
            <div className='l2'>
                <div className='menu-toggle-open' onClick={openMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" color='white' width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                    </svg>
                </div>
                <nav className='category-list d-flex align-items-center'>
                    <NavLink to={'/'} className='category' >Accueil</NavLink>
                    <NavLink to={'/category/Category-1'} className='category'>Category 1</NavLink>
                    <NavLink to={'/category/Category-2'} className='category'>Category fez</NavLink>
                    <NavLink to={'/category/Category-3'} className='category'>Category vhjede</NavLink>
                    <NavLink to={'/category/Category-4'} className='category'>Category uyhjce</NavLink>
                    <NavLink to={'/category/Category-5'} className='category'>Category il</NavLink>
                    <NavLink to={'/category/Category-6'} className='category'>Category</NavLink>
                    <NavLink to={'/category/Category-7'} className='category'>Category yuhjnjec r</NavLink>
                    <NavLink to={'/category/Category-8'} className='category'>Category edce</NavLink>
                    <NavLink to={'/category/Category-9'} className='category'>Category tjyuyu</NavLink>
                    <NavLink to={'/category/Category-10'} className='category'>Category ghhghu</NavLink>
                </nav>
            </div>
        </div>
    )
}


export default AppBar