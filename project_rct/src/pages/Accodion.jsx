
// const filterArray=
// [
// {
// "Category":[{ name:"Athletic Fit Jeans"},{name:"Baggy Jeans"}]
// },
// {
// "Category":[{},{}]
// }
// ];


  
       
// {
//   "name":"Athletic Fit Jeans"
//   },
//   {"name":"Baggy Jeans"},
//   {"name":"Belts"},
//   {"name":"Bootcut Jeans"},
//   {"name":"Bottoms"},
//   {"name":"Chinos"},
//   {"name":"Denim Joggers"},
//   {"name":"Bottoms"},


import {
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    
  } from '@chakra-ui/react'
  import { MinusIcon,
    AddIcon} from '@chakra-ui/icons'
    

function Accodion({list,setSelectedFilter}){

return(
<Accordion allowMultiple>
{list.map(item=>
(
  <AccordionItem>
  {({ isExpanded }) => (
    <>
      <h2>
        <AccordionButton>
          <Box as="span" flex='1' textAlign='left'>
          <b>{item.type}</b>
          </Box>
          {isExpanded ? (
            <MinusIcon fontSize='12px' />
          ) : (
            <AddIcon fontSize='12px' />
          )}
        </AccordionButton>
      </h2>

    {item.list.map((item)=>(   <AccordionPanel pb={1}  className='accordin-title' onClick={()=>{setSelectedFilter(item)}}>
      <span> {item}</span>
     
        </AccordionPanel>))}
    
     
      
    </>
  )}
</AccordionItem>
)
  )}
  {/* <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='left'>
              Section 2 title
            </Box>
            {isExpanded ? (
              <MinusIcon fontSize='12px' />
            ) : (
              <AddIcon fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='left'>
              Section 2 title
            </Box>
            {isExpanded ? (
              <MinusIcon fontSize='12px' />
            ) : (
              <AddIcon fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </>
    )}
  </AccordionItem> */}
</Accordion>
)
}

export default Accodion

