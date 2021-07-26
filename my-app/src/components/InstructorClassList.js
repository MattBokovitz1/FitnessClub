import React, { useState, useEffect, useContext } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
import { ClassListStyle } from "../styles/StyledComponents";
import ClassCard from "./ClassCard";
import { ClassContext } from "../App";
import { Modal, Button } from "antd";
import Navbar from "./Navbar";
import AddClass from "./AddClass";

export default function InstructorClassList() {
  const [instructorClasses, setInstructorClasses] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { inputs } = useContext(ClassContext);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    history.push("/");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const history = useHistory();

  const getClassList = () => {
    axiosWithAuth()
      .get("/api/auth/users/classes")
      .then((res) => {
        const x = res.data.data.filter((cls) => cls.user_id === inputs.user_id);
        console.log(x);
        setInstructorClasses(x);
      }, [])
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getClassList();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
        <>
          <Button
            onClick={showModal}
            type="primary"
            style={{ margin: 50, width: 175, height: 50 }}
          >
            Make a new class
          </Button>

          <Modal
            title="Add Class"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[null]}
          >
            <AddClass />
          </Modal>
        </>
        {instructorClasses.map((cls) => {
          return (
            <ClassListStyle key={cls.id}>
              <ClassCard
                className="classList"
                setInstructorClasses={setInstructorClasses}
                instructorClasses={instructorClasses}
                cls={cls}
              />
            </ClassListStyle>
          );
        })}
      </div>
    </div>
  );
}
