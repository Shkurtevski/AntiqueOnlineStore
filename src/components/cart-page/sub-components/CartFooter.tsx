interface CartFooterProps {
    total: number;

}

const CartFooter = ({ total}:CartFooterProps) => {

  
    return (
      <div className="order-list-footer">
        <span>Subtotal</span>
        <span>&euro;&nbsp;{total}</span>
      </div>
    );
  };
  
  export default CartFooter;
  