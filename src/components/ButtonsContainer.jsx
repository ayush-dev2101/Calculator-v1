import style from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ ButtonClick }) => {
  const buttonNames = [
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    ".",
    "=",
  ];
  return (
    <div className={style.ButtonsContainer}>
      {buttonNames.map((buttonName) => (
        <button
          key={buttonName}
          className={style.button}
          onClick={() => ButtonClick(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
