import React, { useState } from 'react';
import { Container, Typography, Grid, Button,  Avatar, Paper } from '@material-ui/core'
import { GoogleLogin } from 'react-google-login';

import { useDispatch } from 'react-redux';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import useStyles from './styles'
import Input from './Input';
import Icon from './Icon';
import { useHistory } from 'react-router-dom';
import { signin, signup } from '../../redux/actions/auth'

const initialData = {firstName: '', lastName:'', email:'', password:'', confirmedPassword:''};
const Auth = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const history = useHistory();
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState(initialData)
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        
        if(isSignup){

            dispatch(signup(formData, history));

        }else{

            dispatch(signin(formData, history));

        }

    }

    const handleChange = (e) => {
            setFormData({...formData, [e.target.name]: e.target.value})
    }

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false);
    }

    const googleSuccess = (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;
        try {
            dispatch({type : 'AUTH' , data: { result, token }})
            history.push('/');
        } catch (error) {
            console.log(error.message)
        }
    }

    const googleFailure = (error) => {
        console.log(error, "Unsuccessful")
    }
    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}><LockOutlinedIcon /></Avatar>
                <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>

                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                    <Input name="firstName" label='First Name' handleChange={handleChange} autoFocus half />
                                    <Input name="lastName" label='Last Name' handleChange={handleChange} half />
                                </>
                            )}
                        <Input name="email" label='Email Address' handleChange={handleChange} type="email" />
                        <Input name="password" label='Password' handleChange={handleChange} handleShowPassword={handleShowPassword} type={showPassword ? 'text' : 'password'} />
                        {isSignup && <Input name="confirmedPassword" label="Repeat Password" handleChange={handleChange} type='password' />}
                    </Grid>
                    <Button type='submit' fullWidth variant='contained' color="primary" className={classes.submit}>
                        {isSignup ? 'Sign Up' : 'Sign In'}
                    </Button>
                    <GoogleLogin
                        clientId="749231429622-n9gnr0jb6rbifgorn842cfn1e63b2me6.apps.googleusercontent.com"
                        
                        render={(renderProps) => (
                            <Button
                                className={classes.googleButton}
                                color="primary"
                                fullWidth
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                startIcon={<Icon />}
                                variant='contained'
                            >
                                Sign In With Google
                            </Button>

                        )}

                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />
                    <Grid container justify="center">
                        <Button onClick={switchMode}>
                            {isSignup ? 'Already Have an Account? Sign In' : "Don't have an account? Sign Up"}
                        </Button>
                    </Grid>
                </form>

            </Paper>
        </Container>
    );
};

export default Auth;