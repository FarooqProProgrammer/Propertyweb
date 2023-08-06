import React, { useState } from 'react'
import { Modal, Button } from "react-bootstrap";

export default function Pop({title, content,isOpen}) {
    const [isModalOpen, setIsModalOpen] = useState(isOpen);
    
      const handleCloseModal = () => {
        setIsModalOpen(false);
      };

  return (
    <div>
      {isModalOpen && (
        <Modal show={isModalOpen} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{content}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  )
}
