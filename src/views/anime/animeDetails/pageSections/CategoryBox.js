import { Grid } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles';
import styles from "../../../../styles/animeDetailsStyles"

const useStyles = makeStyles(styles)
const CategoryBox = (props) => {
    const classes = useStyles()
    const data = props.data;
    const color = props?.color

    return (
        <Grid container className={classes.categoryBoxContainer} style={{ backgroundColor: color }} justifyContent="center" alignContent="center" >
            <Grid item >
                {data}
            </Grid>
        </Grid>
    )
}

export default CategoryBox
