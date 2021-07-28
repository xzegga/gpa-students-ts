import React from 'react'
import './Header.css'


const Header = () => {
  return (
    <div>
      <header className="body-header js-body-header">
        <nav className="menu-desktop" >
          <a href="/" className="menu-desktop__logo">    <svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
              <rect fill="#FFC871" width="64" height="64" rx="8"></rect>
              <path d="M18 18v-8h4v8h8v4h-8v8h-4v-8h-8v-4h8zm16 24h20v4H34v-4z" fill="#FFF"></path>
              <path d="M14.4964291 49.5035709l35.0069488-35.0069488" stroke="#FFF" stroke-width="2" stroke-linecap="square"></path>
            </g>
          </svg>
            <span >GPA Calculator</span>
          </a>
        </nav>
      </header>
      <header className="page-header">
        <div className="page-header__text">
          <h1 className="page-header__title">GPA Calculator</h1>
          <p className="page-header__description">Get the cumulative GPA based on students grades or add new courses to students and its grades.</p>
        </div>
      </header>
    </div>
  )
}

export default Header
