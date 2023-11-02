import React from "react";

const Address = ({ data, setData }) => {
  return (
    <div className="flex justify-between">
      <div>
        <input
          type="text"
          placeholder="Line 1"
          value={data.house_address_line_1}
          onChange={(e) => {
            setData({ ...data, house_address_line_1: e.target.value });
          }}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Line 2"
          value={data.house_address_line_2}
          onChange={(e) => {
            setData({ ...data, house_address_line_2: e.target.value });
          }}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="City"
          value={data.house_address_city}
          onChange={(e) => {
            setData({ ...data, house_address_city: e.target.value });
          }}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="State"
          value={data.house_address_state}
          onChange={(e) => {
            setData({ ...data, house_address_state: e.target.value });
          }}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Zipcode"
          value={data.house_address_zipcode}
          onChange={(e) => {
            setData({ ...data, house_address_zipcode: e.target.value });
          }}
        />
      </div>
    </div>
  );
};

export default Address;
