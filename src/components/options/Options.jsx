import css from './Options.module.css';
export const Options = ({ reviews, setReviews, reset }) => {
  const handleClick = e => {
    const button = e.target.dataset.id;
    if (!button) return;
    if (button === `reset`) {
      setReviews({ good: 0, neutral: 0, bad: 0 });
      return;
    } else {
      setReviews({
        ...reviews,
        [button]: reviews[button] + 1,
      });
    }
  };
  return (
    <ul className={css.list} onClick={handleClick}>
      <li>
        <button className={css.button} data-id="good">
          Goode
        </button>
      </li>
      <li>
        <button className={css.button} data-id="neutral">
          Neutral
        </button>
      </li>
      <li>
        <button className={css.button} data-id="bad">
          Bad
        </button>
      </li>
      {reset > 0 && (
        <li>
          <button className={css.reset} data-id="reset">
            Reset
          </button>
        </li>
      )}
    </ul>
  );
};
