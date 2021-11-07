import { Grid} from '@mui/material'
import React from 'react'
import AppBar from '../../components/AppBar'
import { makeStyles } from '@mui/styles'
import AnimeList from '../animeList/pageSetions/AnimeList'
import styles from '../../../styles/animeListStyles'

const useStyles = makeStyles(styles)
const AnimeListPage = () => {
    const classes = useStyles()
    return (
        <Grid container item xs={12}>
        <Grid item xs={12}>
        <AppBar />
        </Grid>
            <Grid container item justifyContent="center" alignItems="center" className={classes.pageContainer}>
             <Grid item xs={10}>
                 <AnimeList/>
             </Grid>
            </Grid>
        </Grid>
    )
}

export default AnimeListPage
