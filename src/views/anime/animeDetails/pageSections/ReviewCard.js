import React from 'react'
import { Grid } from '@mui/material'
import StarRatings from "react-star-ratings";
import { makeStyles } from '@mui/styles';
import styles from "../../../../styles/animeDetailsStyles"
import { Paper } from '@mui/material';

const useStyles=makeStyles(styles)
const ReviewCard = (props) => {
    const classes=useStyles()
    const { data } = props
    
    return (
        <Grid container item justifyContent='center'>
            <Grid item xs={8}>
                {data?.map((val) => {
                    return (
                        <Paper className={classes.reviewPaper}>
                            <Grid container wrap="nowrap" spacing={2} justifyContent='center' >
                                <Grid justifyContent="center" alignItems="center" item xs zeroMinWidth container direction='column'>
                                    <h3 className={classes.reviewName} >{`${val.userId.firstName} ${val.userId.lastName}`}</h3>
                                    <h4>Rating:<StarRatings rating={val.rating} starDimension="30px" /></h4>
                                    <p className={classes.reviewContent} >
                                        {val.review}
                                    </p>
                                </Grid>

                            </Grid>
                        </Paper>
                    )
                })}
            </Grid>
        </Grid>
    )
}

export default ReviewCard





