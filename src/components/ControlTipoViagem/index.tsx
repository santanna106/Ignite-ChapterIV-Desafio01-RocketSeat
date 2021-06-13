import {useState,useEffect} from 'react';
import { Grid,
          Box,
          useBreakpointValue,
          useMediaQuery,
          GridItem,
          Flex,
          Image,
          Spinner} from '@chakra-ui/react';


export default function ControlTipoViagem(){
    const [loading,setLoading] = useState(false);
    const variant = useBreakpointValue({ base: "outline", md: "solid",gap:195 })
    const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)")

    console.log('isLargerThan1280: ', isLargerThan1280);
    console.log('variant: ', variant);

    useEffect(() => {
        setLoading(true);
        console.log('isLargerThan1280 EFFECT: ', isLargerThan1280)
        console.log('loading: ', loading)
    },
    [isLargerThan1280])

    
        if(loading){

            if(isLargerThan1280) {
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
                )

            } else {

                return(
                    <Flex flexDirection="column">
                        <Flex flexDirection="row" mb={15}>
                            <Flex w="80%" justifyContent="flex-start" alignItems="flex-start">
                                <Image
                                    h="30"
                                    w="30"
                                    src="/images/NightlifeMobile.svg"
                                    alt="Nightlife"
                                    />
                            </Flex> 
                            <Flex  w="50%" justifyContent="flex-end" alignItems="flex-end">
                                <Image
                                    h="30"
                                    w="30"
                                    src="/images/BeachMobile.svg"
                                    alt="Beach"
                                    />
                            </Flex> 
                        </Flex>
                        <Flex flexDirection="row" mb={15}>
                            <Box>
                                <Image
                                    h="30"
                                    w="30"
                                    src="/images/ModernMobile.svg"
                                    alt="Modern"
                                    />
                            </Box> 
                            <Flex  w="60%" justifyContent="flex-end" alignItems="flex-end">
                                <Image
                                h="30"
                                w="30"
                                src="/images/ClassicMobile.svg"
                                alt="Beach"
                                />
                            </Flex> 
                           
                        </Flex>
                        <Flex flexDirection="row" alignItems="center" justifyContent="center" mb={15}>
                            <Box>
                                <Image
                                h="30"
                                w="30"
                                src="/images/MoreMobile.svg"
                                alt="More"
                                />
                            </Box> 
                        </Flex>
                       
                   </Flex>
                   
                  )
            }
            
        
    

        } else {
           return (
               
                <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="xl"
                 />)
        }
        
   

     

        

    

    
    
}