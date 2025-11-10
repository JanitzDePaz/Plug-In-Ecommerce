export default function ChangeColorButton({
  color,
  onClick,
}: {
  color: string;
  onClick: () => void;
}) {
  return (
    <button
      className={`changeColorButtons ${color}`}
      onClick={onClick}
    ></button>
  );
}  