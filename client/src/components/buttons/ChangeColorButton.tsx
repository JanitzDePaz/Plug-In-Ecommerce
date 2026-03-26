export const ChangeColorButton = ({
  color,
  onClick,
}: ChangeColorButtonProps) => {
  return (
    <button
      className={`changeColorButtons ${color}`}
      onClick={onClick}
      aria-label={`Change color to ${color}`}
    ></button>
  );
};
