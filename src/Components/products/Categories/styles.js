import { makeStyles } from "@material-ui/core";

export default makeStyles ((theme) => ({
    toolbar:theme.mixins.toolbar,
    root:{
        flexGrow:1,
        backgroundColor:'lightgrey',
        width:'97%'
    },
    vl: {
        paddingTop: 70,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
      },
      numbers: {
        fontSize: 30,
        color: '#31C283',
        fontWeight: 'bold',
      },
    
}))