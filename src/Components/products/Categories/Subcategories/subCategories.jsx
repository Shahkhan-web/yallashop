import React, { useEffect,useState } from 'react'

import { Typography,Accordion,AccordionSummary,AccordionDetails, CircularProgress } from '@material-ui/core'
import {ExpandMore } from '@material-ui/icons'
import useStyles from './styles'
import { commerce } from '../../../../lib/commerce'
import SubCategory2 from '../SubCategroies2/subcategories2'

const SubCategory = (categoryId) => {
    const [isLoading, setIsLoading] = React.useState(true);

    
   const [subCategories,setsubCategories] = useState([])
   

   const fetchSubCategories = async (categoryd) =>{
         const categorydata= await commerce.categories.retrieve(categoryd);
         setsubCategories(categorydata)
         setIsLoading(false)
   }

    const classes=useStyles()
        
          useEffect(()=>{
                        fetchSubCategories(categoryId.categoryId) ;
                })
       


         const SVT = subCategories.children; 
             if (isLoading) { 
                 return(<CircularProgress />)}
return(
                
               <main className={classes.content}>
                    {SVT.map((sdvt)=>(
                        <Accordion TransitionProps={{ unmountOnExit: true }}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1a-content"
                                id="panel1a-header">
                                    <Typography>{sdvt.name}</Typography>
                            </AccordionSummary>
                                    <SubCategory2 categoryId={sdvt.id}/>
                            <AccordionDetails>
                            </AccordionDetails>
                        </Accordion>
                ))}</main>)}
   
      
export default SubCategory