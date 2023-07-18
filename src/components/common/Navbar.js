import React from 'react'
import{Menu} from "semantic-ui-react"
import  logoImg  from '../../constants/Constant.js';
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <Menu borderless fixed='top'>
    <Menu.Item>
        <img src={logoImg.imgRecipe} alt="logo" style={{width:48}}/>
    </Menu.Item>
<Menu.Item name="Home" as={Link} to="/"/>
<Menu.Item name="Recipes" as={Link} to="/recipes"/>
    </Menu >
)
}

export default Navbar