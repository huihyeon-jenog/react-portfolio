import React, { useState } from "react";
import { projectObject } from "../Data";
import {
  ProjectConatiner,
  ProjectWrapper,
  ProjectH1,
  ProjectItems,
  ProjectItem,
  ProjectImage,
  ProjectTitle,
  ProjectSkill,
} from "./ProjdectsElements";
import Modal from "./Modal";
const ProjectSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalProject, setModalProject] = useState(projectObject);

  const handleShow = (id) => {
    const newData = projectObject.filter((item) => item.id === id);
    setModalProject(newData);
    setShowModal(true);
  };
  const handleClose = () => setShowModal(false);
  return (
    <ProjectConatiner id="project">
      <ProjectWrapper>
        <ProjectH1>
          <h1>PROJECT</h1>
        </ProjectH1>
        <ProjectItems>
          {projectObject.map((item) => {
            const { projectTitle, skills, projectImg, id } = item;
            return (
              <ProjectItem key={id} onClick={() => handleShow(id)}>
                <ProjectImage src={projectImg} />
                <ProjectTitle>{projectTitle}</ProjectTitle>
                <ProjectSkill>{skills}</ProjectSkill>
              </ProjectItem>
            );
          })}
        </ProjectItems>
      </ProjectWrapper>
      {showModal ? (
        <Modal handleClose={handleClose} data={modalProject} />
      ) : null}
    </ProjectConatiner>
  );
};

export default ProjectSection;
