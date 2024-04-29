import css from "./TransactionHistory.module.css"
export default function TransactionHistory({ transactions }) {
    return (
        <table>
  <thead className={css.header}>
        <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

    <tbody>
        {transactions.map((transaction) => 
            <tr key = {transaction.id}>
                <td className={css.cell}>{transaction.type}</td>
                <td className={css.cell}>{transaction.amount}</td>
                <td className={css.cell}>{transaction.currency}</td>
            </tr>)}
  </tbody>
</table>
    )
}