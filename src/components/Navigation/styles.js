import { makeStyles } from "@material-ui/core";
import { deepPurple } from '@material-ui/core/colors';
export default makeStyles((theme) => ({
  appBar: {
    backgroundColor:'#111111',
    margin: '0 0 30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
  },
    heading: {
        color: 'rgba(0,183,255, 1)',
        textDecoration: 'none',
        
      },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
        
      },
      userName: {
        display: 'flex',
        alignItems: 'center',
      },
      profile: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '500px',
      },
      toolbar: {
        
        display: 'flex',
        justifyContent: 'flex-end',
        padding:'0'
       
      },
    link:{
        color:'#FFF',
        fontWeight:'500',
        letterSpacing:'.1rem',
        fontSize:'1rem',
        transition:'all ease .3s',
        '&:hover':{
            color:'#0FB9F4',
            cursor:'pointer'
        }
    },
    marginLeft:{
        marginLeft:'1rem'
    },
    flex:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
    },
   
    
}))