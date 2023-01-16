import styled from "styled-components";
import Header from "../components/Header";
import BackImg from "../assets/background.jpg";
const HomeBg = styled.div`
  height: 450px;
  background-image: url(${BackImg});
  background-size: cover;
  background-position: center;
`;

export default function Home() {
  return (
    <>
      <Header />
      <HomeBg />
    </>
  );
}
