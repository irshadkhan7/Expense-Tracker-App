import React from "react";
import Transactionform from "../style/transactionhistory.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function TransactionHistory({ transactions, onDeleteTransaction,}) {
  return (
    <>
      <div> 
        <ul>
          {transactions.map((data,index ) => (
            <li key={data.id }>
              {index + 1}

              {data.name}  <td>{data.amount} ₹</td>{""}
              <button className="btn-edit" onClick={() => (data.id)}>
                <EditIcon />
                Edit
              </button >{""}
              <button onClick={() => onDeleteTransaction(data.id)}>
                <DeleteIcon />
                Delete
              </button>
            </li>
          ))}
                <a href="https://github.com/irshadkhan7?tab=repositories">𝓜𝓪𝓴𝓮 𝓫𝔂 ❣️ 𝓘𝓻𝓼𝓱𝓪𝓭 𝓐𝓵𝓲</a>
        </ul>
      </div>
    </>
  );
}
export default TransactionHistory;
