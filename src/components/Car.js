import React from 'react'
import cars from '../cars.json'
// import material ui components here //
// Container, Paper, Chip //
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {Container, Paper, Chip, Avatar} from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done'


//To get the specific car we need to access the "id" property
// from the path. We can do that by accessing it from props with: 
//`props.match.params.id`.
//thisCar variable used to find the car that matches the id. Tied to cars.json file


const Car = (props) => {
    
    let id = props.match.params.id
    let thisCar = cars.find(car => id == car.id)
   
    const handleCheck = () => {
        console.log('You clicked the Delete icon.');
      };

    return (
        <Container maxWidth = "sm">
         <Paper >
         <Typography component="div" >
            <h1>{thisCar.Name}</h1>
            </Typography>
            <Paper elevation={100} />
            <Chip
            avatar={<Avatar>C</Avatar>}
            label={`Cylinders: ${thisCar.Cylinders}`}
            clickable
            color="primary"
            onDelete={handleCheck}
            deleteIcon={<DoneIcon />}
            />
            <Chip
            avatar={<Avatar>D</Avatar>}
            label={`Displacement: ${thisCar.Displacement}`}
            clickable
            color="primary"
            onDelete={handleCheck}
            deleteIcon={<DoneIcon />}
            />
            <Chip
            avatar={<Avatar>H</Avatar>}
            label={`Horsepower: ${thisCar.Horsepower}`}
            clickable
            color="primary"
            onDelete={handleCheck}
            deleteIcon={<DoneIcon />}
            />
            <Chip
            avatar={<Avatar>W</Avatar>}
            label={`Weight (lbs): ${thisCar.Weight_in_lbs}`}
            clickable
            color="primary"
            onDelete={handleCheck}
            deleteIcon={<DoneIcon />}
            />
            <Chip
            avatar={<Avatar>A</Avatar>}
            label={`Acceleration: ${thisCar.Acceleration}`}
            clickable
            color="primary"
            onDelete={handleCheck}
            deleteIcon={<DoneIcon />}
            />
            <Chip
            avatar={<Avatar>Y</Avatar>}
            label={`Year: ${thisCar.Year}`}
            clickable
            color="primary"
            onDelete={handleCheck}
            deleteIcon={<DoneIcon />}
            />
            <Chip
            avatar={<Avatar>O</Avatar>}
            label={`Origin: ${thisCar.Origin}`}
            clickable
            color="primary"
            onDelete={handleCheck}
            deleteIcon={<DoneIcon />}
            />
            </Paper>
      </Container>
        
    )
}

export default Car