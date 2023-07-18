import React from 'react'
import { Container,Header,Grid } from 'semantic-ui-react'
import RecipeListItem from './RecipeListItem'

const RecipeList = ({recipes,searchQuery}) => {
  return (
    <Container>
    <Header
       size='huge'
       content={`RECIPE LIST FOR ${searchQuery}`}
       textAlign="center"
    />
    <Grid columns={4} doubling={true}>
      {
         recipes && recipes.map(recipe=>(
          <Grid.Column>
          key={recipe}
              <RecipeListItem recipe={recipe}/>
              
          </Grid.Column>
        ))
      }
    </Grid>
    </Container>
  )
}

export default RecipeList