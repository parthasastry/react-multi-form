import React from "react";

const ItemizedPrice = ({ data, setData }) => {
  return (
    <div>
      <div className="flex justify-between">
        <div>Roof Price</div>
        <div>
          <input
            type="number"
            value={data.roof_amount}
            onChange={(e) => {
              setData({ ...data, roof_amount: e.target.value });
            }}
          />
        </div>

        <div>
          <textarea
            type="text"
            placeholder="Seller Comments"
            value={data.roof_amount_seller_comments}
            onChange={(e) => {
              setData({ ...data, roof_amount_seller_comments: e.target.value });
            }}
          />
        </div>
      </div>
      <div className="flex justify-between">
        <div>Garage Price</div>
        <div>
          <input
            type="number"
            value={data.garage_amount}
            onChange={(e) => {
              setData({ ...data, garage_amount: e.target.value });
            }}
          />
        </div>

        <div>
          <textarea
            type="text"
            placeholder="Seller Comments"
            value={data.garage_amount_seller_comments}
            onChange={(e) => {
              setData({
                ...data,
                garage_amount_seller_comments: e.target.value,
              });
            }}
          />
        </div>
      </div>
      <div className="flex justify-between">
        <div>Basement Price</div>
        <div>
          <input
            type="number"
            value={data.basement_amount}
            onChange={(e) => {
              setData({ ...data, basement_amount: e.target.value });
            }}
          />
        </div>

        <div>
          <textarea
            type="text"
            placeholder="Seller Comments"
            value={data.basement_amount_seller_comments}
            onChange={(e) => {
              setData({
                ...data,
                basement_amount_seller_comments: e.target.value,
              });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemizedPrice;
