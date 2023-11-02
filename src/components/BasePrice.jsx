import React from "react";

const BasePrice = ({ data, setData }) => {
  return (
    <div className="flex justify-between">
      <div>Base Price</div>
      <div>
        <input
          type="number"
          value={data.base_amount}
          onChange={(e) => {
            setData({ ...data, base_amount: e.target.value });
          }}
        />
      </div>

      <div>
        <textarea
          type="text"
          placeholder="Seller Comments"
          value={data.base_amount_seller_comments}
          onChange={(e) => {
            setData({ ...data, base_amount_seller_comments: e.target.value });
          }}
        />
      </div>
    </div>
  );
};

export default BasePrice;
