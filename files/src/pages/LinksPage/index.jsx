import React from "react";
import { AboutusGuideTag } from "../../Component";
import { useState } from "react";
import { Modal } from "antd";
import { useEffect } from "react";
import AutoForm from "../../ReUseAbleComponent/AutoForm";
import { useLocation } from "react-router-dom";

export default function LinkPage(props) {
    const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const timeout2 = setTimeout(() => {
      // Code to be executed after 10 seconds
      console.log("After 10 seconds");
      showModal();
    }, 10000);

    return () => {
      clearTimeout(timeout2);
    };
  }, []);
  return (
    <div>
      <AboutusGuideTag title={location?.state?.data?.title} />
      <Modal
        style={{ position: "relative", top: "20px" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <AutoForm />
      </Modal>
    </div>
  );
}
