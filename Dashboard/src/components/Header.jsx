export default function Header({ titulo }) {
  return (
    <header className="topbar">
      <h1>{titulo}</h1>
      <div className="topbar-direita">
        <input type="text" placeholder="Pesquisar" className="busca" />
        <span className="sino">🔔</span>
      </div>
    </header>
  );
}