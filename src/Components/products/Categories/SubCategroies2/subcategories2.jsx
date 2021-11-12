import React, { useEffect,useState } from 'react'

import { Typography,Accordion,AccordionSummary, CircularProgress } from '@material-ui/core'
import {ExpandMore } from '@material-ui/icons'
import useStyles from './styles'
import { commerce } from '../../../../lib/commerce'
import SubCategory from '../Subcategories/subCategories'

const SubCategory2 = (categoryId) => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [subCategories,setsubCategories] = useState([])
   

   const fetchSubCategories = async (categoryd) =>{
         const categorydata= await commerce.categories.retrieve(categoryd)
         setsubCategories(categorydata)
         setIsLoading(false)
   }

    const classes=useStyles()
        
    useEffect(()=>{
            fetchSubCategories(categoryId.categoryId) ;
     },[])
       


         const SVT = subCategories.children; 
             if (isLoading) { 
                 return(<CircularProgress />)}
return(
                
               <main className={classes.content}>
                    {SVT.map((sdvt)=>(
                        <Accordion TransitionProps={{ unmountOnExit: true }} key={sdvt.key}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1a-content"
                                id="panel1a-header">
                                    <Typography>{sdvt.name}</Typography>
                            </AccordionSummary>
                                    <SubCategory categoryId={sdvt.id}/>
                        </Accordion>
                ))}</main>)}
   
      
export default SubCategory2
