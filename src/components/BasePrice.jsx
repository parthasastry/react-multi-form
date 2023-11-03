import React from "react";

const BasePrice = ({ data, setData }) => {
  return (
    <div className="grid grid-cols-4 gap-1 text-md sm:text-xl m-10">
      <div className="col-span-1 uppercase font-bold">Item</div>
      <div className="col-span-1 uppercase font-bold">Amount (USD)</div>
      <div className="col-span-2 uppercase font-bold">Comments</div>
      <div className="col-span-1 p-4">Base Price</div>
      <input
        className="border border-solid rounded-md col-span-1 p-2"
        type="number"
        value={data.base_amount}
        onChange={(e) => {
          setData({ ...data, base_amount: e.target.value });
        }}
      />

      <textarea
        className="border border-solid rounded-md col-span-2"
        type="text"
        value={data.base_amount_seller_comments}
        onChange={(e) => {
          setData({ ...data, base_amount_seller_comments: e.target.value });
        }}
      />

      <div className="col-span-1">Roof</div>
      <input
        className="border border-solid rounded-md col-span-1 p-2"
        type="number"
        value={data.roof_amount}
        onChange={(e) => {
          setData({ ...data, roof_amount: e.target.value });
        }}
      />

      <textarea
        className="border border-solid rounded-md col-span-2"
        type="text"
        value={data.roof_amount_seller_comments}
        onChange={(e) => {
          setData({ ...data, roof_amount_seller_comments: e.target.value });
        }}
      />

      <div className="col-span-1">Garage</div>
      <input
        className="border border-solid rounded-md col-span-1 p-2"
        type="number"
        value={data.garage_amount}
        onChange={(e) => {
          setData({ ...data, garage_amount: e.target.value });
        }}
      />

      <textarea
        className="border border-solid rounded-md col-span-2"
        type="text"
        value={data.garage_amount_seller_comments}
        onChange={(e) => {
          setData({ ...data, garage_amount_seller_comments: e.target.value });
        }}
      />

      <div className="col-span-1">Basement</div>
      <input
        className="border border-solid rounded-md col-span-1 p-2"
        type="number"
        value={data.basement_amount}
        onChange={(e) => {
          setData({ ...data, basement_amount: e.target.value });
        }}
      />

      <textarea
        className="border border-solid rounded-md col-span-2"
        type="text"
        value={data.basement_amount_seller_comments}
        onChange={(e) => {
          setData({ ...data, basement_amount_seller_comments: e.target.value });
        }}
      />
    </div>
  );
};

export default BasePrice;
