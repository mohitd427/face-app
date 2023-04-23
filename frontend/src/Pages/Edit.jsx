import { Button,FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';


function EditUser({ match }) {
     const { isOpen, onOpen, onClose } = useDisclosure();

    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

  const [user, setUser] = useState({
    
    name: "",
    email: "",
    phone: "",
    website: "",
    
  });
    
    
    const params = useSearchParams();

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(``);
      const data = await res.json();
      setUser(data);
    };

    fetchUser();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`/users/${user._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await res.json();
      window.location.href = `/users/${data.id}`;
    } catch (error) {
      console.error(error);
    }
  };

   
    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>
        

        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>First name</FormLabel>
                <Input ref={initialRef} placeholder="First name" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Last name</FormLabel>
                <Input placeholder="Last name" />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
}


export default EditUser;

