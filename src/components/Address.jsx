import React from "react";

const Address = ({ data, setData }) => {
  return (
    <div className="grid grid-cols-2 gap-4 text-md sm:text-xl m-10">
      <input
        className="border border-solid rounded-md"
        type="text"
        placeholder="Line 1"
        value={data.house_address_line_1}
        onChange={(e) => {
          setData({ ...data, house_address_line_1: e.target.value });
        }}
      />

      <input
        className="border border-solid rounded-md"
        type="text"
        placeholder="Line 2"
        value={data.house_address_line_2}
        onChange={(e) => {
          setData({ ...data, house_address_line_2: e.target.value });
        }}
      />

      <input
        className="border border-solid rounded-md"
        type="text"
        placeholder="City"
        value={data.house_address_city}
        onChange={(e) => {
          setData({ ...data, house_address_city: e.target.value });
        }}
      />

      <input
        className="border border-solid rounded-md"
        type="text"
        placeholder="State"
        value={data.house_address_state}
        onChange={(e) => {
          setData({ ...data, house_address_state: e.target.value });
        }}
      />

      <input
        className="border border-solid rounded-md"
        type="text"
        placeholder="Zipcode"
        value={data.house_address_zipcode}
        onChange={(e) => {
          setData({ ...data, house_address_zipcode: e.target.value });
        }}
      />
    </div>
  );
};

export default Address;
