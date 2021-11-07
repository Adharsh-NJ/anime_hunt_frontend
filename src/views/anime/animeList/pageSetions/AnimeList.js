import { Grid } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { makeStyles } from '@mui/styles'
import styles from "../../../../styles/animeListStyles"
import * as AnimeService from "../../../../services/AnimeService"
import AnimeCard from '../pageSetions/AnimeCard'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material'
import { Select } from '@mui/material'
import { MenuItem } from '@mui/material'
import { FormControl, InputLabel } from '@mui/material'

const useStyles = makeStyles(styles)
const AnimeList = () => {
    const classes = useStyles()
    const [searchTerm, setSearchTerm] = useState('')
    const [animeData, setAnimeData] = useState([])
    const [category, setCategory] = useState('');

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    useEffect(() => {
        async function fetchAnime() {
            try {
                const response = await AnimeService.getAnimeLists();
                setAnimeData(response.data.documents);
            } catch (error) {
                console.log(error);
            }
        }
        fetchAnime();
    }, [])

    return (
        <Grid container className={classes.listContainer} xs={12} justifyContent="flex-end" >
            <Grid item container xs={12} lg={8} >
                <Grid container item justifyContent="center" alignItems="flex-start" xs={12} >
                    <Grid container item xs={12} className={classes.searchContainer} justifyContent="flex-end" spacing={3}>
                        <Grid item container xs={12} lg={5} justifyContent="flex-end" alignItems="flex-end">
                            <Grid item className={classes.animeSearch}>
                                <InputBase type="text" placeholder="Search..." className={classes.searchBar} style={{ color: "white" }} onChange={event => { setSearchTerm(event.target.value) }} />
                                <IconButton >
                                    <SearchIcon color="warning" />
                                </IconButton>
                            </Grid>
                        </Grid>
                        <Grid item container xs={12} lg={3} className={classes.dropDownContainer} spacing={2} justifyContent="flex-end">
                            <Grid item xs={4} md={3} lg={10} container >
                                <FormControl className={classes.dropDown} style={{ border: "2px solid grey" }}>
                                    <InputLabel id="category-select-label" style={{ color: "white" }}>Search By</InputLabel>
                                    <Select
                                        labelId="category-select-label"
                                        id="category-select"
                                        value={category}
                                        className={classes.dropDownSelect}
                                        onChange={handleChange}
                                        style={{ color: "white" }}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={"genres"}>Genre</MenuItem>
                                        <MenuItem value={"titles"}>Title</MenuItem>
                                        <MenuItem value={"descriptions"}>description</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>

            <Grid container item xs={12} spacing={3} justifyContent="center" className={classes.cardContainer}>
                {
                    animeData.filter((anime) => {
                        if (searchTerm === "") {
                            return anime
                        }
                        else if (category === "" && anime.titles.en.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return anime
                        }
                        else if (category === "genres" && anime.genres.includes(searchTerm[0].toUpperCase() + searchTerm.substring(1))) {
                            return anime
                        }
                        else if (category === "titles" && anime.titles.en.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return anime
                        } else if (category === "descriptions" && anime.descriptions.en.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return anime
                        }
                        return null
                    }).map(anime => {
                        return (
                            <Grid item key={anime.id} >
                                <AnimeCard anime={anime} />
                            </Grid>
                        )

                    })
                }

            </Grid>
        </Grid>
    )
}

export default AnimeList
