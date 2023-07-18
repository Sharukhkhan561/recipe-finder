import React ,{useEffect, useState} from 'react'
import { Grid,Button,Image, Header, SegmentGroup, Segment } from 'semantic-ui-react'
import { getRecipe } from '../../services/Api'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
const RecipeDetails = () => {
    const [recipe,setRecipe] = useState({})
    const {recipeId}= useParams(); // useParams hook is use for particular Id for each recipe4

    //for get the recipeDetail using API call with axios getRecipe function
    useEffect(()=>{
        const getData= async() =>{
            let result =await getRecipe(recipeId);
            console.log("getData response",result);
            if(result && result.recipe){
                setRecipe(result.recipe)
            }
        }
        getData();
    },[])
  return (
    Object.keys(recipe).length > 0?
    <Grid containern stackable columns={2} className="details-page-content">
    <Grid.Column>
        <Button className='recipe-detail-btn'
            as={Link}
            to={'/recipes'}
            content="Back to recipe list"
            color='yellow'
        />
        <Image src={recipe.image_url} />
    </Grid.Column>
    <Grid.Column>
        <Header size='medium'>{recipe.title}</Header>
        <p>Provided By: {recipe.publisher}</p>
        <Button 
            as={'a'}
            href={recipe.publisher_url}
            target="_blank"
            content="Publisher Webpage"
            color='blue'
        />
        <Button 
            as={'a'}
            href={recipe.source_url}
            target="_blank"
            content="Recipe Url"
            color='green'
        />
        <Header size='large' content="Ingredients">
            <SegmentGroup>
                {
                    recipe && recipe.ingredients.map(data=>(
                        <Segment>
                        key={data}
                            <h5>{data}</h5>
                        </Segment>
                    ))
                }
            </SegmentGroup>
        </Header>
    </Grid.Column>

    </Grid>:null
  )
}
export default RecipeDetails