import Header from "../components/Header";
import { Table, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { CartType } from "../App";
import { RootState } from "..";
import { useDispatch } from "react-redux";
import { addQuantity, decQuantity, removeCart } from "../app/store";
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
                    if (window.confirm("Are you sure you want to delete it?"))
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
    </>
  );
}
