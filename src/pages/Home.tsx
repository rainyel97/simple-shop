import styled from "styled-components";
import Header from "../components/Header";
import Items from "../components/Items";
import BackImg from "../assets/background.jpg";

const HomeBg = styled.div`
  height: 450px;
  background-image: url(${BackImg});
  background-size: cover;
  background-position: center;
`;
const HomeTitle = styled.p`
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
      <HomeBg />
      <HomeTitle>Now Selling</HomeTitle>
      <Items itemData={props.data} />
    </>
  );
}
