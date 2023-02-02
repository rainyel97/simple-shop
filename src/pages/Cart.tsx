import Header from "../components/Header";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { CartType } from "../App";
import { RootState } from "..";
import { useDispatch } from "react-redux";
import { addQuantity, decQuantity, removeCart } from "../app/store";
import cartBackgound from "../assets/cartBackground.jpg";

const CartBackground = styled.img`
  width: 100%;
`;

const EmptyPhrase = styled.div`
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: center;
`;

const CartFooter = styled.div`
  display: flex;
  flex-direction: row;
  position: sticky;
  bottom: 0;
  z-index: 100;
  width: 100%;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  padding: 10px 40px;
  background: white;
  border-top: 1px solid #444;
`;

export default function Cart() {
  const state = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState<number>(0);
  useEffect(() => {
    let pri = 0;
    for (let i = 0; i < state.cart.length; i++) {
      console.log(state.cart[i].quantity);
      console.log(state.cart[i].price);
      pri += state.cart[i].quantity * state.cart[i].price;
    }
    setTotalPrice(pri);
  }, [state.cart]);
  return (
    <>
      <Header />
      <CartBackground src={cartBackgound} />
      {state.cart.length === 0 ? (
        <EmptyPhrase>
          <h3>Cart is empty. Add your Item in Detail Page.</h3>
        </EmptyPhrase>
      ) : (
        <>
          <Table striped>
            <thead>
              <tr>
                <th>Item ID</th>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {state.cart.map((data: CartType, i: number) => (
                <tr key={i}>
                  <td>{state.cart[i].id}</td>
                  <td>{state.cart[i].name}</td>
                  <td>
                    {state.cart[i].quantity}

                    <Button
                      size="sm"
                      variant="light"
                      onClick={() => dispatch(addQuantity(state.cart[i].id))}
                    >
                      +
                    </Button>
                    <Button
                      size="sm"
                      variant="light"
                      onClick={() => dispatch(decQuantity(state.cart[i].id))}
                    >
                      -
                    </Button>
                  </td>
                  <td>
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => {
                        if (
                          window.confirm("Are you sure you want to delete it?")
                        )
                          dispatch(removeCart(state.cart[i].id));
                      }}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <CartFooter>
            <div>
              <h2>Total Price</h2>
            </div>
            <div>
              <h2>￦{totalPrice.toLocaleString()}</h2>
            </div>
          </CartFooter>
        </>
      )}
    </>
  );
}
