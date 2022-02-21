import s from "./Button.module.css";

const Button = ({ handleLoadMore }) => {
  return (
    <button onClick={handleLoadMore} className={s.Button}>
      Load more
    </button>
  );
};

export default Button;
