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
    
    useEffect(() => {
        if (localStorage.getItem('token')) {
            axios.get("http://localhost:9000/api/user/getuser", {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => {
                console.log(res)
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
        <Grid container sm={12} className={classes.appBarContainer} alignSelf="flex-start" >
            <Grid item xs={12} lg={6}>
                <Link onClick={() => { handleClick() }}> <img src={logo} alt="logo" className={classes.logoImg} /></Link>
            </Grid>
            <Grid item xs={12} lg={6} container justifyContent="center" alignItems="center" spacing={3}>
                <Grid item>
                    <Typography variant="h4" color="white" fontFamily="BlinkMacSystemFont" fontStyle='italic'>{`Welcome,${userData?.firstName}  ${userData?.lastName}`}</Typography>
                </Grid>
                <Grid item>
                    <Button variant='contained' color='error' onClick={() => { localStorage.removeItem('token'); history.push('/signin') }}>Log Out</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default AppBar
