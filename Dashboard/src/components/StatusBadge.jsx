
function StatusBadge({ quantidade }) {
  const baixo = quantidade < 10;

  return (
    <span className={baixo ? "badge badge-baixo" : "badge badge-normal"}>
      {baixo ? "Estoque Baixo" : "Normal"}
    </span>
  );
}

export default StatusBadge;