import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';

import HashTag from "../common/hashtag"

import edit from "../../images/post/edit.png";
import deletion from "../../images/post/delete.png";
import share from "../../images/post/share.png";

const Post = (props) => {
    const history = useHistory();

    const [modal, setModal] = useState(false);

    const imageCSS = {
        height: '124px',
        width: '188px',
        objectFit: 'cover',
    }

    return(
        <BackGround>
            <Wrap>
                <Date>{props.date}</Date>
                <Planet>
                    <img src={props.planet}/>
                </Planet>
                <Title>{props.title}</Title>
                <Line1 />
                <Body>{props.content}</Body>
                <Line2 />
                <Tag>
                    {Object.keys(props.hashTag).map(key => {
                        return (
                            <HashTag hashtag={props.hashTag[key].name}/>
                        )
                    })}
                </Tag>
                <Buttons>
                    <Edit onClick={() => setModal(true)}/>
                    <Delete onClick={() => props.onClick()}/>
                    <Share />
                </Buttons>
                {
                    props.image.length !== 0 ?
                        <Imagespace>
                            <img style={imageCSS} src= {props.image[0].src} />
                        </Imagespace>
                        :
                        <></>
                }
            </Wrap>
            {modal?
                <WrapModal>
                    <Modal>
                        <p>💜 접근 불가 페이지입니다 💜</p>
                    </Modal>
                </WrapModal>
            :
                <></>
            }
        </BackGround>
    )
}

export default Post;

const BackGround = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
   position: absolute;
   top: 380px;
   left: 37.5px;

   background: rgba(11, 13, 24, 0.8);
   border-radius: 16px;

   font-family: Spoqa Han Sans Neo;
   font-style: normal;
   font-weight: normal;
   font-size: 14px;
   line-height: 18px;
   text-align: center;
   letter-spacing: -0.025em;

   color: #FFFFFF;
 `;

const Wrap = styled.div`
  width: 322px;
  height: 576px;
  margin: 8px;
  background: rgba(255, 255, 255, 0.12);
  border-radius: 10px;
  position: relative;
`;

const Date = styled.div`
  position: absolute;
  width: 290px;
  height: 23.97px;
  left: 18px;
  top: 21px;
  color: rgba(255, 255, 255, 0.6);
`;

const Planet = styled.div`
  position: absolute;
  left: 15px;
  top: 60.94px;
  > img {
    width: 99.91px;
  }
`;

const Title = styled.div`
  position: absolute;
  width: 286px;
  height: 19.97px;
  left: calc(50% - 286px/2);
  top: calc(50% - 19.97px/2 - 112.5px);
  
  font-family: Spoqa Han Sans Neo;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.025em;
  color: #E2E2E2;
`;

const Line1 = styled.div`
  position: absolute;
  width: 288px;
  height: 0px;
  left: 19px;
  top: 193.47px;
  border: 1px solid #535353;
`;

const Body = styled.div`
  position: absolute;
  width: 290px;
  height: 79.89px;
  left: calc(50% - 290px/2 + 2px);
  top: calc(50% - 79.89px/2 - 46.59px);

  font-family: Spoqa Han Sans Neo;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.025em;
  color: #ABABAB;
`;

const Line2 = styled.div`
  position: absolute;
  width: 288px;
  height: 0px;
  left: 19px;
  top: 481.07px;
  border: 1px solid #535353;
`;

const Tag = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 0px;

  position: absolute;
  width: 289px;
  height: 18px;
  left: 18px;
  top: 497.05px;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: absolute;
  width: 104px;
  height: 24px;
  left: 22px;
  top: 531px;
`;

const Edit = styled.div`
  position: absolute;
  width: 18px;
  height: 18px;
  left: 0px;
  top: 0px;

  background: url(${edit}) no-repeat;
  background-size: contain;
`;

const Delete = styled.div`
  position: absolute;
  width: 18px;
  height: 18px;
  left: 40px;
  top: 0px;

  background: url(${deletion}) no-repeat;
  background-size: contain;
`;

const Share = styled.div`
  position: absolute;
  width: 18px;
  height: 18px;
  left: 80px;
  top: 0px;

  background: url(${share}) no-repeat;
  background-size: contain;
`;

const Imagespace = styled.image`
  height : 209px;
  position: absolute;
  width: 18px;
  left: 20px;
  top: 350px;
`