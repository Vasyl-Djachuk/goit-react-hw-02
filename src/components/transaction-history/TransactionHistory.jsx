import css from './TransactionHistory.module.css';
export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transaction}>
      <thead className={css.head}>
        <tr>
          <th className={css.th}>Type</th>
          <th className={css.th}>Amount</th>
          <th className={css.th}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(transaction => {
          return (
            <tr className={css.tr} key={transaction.id}>
              <td className={css.td}>{transaction.type}</td>
              <td className={css.td}>{transaction.amount}</td>
              <td className={css.td}>{transaction.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
