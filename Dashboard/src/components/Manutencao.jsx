function Manutencao({ pagina }) {
  return (
    <section className="painel manutencao">
      <span className="manutencao-icone">🚧</span>
      <h2>{pagina} em manutenção</h2>
      <p>Esta página ainda está sendo desenvolvida. Volte em breve!</p>
    </section>
  );
}

export default Manutencao;