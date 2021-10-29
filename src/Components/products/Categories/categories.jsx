import React from 'react'
import { Grid, Typography,Accordion,AccordionSummary,AccordionDetails,CircularProgress } from '@material-ui/core'

import { ExpandMore } from '@material-ui/icons'
import "tachyons"
import useStyles from './styles'

import SubCategory from './Subcategories/subCategories'

const Categories = ({categories}) => {


    const classes = useStyles() 

    console.log('get',categories)

      return(
        <>
      
        <main className={classes.root}>
          <div className={classes.toolbar} />
          <Grid container justifyContent="center" alignItems="center" spacing={1} className="pa2">
          {categories.map((categories)=>(
              <Grid  item xs={4} sm={3} md={3} lg={3} >
                     <Accordion TransitionProps={{ unmountOnExit: true }}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1a-content"
                                id="panel1a-header">
                                     <Typography>{categories.name}</Typography>
                             </AccordionSummary>
                                    
                             <AccordionDetails>
                                <SubCategory  categoryId={categories.id}/>
                             </AccordionDetails>
                    </Accordion>
              </Grid>
            ))}
          </Grid>
        </main>
     </>
     

    )
}
 
export default Categories