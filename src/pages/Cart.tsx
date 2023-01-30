import Header from "../components/Header";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

interface InterfaceCart {
  idx: number;
  name: string;
  price: number;
  quantity: number;
}

export default function Cart() {
  const state: any = useSelector((state) => state);
  return (
    <>
      <Header />
      <Table striped>
        <thead>
          <tr>
            <th>Item Number</th>
            <th>Item Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((data: InterfaceCart, i: number) => (
            <tr key={i}>
              <td>{state.cart[i].idx}</td>
              <td>{state.cart[i].name}</td>
              <td>{state.cart[i].price.toLocaleString()}</td>
              <td>{state.cart[i].quantity}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
