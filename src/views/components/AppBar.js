import React, { useEffect, useState } from 'react'
import { Grid, Typography } from '@mui/material'
import { useHistory } from 'react-router-dom'
import logo from '../../images/logo.png'
import { makeStyles } from '@mui/styles'
import styles from "../../styles/appBarStyles"
import Button from '@mui/material/Button';
import axios from "axios"
import { Link } from '@mui/material'

const useStyles = makeStyles(styles)
const AppBar = () => {
    const classes = useStyles()
    const history = useHistory()
    const [userData, setUserData] = useState(null)
    const name = userData?.firstName === undefined ? "user" : `${userData?.firstName}  ${userData?.lastName}`;

    useEffect(() => {
        if (localStorage.getItem('token')) {
            axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/user/getuser`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => {
                setUserData(res.data.data)
            }).catch(err => {
                console.log(err);
                localStorage.removeItem('token')
                history.push('/signin')
            })
        } else {
            history.push('/signin')
        }
    }, [history])

    const handleClick = () => {
        history.push('/animes')
    }

    return (
        <Grid container className={classes.appBarContainer} alignSelf="flex-start" >
            <Grid item xs={12} lg={6}>
                <Link onClick={() => { handleClick() }}> <img src={logo} alt="logo" className={classes.logoImg} /></Link>
            </Grid>
            <Grid item xs={11} lg={6} container justifyContent="center" alignItems="center" spacing={3} className={classes.detailContainer}>
                <Grid item xs={12} sm={10} md={7} lg={7} container justifyContent="flex-end">
                    <Typography variant="h4" color="white" fontFamily="BlinkMacSystemFont" fontStyle='italic'>{`Welcome,`}</Typography>
                    <Typography variant="h4" color="white" fontFamily="BlinkMacSystemFont" fontStyle='italic'>{`${name}`}</Typography>
                </Grid>
                <Grid item xs={12} lg={3} container justifyContent="flex-end" >
                    <Button variant='contained' color='error' onClick={() => { localStorage.removeItem('token'); history.push('/signin') }}>Log Out</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default AppBar
