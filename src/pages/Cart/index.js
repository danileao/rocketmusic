import React from "react";
import {
  MdAddCircleOutline,
  MdRemoveCircleOutline,
  MdDelete,
} from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";

import * as CartActions from "../../store/modules/cart/actions";

import { formatPrice } from "../../util/format";
import { Container, ProductTable, Total, EmptyCart } from "./styles";

export default function Cart() {
  const dispatch = useDispatch();
  const products = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((total, product) => {
        return total + product.price * product.amount;
      }, 0)
    )
  );

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <>
      {products.length > 0 ? (
        <Container>
          <ProductTable>
            <thead>
              <tr>
                <th></th>
                <th>PRODUTO</th>
                <th>QTD</th>
                <th>SUBTOTAL</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id}>
                  <td>
                    <img src={product.image} alt="" />
                  </td>
                  <td>
                    <strong>{product.title}</strong>
                    <span>{product.price}</span>
                  </td>
                  <td>
                    <div>
                      <button>
                        <MdRemoveCircleOutline
                          size={20}
                          color="#7159c1"
                          onClick={() => decrement(product)}
                        />
                      </button>
                      <input type="number" value={product.amount} readOnly />
                      <button>
                        <MdAddCircleOutline
                          size={20}
                          color="#7159c1"
                          onClick={() => increment(product)}
                        />
                      </button>
                    </div>
                  </td>
                  <td>
                    <strong>{product.subtotal}</strong>
                  </td>
                  <td>
                    <button type="button">
                      <MdDelete
                        size={20}
                        color="#7159c1"
                        onClick={() =>
                          dispatch(CartActions.removeFromCart(product.id))
                        }
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </ProductTable>

          <footer>
            <button
              type="button"
              onClick={() => dispatch(CartActions.finishRequest())}
            >
              Finalizar Pedido
            </button>

            <Total>
              <span>TOTAL</span>
              <strong> {total}</strong>
            </Total>
          </footer>
        </Container>
      ) : (
        <EmptyCart>Carrinho sem produtos!</EmptyCart>
      )}
    </>
  );
}
