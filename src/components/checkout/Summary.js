import React from 'react'

const Summary = () => {
  return (
    <section className="summary">
      <h6>SUMMARY</h6>
      <div className="summary-items">
        <div className="summary-single-item">
          <img className="summary-single-item__image" src="" alt="item" />
          <p className="summary-single-item__name">xx99 MK II</p>
          <p className="summary-single-item__price">$2,999</p>
          <p className="summary-single-item__quantity">x1</p>
        </div>
      </div>
      <div className="summary-details">
        <div className="summary-detail-type">
          <p className="summary-details__name">TOTAL</p>
          <p className="summary-details__amount">$5,396</p>
        </div>
        <div className="summary-detail-type">
          <p className="summary-details__name">SHIPPING</p>
          <p className="summary-details__amount">$50</p>
        </div>
        <div className="summary-detail-type">
          <p className="summary-details__name">VAT (INCLUDED)</p>
          <p className="summary-details__amount">$1,079</p>
        </div>
        <div className="summary-detail-type">
          <p className="summary-details__name">GRAND TOTAL</p>
          <p className="summary-details__amount">$5,446</p>
        </div>
      </div>
      <button className='summary__submit-btn'>CONTINUE & PAY</button>
    </section>
  );
}

export default Summary