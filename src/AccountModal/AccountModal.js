import { useEffect, useState } from "react";

import {
  Box,
  Button,
  Flex,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
} from "@chakra-ui/react";

import metadata                         from './metadata.json';
import PaginationComponent              from './AccountModalPagination';

export function AccountModal({ isOpen, onClose, tokensOfOwner, account }) {
  const [data, setData] = useState([]);

  function MakeArray() {
      let newArray = [];
      for(let index=1; index<=tokensOfOwner.length; index++) { newArray = [...newArray, metadata[index-1]]}
      return newArray;
  }
  
  useEffect(() => { setData(MakeArray); }, [tokensOfOwner])

  function handleDeactivateAccount() {
    deactivate();
    onClose();
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="md">
      <ModalOverlay /> 
      <ModalContent background="gray.900" border="1px" borderStyle="solid" borderColor="gray.700" borderRadius="3xl" marginTop="40px">
        <ModalHeader color="white" px={4} fontSize="lg" fontWeight="medium"> Account </ModalHeader>
        <ModalCloseButton color="white" fontSize="sm" _hover={{ color: "whiteAlpha.700" }} />
        <ModalBody pt={0} px={4}>
          <Box borderRadius="3xl" border="1px" borderStyle="solid" borderColor="gray.600" px={5} pt={4} pb={2} mb={3} >
            <Flex justifyContent="space-between" alignItems="center" mb={3}>
              <Text color="gray.400" fontSize="sm"> Connected with MetaMask </Text>
              <Button
                variant="outline"
                size="sm"
                borderColor="blue.800"
                borderRadius="3xl"
                color="blue.500"
                fontSize="13px"
                fontWeight="normal"
                px={2}
                height="26px"
                _hover={{ background: "none", borderColor: "blue.300", textDecoration: "underline" }}
                onClick={handleDeactivateAccount}
              > Change </Button>
            </Flex>
            <Flex alignItems="center" mt={2} mb={4} lineHeight={1}>
              <Text color="white" fontSize="xl" fontWeight="semibold" ml="2" lineHeight="1.1"> 
                {`${account && account.slice(0, 6)}...${account && account.slice(account.length - 4, account.length)}`}
              </Text>
            </Flex>
            <Flex alignContent="center" m={3}>
              <Link
                fontSize="sm"
                display="flex"
                alignItems="center"
                href={`https://cronos.org/explorer/address/${account}`}
                isExternal
                color="gray.400"
                ml={6}
                _hover={{ color: "whiteAlpha.800", textDecoration: "underline" }}
              >
                View on Explorer
              </Link>
            </Flex>
          </Box>
          <Box alignContent="center" p={4} pr={4} mt={4}>
            <Box >Balance: {tokensOfOwner.length}</Box>
            <PaginationComponent nftObjects = {data} />
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
