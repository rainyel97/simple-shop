import styled from "styled-components";
import detailImg0 from "../assets/itemImgs/itemId0Detail.jpg";
import detailImg1 from "../assets/itemImgs/itemId1Detail.jpg";
import detailImg2 from "../assets/itemImgs/itemId2Detail.jpg";
import detailImg3_4 from "../assets/itemImgs/itemId3_4Detail.jpg";

const DetailContainer = styled.div`
  display: flex;
  justify-content: center;
`;

type Itab = {
  tab: number;
  id: any;
};

const detailImg: string[] = [
  detailImg0,
  detailImg1,
  detailImg2,
  detailImg3_4,
  detailImg3_4,
];

export default function DetailTab(props: Itab) {
  return [
    <DetailContainer>
      <img src={detailImg[props.id]} alt="detailImg" />
    </DetailContainer>,
    <div>detail1</div>,
    <div>detail2</div>,
  ][props.tab];
}
