const BagSummary = ({ finalItems }) => {
  // const bagSummary = {
  //   totalItem: 3,
  //   totalMRP: 4300,
  //   totalDiscount: 290,
  //   finalPayment: 3900,
  // }
  const CONVENIENCE_FEE = 99;
  let original_p = 0,
    current_p = 0;

  finalItems.map((item) => {
    original_p += item.original_price;
    current_p += item.current_price;
  });

  let totalMRP = original_p;
  let totalDiscount = original_p - current_p;
  let finalPayment = current_p + CONVENIENCE_FEE;

  return (
    <div className='bag-summary'>
      <div className='bag-details-container'>
        <div className='price-header'>
          PRICE DETAILS ({finalItems.length} Items){" "}
        </div>
        <div className='price-item'>
          <span className='price-item-tag'>Total MRP</span>
          <span className='price-item-value'>₹{totalMRP}</span>
        </div>
        <div className='price-item'>
          <span className='price-item-tag'>Discount on MRP</span>
          <span className='price-item-value priceDetail-base-discount'>
            -₹{totalDiscount}
          </span>
        </div>
        <div className='price-item'>
          <span className='price-item-tag'>Convenience Fee</span>
          <span className='price-item-value'>₹99</span>
        </div>
        <hr />
        <div className='price-footer'>
          <span className='price-item-tag'>Total Amount</span>
          <span className='price-item-value'>₹{finalPayment}</span>
        </div>
      </div>
      <button className='btn-place-order'>
        <div className='css-xjhrni'>PLACE ORDER</div>
      </button>
    </div>
  );
};

export default BagSummary;
