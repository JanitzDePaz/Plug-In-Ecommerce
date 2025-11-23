export const ChangeColorButton = ({ color, onClick }: ChangeColorButtonProps) => {
  return (
    <button
      className={`changeColorButtons ${color}`}
      onClick={onClick}
    ></button>
  );
}  