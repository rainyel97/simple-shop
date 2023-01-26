import styled from "styled-components";
import Header from "../components/Header";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";

const ImgContainer = styled.div`
  display: flex;
  padding: 30px;
  min-width: 400px;
  justify-content: center;
`;

const Btn = styled(Button)`
  margin-right: 10px;
`;

export default function Detail(props: any) {
  const { id } = useParams() as { id: string }; //react-router v6부터 제네릭 지원x, 해당 방법 사용
  return (
    <>
      <Header />
      <div className="container">
        <div className="row justify-content-center">
          <ImgContainer className="col-md-4">
            <img
              src={props.data[id].itemImg}
              alt={props.data[id].itemName}
              width="80%"
            />
          </ImgContainer>
          <div className="col-md-6">
            <h4 className="pt-5">{props.data[id].itemName}</h4>
            <p>{props.data[id].discription}</p>
            <p>￦{props.data[id].price.toLocaleString()}</p>
            <Btn variant="outline-primary">Purchase</Btn>
            <Btn variant="outline-warning">Add Cart</Btn>
          </div>
        </div>
      </div>
    </>
  );
}
