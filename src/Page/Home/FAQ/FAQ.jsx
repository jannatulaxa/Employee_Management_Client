import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HeadTittle from '../../../Components/Shared/HeadTittle/HeadTittle';

export default function ControlledAccordions({data}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // Employee Management FAQ data
//   useEffect(() => {
  
//   }, [])
//   const faqData = ;
// const

  return (
    <div>
              <HeadTittle heading={"Employee Management FAQs Answered!"} tittle={"Frequently Asked Questions"}></HeadTittle>

        <div style={{ marginTop: '20px',marginRight: '30px', marginLeft: '30px',border:'1px solid #D8DBFF', paddingTop:'15px', paddingBottom:'15px'}}>
      {data.map((item, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index + 1}`}
          onChange={handleChange(`panel${index + 1}`)}
          sx={{ backgroundColor: '#646EE4', marginRight: '15px', marginLeft: '15px',  }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index + 1}bh-content`}
            id={`panel${index + 1}bh-header`}
            sx={{ backgroundColor: '#D8DBFF', }}
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              {item.title}
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>{item.subtitle}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
    </div>
  );
}
