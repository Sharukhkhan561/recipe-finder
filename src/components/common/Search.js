import React,{useState} from 'react'
import { Grid, Form, Input } from 'semantic-ui-react'

const Search = ({setSearchQuery}) => {
  const[value,setValue]=useState("");
  const handleChange=(e)=>{
  console.log(e.target.value)
  setValue(e.target.value);
  }
  const onFormSubmit=()=>{
   setSearchQuery(value);
  }
  return (
    <Grid columns={2} textAlign="center" className='search-box'>
      <Grid.Column>
        <h2 className='search-heading'>Search Recipe with <span>Our Recipe</span> </h2>
        <h4>Input recipe seprated by comma</h4>
        <Form onSubmit={onFormSubmit}>
          <Input
            placeholder="pizza,burger,frenchfries"
            action={{icon:'search',color:'blue'}}
            onChange={handleChange}
            value={value}
          />
        </Form>
      </Grid.Column>
    </Grid>
  )
}

export default Search