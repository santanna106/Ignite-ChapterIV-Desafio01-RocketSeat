import { Grid,Image,Box,useBreakpointValue ,useMediaQuery,GridItem } from '@chakra-ui/react';

export default function ControlTipoViagem(){
    const variant = useBreakpointValue({ base: "outline", md: "solid",gap:195 })
    const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)")

    console.log('variant: ', variant);
    console.log('isLargerThan1280: ', isLargerThan1280);
    if(isLargerThan1280){

        return (

            <Grid templateColumns="repeat(5, 1fr)" gap={195}>
               
                    <Box >
                        <Image
                            src="/images/Nightlife.svg"
                            alt="Nightlife"
                        />
                    </Box> 
               
               
                    <Box>
                        <Image
                            src="/images/Beach.svg"
                            alt="Beach"
                        />
                    </Box>   
               
                
                     <Box>
                        <Image
                            src="/images/Modern.svg"
                            alt="Modern"
                        />
                    </Box>
             
                
                    <Box>
                        <Image
                            src="/images/Classic.svg"
                            alt="Classic"
                        />
                    </Box>  
                
              
                    <Box>
                        <Image
                            src="/images/More.svg"
                            alt="More"
                        />
                    </Box>     
     
            </Grid>
          
        );
        
    }

    return(
        <Grid templateColumns="repeat(5, 1fr)"
              templateRows="repeat(3, 1fr)" gap={4}>
            <GridItem colSpan={2}>
                <Box>
                    <Image
                    h="100"
                    w="100"
                    src="/images/Nightlife.svg"
                    alt="Nightlife"
                    />
                </Box> 
            </GridItem>
            <GridItem colSpan={2}>
                <Box>
                    <Image
                    h="100"
                    w="100"
                    src="/images/Beach.svg"
                    alt="Beach"
                    />
                </Box> 
            </GridItem>
            <GridItem colSpan={2}>
                <Box>
                    <Image
                    h="100"
                    w="100"
                    src="/images/Modern.svg"
                    alt="Modern"
                    />
                </Box> 
            </GridItem>
            <GridItem colSpan={2} >
                <Box>
                    <Image
                    h="100"
                    w="100"
                    src="/images/Classic.svg"
                    alt="Classic"
                    />
                </Box> 
            </GridItem>
            <GridItem  colStart={2} colEnd={4}  >
                <Box>
                    <Image
                    h="100"
                    w="100"
                    src="/images/More.svg"
                    alt="More"
                    />
                </Box> 
            </GridItem>
         </Grid>
      )
    
}