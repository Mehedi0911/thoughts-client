import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core'
import Post from './Post/Post';
import { useSelector } from 'react-redux';

const Posts = () => {
    const posts = useSelector((state) => state.posts);
    


    return (

        <Grid>
            <Grid>
                {
                    !posts.length ? <CircularProgress /> : posts.map(post => <Post post={post}></Post>)
                }
            </Grid>

        </Grid>
    );
};

export default Posts;