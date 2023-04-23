import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

function UserEditModal({ user, isOpen, onClose, onSubmit }) {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [website, setWebsite] = useState(user.website);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ id: user.id, name, email, phone, website });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit User</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <label htmlFor="phone">Phone:</label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
            <label htmlFor="website">Website:</label>
            <input
              id="website"
              type="url"
              value={website}
              onChange={(event) => setWebsite(event.target.value)}
            />
            <button type="submit">Save</button>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default UserEditModal;
