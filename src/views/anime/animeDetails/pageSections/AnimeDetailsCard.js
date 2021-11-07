import { Button, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CategoryBox from './CategoryBox'
import ReviewSection from './ReviewSection'
import styles from "../../../../styles/animeDetailsStyles"
import { Link } from '@mui/material'
import { makeStyles } from '@mui/styles'
 
const useStyles=makeStyles(styles)
const AnimeDetailsCard = (props) => {
    const classes=useStyles()
    const animeId=props.animeId
    const data = props.details
    const allGenres=data?.genres
    const [genres,setGenres] =useState(allGenres) 
    const [genresShow,setGenresShow]=useState(true)

    const handleGenres=()=>{
        setGenresShow(!genresShow)
    }
    
    useEffect(()=>{
     if(!genresShow){
        setGenres(allGenres)
     }else if(genresShow){
        setGenres(allGenres?.slice(15))
     }
    },[genresShow,allGenres])
    
    return (
        <Grid container className={classes.detailsCardContainer}  xs={10} >
            <Grid container item xs={12} >
                <img src={data.banner_image} alt="bannerImg" className={classes.bannerImg} />
            </Grid>
            <Grid container item sm={12} lg={4}  justifyContent="center" alignItems="center" >
                <Grid item>
                    <img src={data.cover_image} alt="coverImg" className={classes.coverImg}/>
                   {data?.trailer_url&&<Grid item  xs={12} container justifyContent="center" >
                       <Link href={data.trailer_url} target="_blank" className={classes.trailerButton}>
                        <Button size='large' variant='contained' color="error" fullWidth>Watch Trailer</Button>
                        </Link>
                    </Grid>} 
                </Grid>
            </Grid>
            <Grid container item xs={12} lg={6} spacing={2}>
                <Grid item>
                    <Typography variant="h3" color={data?.cover_color||"white"}>{data.titles?.en}</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body2" color="white">{data.descriptions?.en}</Typography>
                </Grid>
                <Grid item container xs={12} spacing={1}>
                    {genres?.map((val, index) => {
                            return (
                                <Grid item xs={2} key={index}>
                                    <CategoryBox data={val} color={data?.cover_color||"white"}  />
                                </Grid>
                            )
                    })}
                    <Button onClick={handleGenres}>{genresShow?"view more":"View Less"}</Button>
                </Grid>
                <Grid container item spacing={7} xs={12}>
                    <Grid item xs={12} lg={3} >
                        <Typography variant="subtitle1" className={classes.detailsBox} >Episodes:{data.episodes_count}</Typography>
                    </Grid>
                    <Grid item xs={3} >
                        <Typography variant="subtitle1" className={classes.detailsBox}>Year:{data.season_year}</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container item className={classes.reviewSectionMainContainer}>
             <Grid item xs={12}>
                 <ReviewSection animeId={animeId}/>
             </Grid>
            </Grid>
        </Grid>
    )
}

export default AnimeDetailsCard
