import React from "react";
import useTransactions from "./hooks/useTransactions";


const transactionList = ({userId}) => {
  const {transactions, loading, error} = useTransactions(userId)

  if(loading){
    return <p>cargando...</p>
  }

  if(error){
    return <p>{error}</p>
  }
  return (
    <>
    <h2>transactiones</h2>

    <ul>
    {transactions.map((transaction)=>(
      <li  key={transaction.id}>
      <strong>{transaction.type === "income" ? "ingreso" : "egreso"}</strong>: ${transaction.amount}
      <small>{transaction.description}</small>
      <small>{new Date(transaction.date.seconds * 1000).toLocaleString()}</small>
      </li>
    ))}
    </ul>
    </>
  )
}

export default transactionList