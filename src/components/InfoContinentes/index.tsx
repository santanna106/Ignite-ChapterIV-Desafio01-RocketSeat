import {Flex,Box,Text,HStack, Wrap, WrapItem,Center,Image} from '@chakra-ui/react';

export default function InfoContinentes (){
    return (
        <>
            <Flex flexDirection="row" alignItems="center" justifyContent="space-between" w="70%">
                <Box h="211px" w="600px">
                    <Text textAlign="justify">
                        Lorem Ipsum is simply dummy text of the printing and typesetting 
                        industry. Lorem Ipsum has been the industry's standard dummy text ever
                        since the 1500s, when an unknown printer took a galley of type and scrambled 
                        it to make a type specimen book. It has survived not only five centuries, but 
                        also the leap into electronic typesetting, remaining essentially unchanged. It
                        was popularised in the 1960s with the release of Letraset sheets containing Lorem
                        Ipsum passages, and more recently with desktop publishing 
                        software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Text>
                </Box>
                <Box  h="99px" w="490px"  alignItems="center" justifyContent="center">
                    <HStack justifyContent="space-between"  >
                        <Flex alignItems="center" justifyContent="center" flexDirection="column">
                            <Text 
                                fontFamily="Poppins"
                                fontWeight="600"
                                fontSize="48px"
                                textAlign="center"
                                textColor={'#FFBA08'} >
                                50
                            </Text>
                            <Text
                                fontFamily="Poppins"
                                fontWeight="600"
                                fontSize="24px"
                                textAlign="center"
                            >países</Text>
                        </Flex>
                        <Flex alignItems="center" justifyContent="center" flexDirection="column">
                            <Text 
                                fontFamily="Poppins"
                                fontWeight="600"
                                fontSize="48px"
                                textAlign="center"
                                textColor={'#FFBA08'} >60
                            </Text>
                            <Text
                                fontFamily="Poppins"
                                fontWeight="600"
                                fontSize="24px"
                                textAlign="center"
                            >línguas</Text>
                        </Flex>
                        <Flex alignItems="center" justifyContent="center" flexDirection="column">
                            <Text 
                                fontFamily="Poppins"
                                fontWeight="600"
                                fontSize="48px"
                                textAlign="center"
                                textColor={'#FFBA08'} >27
                            </Text>
                            <Text
                                fontFamily="Poppins"
                                fontWeight="600"
                                fontSize="24px"
                                textAlign="center"
                            >cidades + 100</Text>
                        </Flex>
                    </HStack>
                </Box>
            </Flex>
            <Flex h="700"  w="70%" flexDirection="column">
                <Flex mb="10" justifyContent="flex-start" alignItems="flex-start">
                    <Text
                        fontFamily="Poppins"
                        fontWeight="600"
                        fontSize="36px"
                        textAlign="center"
                    >Cidades + 100</Text>
                </Flex>
                <Wrap spacing="50px" >
                    <WrapItem >
                        <Center w="256px" h="279px"  borderRadius={5} borderColor={'yellow.300'} borderWidth={1} >
                          <Flex w="100%" h="100%"  flexDir="column">
                            <Image src={'/images/LondonFoto.svg'} h="173px" w="256px" />
                            <Flex flexDirection="row" h="100%">
                                <Flex  
                                      w="50%"
                                      justifyContent="space-around"
                                      flexDirection="column">
                                    <Text>Londres</Text>
                                    <Text>Reino Unido</Text>
                                </Flex>
                                <Flex h="100%" w="50%" align="center" justifyContent="center">
                                    <Image src={'/images/EllipseEngland.svg'} h="10" w="10"/>
                                </Flex>
                            </Flex>
                            
                          </Flex>
                         
                        </Center>
                    </WrapItem>
                    <WrapItem>
                        <Center w="256px"  h="279px" bg="green.200">
                            <Image h="173px" w="256px" />
                        </Center>
                    </WrapItem>
                    <WrapItem>
                        <Center w="256px"  h="279px" bg="tomato">
                            <Image h="173px" w="256px" />
                        </Center>
                    </WrapItem>
                    <WrapItem>
                        <Center w="256px"  h="279px" bg="blue.200">
                            <Image h="173px" w="256px" />
                        </Center>
                    </WrapItem>
                    <WrapItem>
                        <Center w="256px"  h="279px" bg="blackAlpha.500">
                            <Image h="173px" w="256px" />
                        </Center>
                    </WrapItem>
                </Wrap>
            </Flex>
        </>

    )
}