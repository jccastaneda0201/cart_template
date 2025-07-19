// CartContainer.jsx
import CartItem from './CartItem';
import { useGlobalContext } from './context';
import { getTotals } from './utils';

const CartContainer = () => {
  const { cart, clearCart } = useGlobalContext();
  // 1) saca totals de getTotals
  const { totalAmount, totalCost } = getTotals(cart);
  // 2) formatea a euros
  const formattedCost = totalCost.toLocaleString('es-ES', {
    style: 'currency',
    currency: 'EUR',
  });

  const cartArray = Array.from(cart.entries());

  if (cartArray.length === 0) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartArray.map(([id, item]) => (
          <CartItem key={id} {...item} />
        ))}
      </div>
      <footer>
        <hr />
        <div>
          <h5 className="cart-total">
            total <span>{formattedCost}</span>
          </h5>
        </div>
        <button className="btn btn-hipster" onClick={clearCart}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
