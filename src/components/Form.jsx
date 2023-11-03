import React, { useState } from "react";
import Address from "./Address";
import BasePrice from "./BasePrice";

const Form = () => {
  const initialState = {
    house_address_line_1: "",
    house_address_line_2: "",
    house_address_city: "",
    house_address_state: "",
    house_address_zipcode: "",
    base_amount: 0,
    base_amount_seller_comments: "",
    roof_amount: 0,
    roof_amount_seller_comments: "",
    garage_amount: 0,
    garage_amount_seller_comments: "",
    basement_amount: 0,
    basement_amount_seller_comments: "",
  };
  const [page, setPage] = useState(0);
  const [data, setData] = useState(initialState);

  const formTitles = ["House Address up for sale", "Set Base Price"];

  const PageDisplay = () => {
    switch (page) {
      case 0:
        return <Address data={data} setData={setData} />;
      case 1:
        return <BasePrice data={data} setData={setData} />;

      default:
        return null;
    }
  };

  const handleSubmit = () => {
    console.log("formData: ", data);
    setData(initialState);
  };

  return (
    <div className="mb-6 text-center">
      <div className="font-bold uppercase text-2xl">{formTitles[page]}</div>
      <div>{PageDisplay()}</div>
      <div className="flex justify-between m-6">
        <div>
          {page === 0 ? null : (
            <button
              className="w-48 h-8 border border-solid rounded-xl bg-gray-700 text-white"
              onClick={() => {
                setPage((page) => page - 1);
              }}
            >
              Prev
            </button>
          )}
        </div>

        <div>
          {page === formTitles.length - 1 ? (
            <button
              className="w-48 h-8 border border-solid rounded-xl bg-blue-700 text-white"
              onClick={() => handleSubmit()}
            >
              Submit
            </button>
          ) : (
            <button
              className="w-48 h-8 border border-solid rounded-xl bg-teal-700 text-white"
              onClick={() => {
                setPage((page) => page + 1);
              }}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
