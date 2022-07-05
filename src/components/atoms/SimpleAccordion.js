// import { accordionToggle } from '../../scripts/accordion';

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion({funFact, header, data, children}) {
  let title;
  let fact;

  if (funFact) {
      title = funFact.title;
      fact = funFact.fact;
  } else if (header) {
    title = header;
    fact = data;
  }
  

  return (
    <div className='accordion-wrapper'>
      <Accordion key={title}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="title">{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {fact}
          </Typography>
          {children}
        </AccordionDetails>
      </Accordion>
    </div>

    // <>
    // <button class="accordion" onClick={accordionToggle}>{funFact.title}</button>
    // <div class="panel">
    //   <p>{funFact.fact}</p>
    // </div>
    // </>
  )
}