import styled from "styled-components";
import Header from "../components/Header";
import Items from "../components/Items";
import HomeCarousel from "../components/HomeCarousel";

const HomeTitle = styled.div`
  margin-top: 15px;
  padding: 5px;
  text-align: center;
  font-weight: bold;
  font-size: large;
`;

export default function Home(props: any) {
  return (
    <>
      <Header />
      <HomeCarousel />
      <HomeTitle>Now Selling</HomeTitle>
      <Items itemData={props.data} />
    </>
  );
}
