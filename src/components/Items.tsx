import styled from "styled-components";

interface interItems {
  itemId: number;
  itemName: string;
  itemImg: string;
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
  cursor: pointer;
`;
const ItemImg = styled.img`
  width: 200px;
  height: 200px;
`;
const ItemName = styled.p`
  font-weight: bold;
  margin-top: 5px;
  padding: 5px;
`;
export default function Items(props: any) {
  return (
    <ItemContainer>
      {props.itemData.map((data: interItems, idx: number) => {
        return (
          <Item>
            <ItemImg src={data.itemImg} alt={data.itemName} />
            <ItemName>{data.itemName}</ItemName>
          </Item>
        );
      })}
    </ItemContainer>
  );
}
