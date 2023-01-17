import styled from "styled-components";
import Header from "../components/Header";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import { constants } from "buffer";

const Btn = styled(Button)`
  margin-right: 10px;
`;
export default function Detail(props: any) {
  const { id } = useParams() as { id: string };
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src={props.data[id].itemImg}
              alt={props.data[id].itemName}
              width="70%"
            />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{props.data[id].itemName}</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              quae iste ad. Explicabo ducimus, maxime debitis eius provident
              optio facere vero, cupiditate earum exercitationem quasi magni
              iusto excepturi dignissimos minima!
            </p>
            <p>￦{props.data[id].price.toLocaleString()}</p>
            <Btn variant="outline-primary">Purchase</Btn>
            <Btn variant="outline-warning">Add Cart</Btn>
          </div>
        </div>
      </div>
    </>
  );
}
