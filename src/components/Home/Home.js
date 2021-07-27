import React, { useEffect, useState } from 'react';
import { Container, Grid, Paper, Typography } from '@material-ui/core'
import Posts from '../Posts/Posts';
import Form from '../form/Form';
import useStyles from '../Posts/styles'
import { getPosts } from '../../redux/actions/posts';
import { useDispatch } from 'react-redux';


const Home = () => {
    const dispatch = useDispatch();
    const [postCount, setCount] = useState(1);

    useEffect(() => {
        dispatch(getPosts());
        console.log('Clicked')
    }, [postCount]);

    const classes = useStyles();

    return (
        <div style={{ marginTop: '1rem' }}>
            <Container>
                <Grid container className={classes.mainContainer} justify='center' spacing={4}>

                    <Grid item sm={8}>
                        <Paper className={classes.padding} elevation={3}>
                            <Form postCount={postCount} setCount={setCount}></Form>
                        </Paper>
                    </Grid>
                </Grid>

                <Grid container className={classes.mainContainer} justify='center' spacing={4}>

                    <Grid item sm={8}>
                        <Posts></Posts>
                    </Grid>

                </Grid>
                {/* <Grid>
                        <Paper className={classes.padding} elevation={3}>
                            <Form postCount={postCount} setCount={setCount}></Form>
                        </Paper>
                    </Grid> */}
            </Container>
        </div>
    );
};

export default Home;