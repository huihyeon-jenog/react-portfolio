import { FaHtml5, FaReact, FaVuejs } from "react-icons/fa";
import { DiCss3, DiJavascript1, DiJqueryLogo, DiNodejs } from "react-icons/di";

export const aboutObj = {
    id: "about",
    topLine: "Passion. Sincerity. Tenacity.",
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
    },
    {
        id: 2,
        skill: <DiCss3 />,
    },
    {
        id: 3,
        skill: <DiJavascript1 />,
    },
    {
        id: 4,
        skill: <DiJqueryLogo />,
    },
    {
        id: 5,
        skill: <FaReact />,
    },
    {
        id: 6,
        skill: <FaVuejs />,
    },
    {
        id: 7,
        skill: <DiNodejs />,
    },
];

export const projectObj = {
    id: "project",
    projectOneTitle: "My Website",
    projectOneImg: require("../images/projectOne.PNG"),
    projectOneAlt: "포트폴리오 프로젝트",
    projectTwoTitle: "Vue Board",
    projectTwoImg: require("../images/VueProject.PNG"),
    projectTwoAlt: "Vue 게시판 프로젝트",
    projectThreeTitle: "Task Tracker",
    projectThreeImg: require("../images/projectTwo.PNG"),
    projectThreeAlt: "TASK TRACKER 프로젝트",
    projectFourTitle: "전북은행 클론코딩",
    projectFourImg: require("../images/projectThree.png"),
    projectFourAlt: "전북은행 클론코딩 프로젝트",
    projectFiveTitle: "ToDoList",
    projectFiveImg: require("../images/projectFour.png"),
    projectFiveAlt: "TODOLIST 프로젝트",
};

export const projectObject = [
    {
        id: "p1",
        projectTitle: "My Website",
        skills: "React",
        projectImg: require("../images/projectOne.PNG"),
        descript: "React로 만든 포트폴리용 개인 홈페이지",
        url: "",
        gitUrl: "https://github.com/huihyeon-jenog/react-portfolio",
    },
    {
        id: "p2",
        projectTitle: "Vue Board Project",
        skills: "Vue Firebase Tailwindcss Webpack",
        projectImg: require("../images/VueProject.PNG"),
        descript:
            "Vue + firebase + Tailwindcss + Webpack으로 만든 게시판 사이트입니다.",
        url: "https://vue-project1-4f68c.web.app/",
        gitUrl: "https://github.com/huihyeon-jenog/vue-board",
    },
    {
        id: "p3",
        projectTitle: "Task Tracker",
        skills: "React",
        projectImg: require("../images/projectTwo.PNG"),
        descript: "React로 Task Tracker 기본적인 CRUD 기능만을 가진 프로젝트",
        url: "https://task-tracker-my.netlify.app/",
        gitUrl: "https://github.com/huihyeon-jenog/React-Task-Tracker",
    },
    {
        id: "p4",
        projectTitle: "전북은행 클론코딩",
        skills: "html css JavaScript",
        projectImg: require("../images/projectThree.png"),
        descript: "html, css, javascript로 전북은행 메인 홈페이지 클론 코딩 ",
        url: "https://huihyeon-jenog.github.io/-.io/",
        gitUrl: "https://github.com/huihyeon-jenog/-.io",
    },
    {
        id: "p5",
        projectTitle: "ToDoList",
        skills: "html css JavaScript",
        projectImg: require("../images/projectFour.png"),
        descript:
            "JavsScript로 만든 ToDoList, LocalStroge에 저장하여 새로고침후에도 데이터 유지",
        url: "https://huihyeon-jenog.github.io/ToDoLists.io/",
        gitUrl: "https://github.com/huihyeon-jenog/ToDoLists.io",
    },
];

export const blogObject = [
    {
        blogImg: require("../images/blog1.png"),
        blogTitle: "CSS-Grid",
        url: "https://blog.naver.com/wjdgmlgus5/222283164459",
    },
    {
        blogImg: require("../images/blog2.png"),
        blogTitle: "React img require - object Module",
        url: "https://blog.naver.com/wjdgmlgus5/222282180319",
    },
    {
        blogImg: require("../images/blog3.png"),
        blogTitle: "FLASK_TODOAPP",
        url: "https://blog.naver.com/wjdgmlgus5/222251160155",
    },
    {
        blogImg: require("../images/blog4.png"),
        blogTitle: "국내 코로나 19 발생 현황 알림 봇",
        url: "https://blog.naver.com/wjdgmlgus5/222246219884",
    },
];
