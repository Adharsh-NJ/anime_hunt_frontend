import { Grid } from '@mui/material'
import React, { useState, useEffect } from 'react'
import AppBar from '../../components/AppBar'
import { useParams } from "react-router";
import * as AnimeService from '../../../services/AnimeService'
import AnimeDetailsCard from './pageSections/AnimeDetailsCard';
import { makeStyles } from '@mui/styles';
import styles from "../../../styles/animeDetailsStyles"

const useStyles = makeStyles(styles)
const AnimeDetailsPage = () => {
    const classes = useStyles()
    const { id } = useParams();
    const [animeDetails, setAnimeDetails] = useState([])

    useEffect(() => {
        async function fetchAnimeDetails(id) {
            try {
                const response = await AnimeService.getAnimeDetails(id);
                setAnimeDetails(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchAnimeDetails(id);
    }, [id])

    return (
        <Grid container className={classes.mainDetailsContainer}>
            <Grid item xs={12}>
                <AppBar />
            </Grid>
            <Grid container item xs={12} justifyContent="center" alignItems="center">
                <AnimeDetailsCard details={animeDetails} animeId={id} />
            </Grid>
        </Grid>
    )
}

export default AnimeDetailsPage
