import styled from "styled-components";
import Header from "../components/Header";
import DetailTab from "../components/DetailTab";
import Button from "react-bootstrap/Button";
import { Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { addCart } from "../app/store";
import { useDispatch } from "react-redux";
const ImgContainer = styled.div`
  display: flex;
  padding: 30px;
  min-width: 400px;
  justify-content: center;
`;

const Btn = styled(Button)`
  margin-right: 10px;
`;

const ArrowUpBtn = styled(Button)`
  position: fixed;
  bottom: 30px;
  right: 30px;
`;

export default function Detail(props: any) {
  const { id } = useParams() as { id: string }; //react-router v6부터 제네릭 지원x, 해당 방법 사용
  let [tab, setTab] = useState<number>(0);
  const dispatch = useDispatch();
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
          <div className="col-md-8">
            <h4 className="pt-5">{props.data[id].itemName}</h4>
            <p>{props.data[id].discription}</p>
            <p>￦{props.data[id].price.toLocaleString()}</p>
            <Btn
              variant="outline-primary"
              onClick={() => alert("Now Preparing")}
            >
              Purchase
            </Btn>
            <Btn
              variant="outline-warning"
              onClick={() => {
                if (window.confirm("Are you sure you want to add Cart?"))
                  dispatch(
                    addCart({
                      id: props.data[id].itemId,
                      name: props.data[id].itemName,
                      quantity: 1,
                    })
                  );
                alert("Success!");
              }}
            >
              Add Cart
            </Btn>
          </div>
        </div>
        <Nav justify variant="tabs" defaultActiveKey="link-0">
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setTab(0);
              }}
              eventKey="link-0"
            >
              Detail1
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setTab(1);
              }}
              eventKey="link-1"
            >
              Detail2
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setTab(2);
              }}
              eventKey="link-2"
            >
              Detail3
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <DetailTab tab={tab} id={id} />
        <ArrowUpBtn
          variant="dark"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Go Top
        </ArrowUpBtn>
      </div>
    </>
  );
}
