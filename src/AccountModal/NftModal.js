import styled       from "styled-components";
import MetadataBox  from "./MetadataBox";

import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  extendTheme,
  ChakraProvider,
  Image
} from "@chakra-ui/react";

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const theme = extendTheme({
  components: {
    Modal: {
      baseStyle: () => ({
        dialog: { 
          maxWidth: ["80%", "80%", "80%"],
          minWidth: "95%",
          maxHeight: ["80%", "80%", "80%"],
          minHeight: "95%",
          bg: "#00ff00"
        }
      })//chakra-modal--body1
    }
  }
});

export default function NftModal({ isOpen, onClose, nftObject }) {
  
  return (
    <ChakraProvider theme={theme}>
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="sm">
      <ModalOverlay />
      <ModalContent background="gray.900" border="1px" borderStyle="solid" borderColor="gray.700" borderRadius="3xl" >
        <ModalHeader color="white" px={4} fontSize="lg" fontWeight="medium"> {nftObject.name} </ModalHeader>
        <ModalCloseButton
          color="white" fontSize="sm"
          _hover={{ color: "whiteAlpha.700" }}
        />
        <Header>
          <ModalBody pt={0} px={1.5}>
            <Box borderRadius="2.2em" border="5px" borderStyle="solid" borderColor="gray.600" width={"400px"} 
              borderStartColor={"blue"} borderEndColor={"blue"} borderTopColor={"blue"} borderBottomColor={"blue"}>
              <Image src={"https://fudgy.mypinata.cloud/ipfs/QmaHvkGj9ooAiDwDsVCdoUTbYqJfU5txQA8mR7xLYQwZKj/" + String(nftObject["edition"]) + ".png"} alt="Rekt Apes" 
              borderRadius={"2em"} width={"400px"}/>
            </Box>
            <Box  px={5} pt={4} pb={2} width={"400px"} >
              <Text color="white" fontSize="xl" fontWeight="semibold" ml="2" lineHeight="1.1">Metadata:</Text>
              <MetadataBox index={nftObject["edition"]}/> 
            </Box>
          </ModalBody>
        </Header>
      </ModalContent>
    </Modal>
    </ChakraProvider>
  );
}
