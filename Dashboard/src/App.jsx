import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatCard from "./components/StatCard";
import ProductTable from "./components/ProductTable";
import Atividades from "./components/Atividade";
import "./App.css";


const produtos = [
  { id: 1, nome: "Teclado Mecânico", categoria: "Periféricos", quantidade: "45" },
  { id: 2, nome: "Monitor 24\"", categoria: "Monitores", quantidade: "20" },
  { id: 3, nome: "Mouse Gamer", categoria: "Periféricos", quantidade: "10" },
  { id: 4, nome: "Cabo HDMI", categoria: "Acessórios", quantidade: "5" },
  { id: 5, nome: "Notebook ThinkPad i5", categoria: "Computadores", quantidade: "12" },
  { id: 6, nome: "Webcam Full HD", categoria: "Periféricos", quantidade: "8" },

]

const cards = [
  { id: 1, titulo: "Total Produtos", valor: "1.248", variacao: "12,5% vs último mês", positivo: true, icone: "📦", cor: "azul" },
  { id: 2, titulo: "Estoque Baixo", valor: "48", variacao: "5% vs último mês", positivo: false, icone: "⚠️", cor: "vermelho" },
  { id: 3, titulo: "Valor Total", valor: "1.246,57", variacao: "8,5% vs ultimo mês", positivo: true, icone: "💲", cor: "verde" },
  { id: 4, titulo: "Fornecedores", valor: "32", variacao: "12 novos este mês", positivo: true, icone: "👥", cor: "roxo" },
]

export default function App() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="principal">
        <Header />

        <main className="conteudo">
          <section className="cards">
            {cards.map((c) => (
              <StatCard key={c.id} {...c} />
            ))}
          </section>

          <section className="graficos">
            <div className="painel">Gráfico de linha (Passo 9)</div>
            <div className="painel">Gráfico de rosca (Passo 9)</div>
          </section>

          <section className="inferior">
            <Atividades />
            <ProductTable produtos={produtos} />
          </section>
        </main>
      </div>
    </div>
  );
}
