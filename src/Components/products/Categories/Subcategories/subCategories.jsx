import React, { useEffect,useState } from 'react'

import { Typography,Accordion,AccordionSummary, CircularProgress } from '@material-ui/core'
import {ExpandMore } from '@material-ui/icons'
import useStyles from './styles'
import { commerce } from '../../../../lib/commerce'
import SubCategory2 from '../SubCategroies2/subcategories2'

const SubCategory = ({renderProductBycategory,categoryId}) => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [subCategories,setsubCategories] = useState([])
    
    const classes=useStyles()
 
    
    const fetchSubCategories = async (categoryd) =>{
            const categorydata= await commerce.categories.retrieve(categoryd)
            setsubCategories(categorydata)
            setIsLoading(false)
    }
    
        const checkCategoryChild =()=> {if (subCategories.children.length === 0) {renderProductBycategory(subCategories.id)}}
       
        try{ checkCategoryChild()}
        catch(err) {
            console.log("Loading...") 
            try{checkCategoryChild()}
            catch(err){}}


        useEffect(()=>{
              fetchSubCategories(categoryId) ;
        },[])
       


             if (isLoading) { 
                 return(<CircularProgress />)}
            return(
                
               <main className={classes.content}>
                    {subCategories.children.map((sdvt)=>(
                        <Accordion TransitionProps={{ unmountOnExit: true }} key={sdvt.id}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1a-content"
                                id="panel1a-header">
                                    <Typography>{sdvt.name}.</Typography>
                            </AccordionSummary>
                               <SubCategory2 categoryId={sdvt.id}/>
                        </Accordion>
                ))}</main>)}
   
      
export default SubCategory
