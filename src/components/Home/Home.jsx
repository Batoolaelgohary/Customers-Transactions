import { useState } from "react";
import data from "../../data.json";
import "./Home.scss";
import Graph from "../Graph/Graph";
import Table from "../Table/Table";
const Home = () => {
  const [customerFilter, setCustomerFilter] = useState("");
  const [amountFilter, setAmountFilter] = useState("");

  const mergedData = data.transactions.map((transaction) => {
    const customer = data.customers.find(
      (customer) => customer.id === transaction.customer_id
    );
    return {
      id: transaction.id,
      customerName: customer ? customer.name : "Unknown",
      date: transaction.date,
      amount: transaction.amount,
    };
  });

  const filteredData = mergedData.filter((item) => {
    return (
      item.customerName.toLowerCase().includes(customerFilter.toLowerCase()) &&
      (!amountFilter || item.amount === parseInt(amountFilter))
    );
  });

  return (
    <div className="data-Table">
      <h2 className="title">Welcome to Customers Data Web Application</h2>
      <div className="filter">
        <input
          type="text"
          placeholder="Filter by Customer Name"
          value={customerFilter}
          onChange={(e) => setCustomerFilter(e.target.value)}
        />
        <input
          type="number"
          placeholder="Filter by Amount"
          value={amountFilter}
          onChange={(e) => setAmountFilter(e.target.value)}
        />
      </div>
      <div className="flexBox">
        <Table filteredData={filteredData} />
        <Graph transactions={filteredData} />
      </div>
    </div>
  );
};

export default Home;
