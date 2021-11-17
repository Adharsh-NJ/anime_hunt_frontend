import { Grid, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import StarRatings from "react-star-ratings";
import TextField from "@mui/material/TextField"
import { Button } from "@mui/material"
import { makeStyles } from '@mui/styles';
import styles from "../../../../styles/animeDetailsStyles"
import { postReview } from '../../../../services/BackendService';
import { getReview } from '../../../../services/BackendService';
import ReviewCard from './ReviewCard';

const useStyles = makeStyles(styles)
const ReviewSection = (props) => {
    const classes = useStyles()
    const animeId = props.animeId
    const [review, setReview] = useState("")
    const [validateReview, setValidateReview] = useState(true);
    const [rating, setRating] = useState(0)
    const [reviewList, setReviewList] = useState([])

    useEffect(() => {
        async function fetchReviews(animeId) {
            try {
                const response = await getReview(animeId);
                setReviewList(response.data?.review);

            } catch (error) {
                console.log(error);
            }
        }
        animeId !== null && fetchReviews(animeId);
    }, [animeId])
    
    const handleRating = (rating) => {
        setRating(rating)
    }

    const handleChange = (e) => {
        const { value } = e.target;
        setReview(value);
    }
    const handleClick = () => {
        if (review !== "") {
            submitReview()
            setValidateReview(true)
            setReview('')
            setRating(0)
        } else {
            validate()
        }

    }
    const validate = () => {
        setValidateReview(false)
    }
    const submitReview = () => {
        postReview({
            "animeId": animeId,
            "rating": rating,
            "review": review
        })
        .then(()=>{window.location.reload()}) 
        
    }

    return (
        <Grid container spacing={3} >
            <Grid container item direction="column" spacing={4} justifyContent="center" alignItems="center" >
                <Grid item>
                    <Typography variant="h4" color="white">Your Rating</Typography>
                </Grid>
                <Grid item container direction="column" spacing={2} alignItems="center">
                    <Grid item>
                        <StarRatings rating={rating} isSelectable={true} changeRating={handleRating} widgetRatedColors="blue" />
                    </Grid>
                    <Grid item  >
                        <TextField
                            id="outlined-multiline-static"
                            className={classes.reviewTextarea}
                            label="Your Review"
                            multiline
                            name="review"
                            placeholder="Add your Review"
                            value={review}
                            onChange={handleChange}
                            columns={7}
                            rows={3}
                            variant="outlined"
                            color="primary"
                            error={!validateReview ? true : false}
                            helperText={!validateReview ? "*This field is required" : null}
                        />
                    </Grid>
                    <Grid item >
                        <Button variant="contained" className={classes.reviewSaveButton} color="primary" onClick={handleClick}>post</Button>
                    </Grid>
                </Grid>
            </Grid>
            {reviewList!==undefined&&reviewList!==null&&reviewList.length!==0&& <Grid item container className={classes.reviewContainer}  >
                <Grid item xs={12} container justifyContent="center" >
                    <Typography variant="h3" color='white'>Reviews Section</Typography>
                </Grid>
                <ReviewCard data={reviewList} />
            </Grid>}
        </Grid>
    )
}

export default ReviewSection
