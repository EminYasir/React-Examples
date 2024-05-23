import React from 'react'
import "./Header.css"
import HeaderCartButton from './HeaderCartButton'

const Header = ({onShowCart}) => {
  return (
    <header className='header'>
        <h1>Trend Store</h1>
        <HeaderCartButton className='' onShowCart={onShowCart}></HeaderCartButton>
    </header>
  )
}

export default Header