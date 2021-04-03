import React, { useState } from "react";
import Video from "../../viedos/pexels-pavel-danilyuk-5495781.mp4";
import {
  MainContainer,
  MainBg,
  VideoBg,
  MainContent,
  MainH1,
  MainP,
  MainArrowWrapper,
  ArrowExpand,
  ArrowDown,
  Arrow,
} from "./MainElements";
const MainSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <MainContainer id="top">
      <MainBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4"></VideoBg>
      </MainBg>
      <MainContent>
        <MainH1>신입 프론트엔드 개발자 정희현입니다.</MainH1>
        <MainP>
          매일 매일 변화하는 웹세상에서 뒤쳐지지 않는 프론트엔드 개발자가
          되겠습니다.
        </MainP>
      </MainContent>
      <MainArrowWrapper>
        <Arrow
          to="about"
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          smooth={true}
          duration={500}
        >
          {hover ? <ArrowDown /> : <ArrowExpand />}
        </Arrow>
      </MainArrowWrapper>
    </MainContainer>
  );
};

export default MainSection;
