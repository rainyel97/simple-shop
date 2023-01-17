import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface interfaceItems {
  itemId: number;
  itemName: string;
  itemImg: string;
  discription: string;
  price: number;
  inCart: boolean;
}

const ItemContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  @media screen and (max-width: 768px) {
    height: auto;
    flex-direction: column;
    justify-content: flex-start;
  }
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 270px;
  margin: 40px;
  border: 1px solid #bdc3c7;
  border-radius: 8px;
  text-align: center;
  color: black;
  text-decoration: none;
  cursor: pointer;
  transition: 0.25s ease-in;
  :hover {
    scale: 1.05;
    color: black;
    box-shadow: 0px 0px 10px #444;
  }
`;
const ItemImg = styled.img`
  width: 200px;
  height: 200px;
`;
const ItemName = styled.h4`
  font-weight: bold;
  font-size: small;
`;
const ItemPrice = styled.h6`
  font-weight: bold;
`;
export default function Items(props: any) {
  const navigate = useNavigate();
  return (
    <ItemContainer>
      {props.itemData.map((data: interfaceItems, idx: number) => {
        return (
          <Item
            key={idx}
            onClick={() => {
              navigate(`/Detail/${idx}`);
            }}
          >
            <ItemImg src={data.itemImg} alt={data.itemName} />
            <ItemName>{data.itemName}</ItemName>
            <ItemPrice>￦{data.price.toLocaleString()}</ItemPrice>
          </Item>
        );
      })}
    </ItemContainer>
  );
}
