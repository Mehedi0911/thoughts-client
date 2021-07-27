import React, { useEffect, useState } from 'react';
import { AppBar, Container, Typography, Grid, Button, Toolbar, Avatar } from '@material-ui/core'
import useStyles from './styles';
import decode from 'jwt-decode';
// import thoughtsLogo from '../../images/Asset 1.png'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
const Navigation = () => {
    const dispatch = useDispatch()
    const history = useHistory();
    const location = useLocation();
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

    const logout = () => {
        dispatch({ type: 'LOGOUT' })
        history.push('/');
        setUser(null);
    }

    useEffect(() => {
        const token = user?.token;
        if (token) {
            const decodedToken = decode(token)

            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])
    return (
        <div>
            <AppBar position='static' className={classes.appBar}>

                
                    <Grid item xs={6}>
                        {/* <img onClick={()=> history.push('/')} height={40} src={thoughtsLogo} alt="" /> */}
                        <Typography className={classes.heading} component={Link} to="/" variant="h5">Thoughts</Typography>
                    </Grid>
                    <Grid item xs={6} lg={3} md={3}>

                        <Toolbar >
                            {
                                user ? (
                                    <div className={classes.profile}>
                                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                                        <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                                        <Button variant="contained" color="primary" onClick={() => logout()}>Logout</Button>
                                    </div>
                                ) :
                                    (

                                        <Button component={Link} to='/auth' variant="contained" color="primary" onClick={() => { }}>Login</Button>

                                    )
                            }
                        </Toolbar>


                    </Grid>
                

            </AppBar>
        </div>
    );
};

export default Navigation;