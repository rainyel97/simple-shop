import Header from "../components/Header";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { CartType } from "../App";
import { RootState } from "..";
import { useDispatch } from "react-redux";
import { addQuantity, decQuantity } from "../app/store";
export default function Cart() {
  const state = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  console.log(state);
  return (
    <>
      <Header />
      <Table striped>
        <thead>
          <tr>
            <th>Item ID</th>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((data: CartType, i: number) => (
            <tr key={i}>
              <td>{state.cart[i].id}</td>
              <td>{state.cart[i].name}</td>
              <td>{state.cart[i].quantity}</td>
              <td>
                <button onClick={() => dispatch(addQuantity(state.cart[i].id))}>
                  +
                </button>
                <button onClick={() => dispatch(decQuantity(state.cart[i].id))}>
                  -
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
