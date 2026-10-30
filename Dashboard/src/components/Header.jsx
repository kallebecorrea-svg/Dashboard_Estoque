
export default function Header() {
  return (
    <header className="topbar">
      <h1>Dashboard Overview</h1>
      <div className="topbar-direita">
        <input type="text" placeholder="Pesquisar" className="busca" />
        <span className="sino">🔔</span>
      </div>
    </header>
  );
}
