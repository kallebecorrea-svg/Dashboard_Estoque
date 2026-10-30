function StatusBadge({ quantidade }) {
  let texto = "Estável";
  let classe = "badge-estavel";

  if (quantidade < 10) {
    texto = "Crítico";
    classe = "badge-critico";
  } else if (quantidade < 20) {
    texto = "Atenção";
    classe = "badge-atencao";
  }

  return <span className={`badge ${classe}`}>{texto}</span>;
}

export default StatusBadge;