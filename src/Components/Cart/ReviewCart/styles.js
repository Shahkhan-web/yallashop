import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(() => ({
   

receipt :{
    textAlign:'center',
    background: '#fff',
    width: "18rem",
    position: "relative",
    padding: "1rem"
},
  reciept:{  '::after': {
    background:' linear-gradient(135deg, #fff 0.5rem, transparent 0), linear-gradient(-135deg, #fff 0.5rem, transparent 0)',
      backgroundPosition:" left-bottom",
      backgroundRepeat: 'repeat-x',
      backgroundSize:' 1rem',
      content: '""',
      display: 'block',
      position: 'absolute',
      bottom: '-1rem',
      left: '0',
      width: '100%',
      height: '1rem',
  }},
  
  receipt__header: {
    textAlign: 'CenterFocusStrong',
  },
  
  receipt__title: {
    color:' #FF619B',
    fontSize: '1.6rem',
    fontWeight:' 700',
    margin: '1rem 0 0.5rem',
  },
  
  receipt__date :{
    fontSize: '0.8rem',
    color: '#666',
    margin: '0.5rem 0 1rem',
  },
  
  receipt__list: {
    margin:' 2rem 0 1rem',
    padding: '0 1rem',
  },
  
  receiptlistrow : {
    display: 'flex',
    justifyContent: 'space-between',
    margin:' 1rem 0',
    position: 'relative',
  },
   recieptlistrow:{ "&:after" : {
    content: '',
    display:' block',
    borderBottom:' 1px dotted rgba(0,0,0,0.15)',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top:' -0.25rem',
    zIndex: '',
  }},
  
  receipt__item :{
    backgroundColor:' #fff',
    zIndex: '2',
    padding: '0 0.15rem 0 0',
    color: '#1f1f1f',
  },
  
  receipt__cost :{
    margin: '0',
    padding:' 0 0 0 0.15rem',
    backgroundColor: '#fff',
    zIndex: '2',
    color: '#1f1f1f',
  },
  
  receipt__listrow_total :{
    borderTop:' 1px solid #FF619B',
    padding:' 1.5rem 0 0',
    margin: '1.5rem 0 0',
    fontWeight: '700',
  }

}));