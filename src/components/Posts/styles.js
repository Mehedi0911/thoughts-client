import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    reverseContainer: {
        display: 'flex',
        flexDirection: 'column-reverse'
    },
    padding: {
        padding: '1rem'
    },
    marginLeft: {
        marginLeft: '1rem'
    },
    flex: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    appBar: {
        backgroundColor: '#303030',
        padding: '.7rem 0'
    },
    [theme.breakpoints.down('sm')]: {
        mainContainer: {
            display: 'flex',
            flexDirection: 'column-reverse'
        }

    },

}))