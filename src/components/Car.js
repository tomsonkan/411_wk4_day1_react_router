import React from 'react'
import cars from '../cars.json'
// import material ui components here //
// Container, Paper, Chip //
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {Container, Paper, Chip, Avatar} from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done'



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