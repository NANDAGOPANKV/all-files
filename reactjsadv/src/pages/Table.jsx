import React from "react";
import "../styles/Search.css";

export default function Table({ data }) {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Email</th>
        </tr>
        {data.map((items) => {
          return (
            <tr key={items.id}>
              <td>{items.first_name}</td>
              <td>{items.last_name}</td>
              <td>{items.email}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
