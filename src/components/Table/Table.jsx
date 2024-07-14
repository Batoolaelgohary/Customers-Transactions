import "./table.scss";
/* eslint-disable react/prop-types */

const Table = ({ filteredData }) => {
  return (
    <table className="tableData">
      <thead>
        <th>ID</th>
        <th>Name</th>
        <th>Transaction date</th>
        <th>Transaction amount</th>
      </thead>
      <tbody>
        {filteredData.map((item) => (
          <tr key={item.id}>
            <td className="id">{item.id}</td>
            <td>{item.customerName}</td>
            <td>{item.date}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
