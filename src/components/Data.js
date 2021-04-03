import { FaHtml5, FaReact, FaPython, FaBootstrap } from "react-icons/fa";
import {
  DiCss3,
  DiJavascript1,
  DiJqueryLogo,
  DiNodejs,
  DiGithubFull,
  DiPhotoshop,
  DiIllustrator,
} from "react-icons/di";

export const aboutObj = {
  id: "about",
  topLine: "Passion Sincerity Tenacity",
  headLine: "신입 프론트엔드 개발자 정희현입니다.",
  description:
    "열정있는 개발자, 성실한 개발자, 끈기 있는 개발자 끊임 없이 학습하며 트렌드에 뒤쳐지지 않는 웹 개발자가 되겠습니다.",
  img: require("../images/정희현.jpg"),
  grade: "원광대학교 시작정보디자인학과",
  contact: "010-2755-4413",
  alt: "프로필사진",
};

export const skill = [
  {
    id: 1,
    skill: <FaHtml5 />,
    percent: 90,
  },
  {
    id: 2,
    skill: <DiCss3 />,
    percent: 90,
  },
  {
    id: 3,
    skill: <DiJavascript1 />,
    percent: 80,
  },
  {
    id: 4,
    skill: <DiJqueryLogo />,
    percent: 70,
  },
  {
    id: 5,
    skill: <FaReact />,
    percent: 65,
  },
  {
    id: 6,
    skill: <DiNodejs />,
    percent: 50,
  },
];

export const projectObj = {
  id: "project",
  projectOneTitle: "My Website",
  projectOneImg: require("../images/projectOne.PNG"),
  projectOneAlt: "포트폴리오 프로젝트",
  projectTwoTitle: "Task Tracker",
  projectTwoImg: require("../images/projectTwo.PNG"),
  projectTwoAlt: "TASK TRACKER 프로젝트",
  projectThreeTitle: "전북은행 클론코딩",
  projectThreeImg: require("../images/projectThree.png"),
  projectThreeAlt: "전북은행 클론코딩 프로젝트",
  projectFourTitle: "ToDoList",
  projectFourImg: require("../images/projectFour.png"),
  projectFourAlt: "TODOLIST 프로젝트",
};

export const projectObject = [
  {
    id: "p1",
    projectTitle: "My Website",
    skills: "React",
    projectImg: require("../images/projectOne.PNG"),
    descript: "React로 만든 포트폴리용 개인 홈페이지",
    url: "",
  },
  {
    id: "p2",
    projectTitle: "Task Tracker",
    skills: "React",
    projectImg: require("../images/projectTwo.PNG"),
    descript: "React로 Task Tracker 기본적인 CRUD 기능만을 가진 프로젝트",
    url: "https://task-tracker-my.netlify.app/",
  },
  {
    id: "p3",
    projectTitle: "전북은행 클론코딩",
    skills: "html css JavaScript",
    projectImg: require("../images/projectThree.png"),
    descript: "html, css, javascript로 전북은행 메인 홈페이지 클론 코딩 ",
    url: "https://huihyeon-jenog.github.io/-.io/",
  },
  {
    id: "p4",
    projectTitle: "ToDoList",
    skills: "html css JavaScript",
    projectImg: require("../images/projectFour.png"),
    descript:
      "JavsScript로 만든 ToDoList, LocalStroge에 저장하여 새로고침후에도 데이터 유지",
    url: "https://huihyeon-jenog.github.io/ToDoLists.io/",
  },
];
