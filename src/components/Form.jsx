import React, { useState } from "react";
import Address from "./Address";
import BasePrice from "./BasePrice";
import ItemizedPrice from "./ItemizedPrice";

const Form = () => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState({
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
  });

  const formTitles = [
    "House Address to sell",
    "Set Base Price",
    "Set Itemized Price",
  ];

  const PageDisplay = () => {
    switch (page) {
      case 0:
        return <Address data={data} setData={setData} />;
      case 1:
        return <BasePrice data={data} setData={setData} />;
      case 2:
        return <ItemizedPrice data={data} setData={setData} />;
      default:
        return null;
    }
  };

  const handleSubmit = () => {
    console.log("formData: ", data);
  };

  return (
    <div className="container w-full min-h-screen">
      <div className="font-bold uppercase">{formTitles[page]}</div>
      <div>{PageDisplay()}</div>
      <div className="flex justify-between">
        <div>
          {page === 0 ? null : (
            <button
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
            <button onClick={() => handleSubmit()}>Submit</button>
          ) : (
            <button
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
