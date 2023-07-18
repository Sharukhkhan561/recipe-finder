import React from 'react'
import Header from '../components/common/Header'
import { Button } from 'semantic-ui-react'
import {Link} from "react-router-dom"

const Home = () => {
  return (
  <Header title="Our Recipe" bgClass="bg-image">
  <Button 
  content="Search Recipe"
    color='primary'
    as={Link} to="/recipes"
  />

  </Header>
    )
}

export default Home