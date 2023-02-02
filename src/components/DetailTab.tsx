import styled from "styled-components";
import detailImg0 from "../assets/itemImgs/itemId0Detail.jpeg";
import detailImg1 from "../assets/itemImgs/itemId1Detail.jpeg";
import detailImg2 from "../assets/itemImgs/itemId2Detail.jpeg";
import detailImg3_4 from "../assets/itemImgs/itemId3_4Detail.jpg";
import specImg0 from "../assets/itemImgs/itemId0Spec.jpeg";
import specImg1 from "../assets/itemImgs/itemId1Spec.jpeg";
import specImg2 from "../assets/itemImgs/itemId2Spec.jpeg";
import specImg3 from "../assets/itemImgs/itemId3Spec.jpeg";
import specImg4 from "../assets/itemImgs/itemId4Spec.jpeg";
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

const specImg: string[] = [specImg0, specImg1, specImg2, specImg3, specImg4];

export default function DetailTab(props: Itab) {
  return [
    <DetailContainer>
      <img src={detailImg[props.id]} alt="detailImg" width="100%" />
    </DetailContainer>,
    <DetailContainer>
      <img src={specImg[props.id]} alt="specImg" width="100%" />
    </DetailContainer>,
  ][props.tab];
}
