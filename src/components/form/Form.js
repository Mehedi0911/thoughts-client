import React, { useEffect } from 'react';
import { TextField, Typography, Button, Paper } from '@material-ui/core';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import useStyles from './styles'
import { createPost, getPostId, updatePost } from '../../redux/actions/posts';

const Form = ({postCount, setCount}) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const currentId = useSelector((state) => state.singlePost);
    const post = useSelector((state) => currentId? state.posts.find((p) => p._id === currentId) :null)
    const user = JSON.parse(localStorage.getItem('profile'));
    
    const [postData, setPostData] = useState({
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    });

    useEffect(() => {
        if(post) setPostData(post);  
    },[post])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(currentId){
            dispatch(updatePost(currentId, {...postData, name: user?.result?.name}));
        }else{
            dispatch(createPost({...postData, name: user?.result?.name}));
            setCount(postCount+1);
            
        }
        clear();
    }

    const clear = () => {
        dispatch(getPostId(null))
        setPostData({
            title: '',
            message: '',
            tags: '',
            selectedFile: ''
        });
    }

    if(!user?.result?.name) {
        return(
            <Paper className={classes.paper}>
                <Typography variant="h6" align="center">
                    Please Sign In or Create Account to create post or like posts
                </Typography>

            </Paper>
        )
    }
    return (
        <div>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Typography className={classes.marginBottom} variant="h6">{currentId? 'Editing' : 'Sharing'} a Thought</Typography>
               
                <TextField
                    className={classes.marginBottom}
                    name="title"
                    variant="outlined"
                    label="Title"
                    fullWidth
                    value={postData.title}
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                />
                <TextField
                    className={classes.marginBottom}
                    name="message"
                    multiline rows={4}
                    variant="outlined"
                    label="Message"
                    fullWidth
                    value={postData.message}
                    onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                />
                <TextField
                
                    className={classes.marginBottom}
                    name="tags"
                    variant="outlined"
                    label="Tags"
                    fullWidth
                    value={postData.tags}
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
                />
                <div className={classes.marginBottom}>
                    <FileBase
                        
                        type="file"
                        multiple={false}
                        onDone={({base64}) => setPostData({...postData, selectedFile:base64})}
                    />
                </div>
                <Button className={classes.marginBottom} variant="contained" color="primary" size="large" fullWidth type="submit">Submit</Button>
                <Button variant="contained" color="secondary" size="large" fullWidth onClick={() => clear()}>Clear</Button>
            </form>
        </div>
    );
};

export default Form;