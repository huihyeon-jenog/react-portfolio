import React, { useState } from "react";
import { projectObject } from "../Data";
import {
    ProjectConatiner,
    ProjectWrapper,
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
        document.body.style.overflow = "hidden";
        document.getElementById("project").scrollIntoView();
        setModalProject(newData);
        setShowModal(true);
    };
    const handleClose = () => {
        document.body.style.overflow = "scroll";
        setShowModal(false);
    };

    return (
        <ProjectConatiner id="project">
            <ProjectWrapper>
                <h2 className="sectionTitle">PROJECT</h2>
                <ProjectItems>
                    {projectObject.map((item) => {
                        const { projectTitle, skills, projectImg, id } = item;
                        return (
                            <ProjectItem
                                key={id}
                                onClick={() => handleShow(id)}
                            >
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
