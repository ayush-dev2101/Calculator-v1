import style from "./ButtonsContainer.module.css";

const ButtonsContainer = () => {
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
  ];
  return (
    <div className={style.ButtonsContainer}>
      {buttonNames.map((buttonName) => (
        <button className={style.button}>{buttonName}</button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
