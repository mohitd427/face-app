import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Flex,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

import { useState } from "react";
import React from "react";
import {
  AiFillDelete,
  AiOutlineEdit,
  AiOutlineHeart,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
import { BsFillHeartFill } from "react-icons/bs";
import { ImEarth } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function UserCard({
  _id,
  website,
  name,
  phone,
  email,
  username,
}) {
  const [like, setLike] = useState(true);
  
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const IMAGES = [
    `https://avatars.dicebear.com/v2/avataaars/{${username}}.svg?options[mood][]=sad`,
  ];

  //   const navigate = useNavigate();

  //   const handleEdit = (id) => {
  //     console.log(id);
  //     navigate(`/${id}`);
  //   };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/users/delete/${id}`)
      .then((res) => window.location.reload(false))
      .catch((err) => console.log(err));
  };

  const handleLike = () => {
    setLike(!like);
  };
  console.log(like ? true : false);

  return (
    <>
      <Center py={12}>
        <Box
          role={"group"}
          p={6}
          maxW={"330px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
        >
          {IMAGES.map((i) => {
            return (
              <Box
                rounded={"lg"}
                mt={-12}
                pos={"relative"}
                height={"230px"}
                _after={{
                  transition: "all .3s ease",
                  content: '""',
                  w: "full",
                  h: "full",
                  pos: "absolute",
                  top: 5,
                  left: 0,

                  filter: "blur(15px)",
                  zIndex: -1,
                }}
                _groupHover={{
                  _after: {
                    filter: "blur(20px)",
                  },
                }}
              >
                <Image
                  rounded={"lg"}
                  height={230}
                  width={282}
                  objectFit={"cover"}
                  src={i}
                />
              </Box>
            );
          })}

          <Stack fontSize={"xl"} pt={10} align={"left"}>
            <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
              {name}
            </Heading>
            <Stack pl={"20px"} direction={"row"} align={"center"}>
              <AiOutlineMail />
              <Text color={"gray.600"}>{email}</Text>
            </Stack>
            <Stack pl={"20px"} direction={"row"} align={"center"}>
              <AiOutlinePhone />
              <Text color={"gray.600"}>{phone}</Text>
            </Stack>{" "}
            <Stack pl={"20px"} direction={"row"} align={"center"}>
              <ImEarth />
              <Text color={"gray.600"}>{website}</Text>
            </Stack>
          </Stack>

          <Flex mt={"20px"} gap={"20px"} alignItems="center" ml={"10px"}>
            <Button
              border={"none"}
              bg="none"
              padding="20px"
              fontSize={"30px"}
              onClick={handleLike}
            >
              {like ? (
                <AiOutlineHeart style={{ color: " red", fontSize: "30px" }} />
              ) : (
                <BsFillHeartFill style={{ color: "red", fontSize: "30px" }} />
              )}
            </Button>

            <Button
              border={"none"}
              padding="20px"
              fontSize={"30px"}
              bg="none"
              // onClick={() => handleEdit(_id)}
              onClick={onOpen}
            >
              <AiOutlineEdit />
            </Button>
            <Button
              border={"none"}
              padding="20px"
              fontSize={"30px"}
              bg="none"
              onClick={() => handleDelete(_id)}
            >
              <AiFillDelete />
            </Button>
          </Flex>
        </Box>
      </Center>

      {/*------------------------- Modal -------------------- */}

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit User</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input ref={initialRef} placeholder="Name" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input placeholder="email" />
                      </FormControl>
                      
            <FormControl mt={4}>
              <FormLabel>phone</FormLabel>
              <Input placeholder="phone" />
                      </FormControl>
                      
            <FormControl mt={4}>
              <FormLabel>website</FormLabel>
              <Input placeholder="website" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
