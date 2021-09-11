import React, {Component, useState} from 'react';
import styled from "styled-components";

import Header from "../components/common/header";
import Post from "../components/post/post";

import planet1 from "../images/main/main_planet1.png";
import Default from "../components/main/default";
import Planet from "../components/main/planet";
import planet4 from "../images/common/planets/planet2_1.svg";
import planet5 from "../images/common/planets/planet3_0.svg";
import planet3 from "../images/common/planets/planet1_5.svg";
import planet6 from "../images/common/planets/planet4_3.svg";
import planet2 from "../images/common/planets/planet0_4.svg";
import Box from "../components/menu/box";

const Posts = (props) => {
    const planets = [{'imgSrc': planet4, 'name': "화가 치밀어 오른다", 'count': 32},
        {'imgSrc': planet1, 'name': "오늘은 조금 우울해", 'count': 20},
        {'imgSrc': planet5, 'name': "화가 치밀어 오른다", 'count': 32},
        {'imgSrc': planet3, 'name': "오늘은 조금 우울해", 'count': 32},
        {'imgSrc': planet6, 'name': "오늘은 조금 우울해", 'count': 18},
        {'imgSrc': planet2, 'name': "화가 치밀어 오른다", 'count': 18}
    ];
    // const planets = [];

    const [contents, setContents] = useState([
        {date: "07/25", title: "ㅋㅋㅋ대박이다 아님?", content:"진짜 우리 교수님은 레전드다. ㅋㅋㅋㅋㅋㅋ 오늘 무슨일이 있었냐하면..."},
        {date: "07/26", title: "ㅋㅋㅋ대박이다 아님?", content:"진짜 우리 교수님은 레전드다. ㅋㅋㅋㅋㅋㅋ 오늘 무슨일이 있었냐하면..."},
        {date: "07/27", title: "ㅋㅋㅋ대박이다 아님?", content:"진짜 우리 교수님은 레전드다. ㅋㅋㅋㅋㅋㅋ 오늘 무슨일이 있었냐하면..."},
        {date: "07/28", title: "ㅋㅋㅋ대박이다 아님?", content:"진짜 우리 교수님은 레전드다. ㅋㅋㅋㅋㅋㅋ 오늘 무슨일이 있었냐하면..."},
        {date: "07/29", title: "ㅋㅋㅋ대박이다 아님?", content:"진짜 우리 교수님은 레전드다. ㅋㅋㅋㅋㅋㅋ 오늘 무슨일이 있었냐하면..."},
        {date: "07/30", title: "ㅋㅋㅋ대박이다 아님?", content:"진짜 우리 교수님은 레전드다. ㅋㅋㅋㅋㅋㅋ 오늘 무슨일이 있었냐하면..."},
        {date: "07/31", title: "ㅋㅋㅋ대박이다 아님?", content:"진짜 우리 교수님은 레전드다. ㅋㅋㅋㅋㅋㅋ 오늘 무슨일이 있었냐하면..."},
        {date: "07/25", title: "ㅋㅋㅋ대박이다 아님?", content:"진짜 우리 교수님은 레전드다. ㅋㅋㅋㅋㅋㅋ 오늘 무슨일이 있었냐하면..."},
        {date: "07/25", title: "ㅋㅋㅋ대박이다 아님?", content:"진짜 우리 교수님은 레전드다. ㅋㅋㅋㅋㅋㅋ 오늘 무슨일이 있었냐하면..."},

    ]);
    const [deleteModal, setDeleteModal] = useState(false);
    const [isSelected, setIsselected] = useState(Array(contents.length).fill(false));

    const clickDelete = (index) => {
        setDeleteModal(true);
        console.log(index);
    }

    return (
        <BackGround>
            <Header state={"Back"} title={props.location.state.planetName + " 행성"}/>
            <WrapPost>
                {contents.map((test, index)=> {
                    return (
                        <Post
                            planet={props.location.state.planetSrc}
                            date={test.date}
                            title={test.title}
                            content={test.content}

                            onClick = {() => clickDelete(index)}
                        />
                    )
                })};
                {/*<Post*/}
                {/*    date={"25. FRIDAY"}*/}
                {/*    planet={props.location.state.planetSrc}*/}
                {/*    title={"ㅋㅋㅋ대박이다 아님?"}*/}
                {/*    content={"진짜 우리 교수님은 레전드다. ㅋㅋㅋㅋㅋㅋ 오늘 무슨일이 있" +*/}
                {/*    "었냐하면 말이야 진짜 우리 교수님은 레전드다. ㅋㅋㅋㅋㅋㅋ " +*/}
                {/*    "오늘 무슨일이 있었냐하면 말이야 진짜 우리 교수님은 레전드" +*/}
                {/*    "다. ㅋㅋㅋㅋㅋㅋ 오늘 무슨일이 있었냐하면 말이야 "}*/}
                {/*/>*/}
            </WrapPost>
            {deleteModal === false ?
                <></>
                :
                <WrapModal>
                    <Modal>
                        <Question>기록을 정말로 삭제하시겠어요?</Question>
                        <Line />
                        <ButtonWrap>
                            <CancelButton onClick={() => setDeleteModal(false)}>취소</CancelButton>
                            <DeleteButton onClick={() => console.log(isSelected)}>삭제</DeleteButton>
                        </ButtonWrap>
                    </Modal>
                </WrapModal>
            }
            <Wrap>
                <WrapMain>
                    {planets.length === 0 ?
                        <Default/>     // 행성이 없을 때
                        :
                        <Planet planets={planets}/>  // 행성이 있을 때
                    }
                </WrapMain>
            </Wrap>
        </BackGround>
    )
}

export default Posts;

const WrapModal = styled.div`
   width: 375px;
   height: 812px;
   position: absolute;
   top: 0;
   background: rgba(167, 167, 167, 0.5);
   backdrop-filter: blur(4px);
   //overflow: hidden;
 `;
const Modal = styled.div`
   width: 300px;
   height: 168px;
   position: absolute;
   top: 322px;
   left: 37.5px;

   background: rgba(11, 13, 24, 0.8);
   border-radius: 16px;

   font-family: Spoqa Han Sans Neo;
   font-style: normal;
   font-weight: normal;
   text-align: center;
   letter-spacing: -0.025em;

   color: #FFFFFF;
 `;
const Question = styled.div`
  width: 100%;
  height: 106px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 14px;
  line-height: 18px;
`;
const Line = styled.div`
  width: 100%;
  border: 0.5px solid #555555;
`;
const ButtonWrap = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 12px;
  line-height: 16px;
`;
const CancelButton = styled.div`
  width: 47px;
  height: 32px;
  margin-right: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  border: 1.5px solid #A661FF;
  box-sizing: border-box;
  border-radius: 8px;

  color: #A661FF;
`;
const DeleteButton = styled.div`
  width: 47px;
  height: 32px;
  margin-left: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  background: #A661FF;
  border-radius: 8px;
`;

const BackGround = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: rgba(0, 0, 0, 0.85);
`;
const Wrap = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.5;
  z-index: -5;
  background: black;
  overflow: hidden;
`;
const WrapMain = styled.div`
  display: flex;
  align-items: center;
  backdrop-filter: blur(4px);
  padding-top: 30px;
`;
const WrapPost = styled.div`
  height: 762px;
  overflow-y: scroll;
`;