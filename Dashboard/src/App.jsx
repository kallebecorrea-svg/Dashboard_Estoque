import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatCard from "./components/StatCard";
import ProductTable from "./components/ProductTable";
import Atividades from "./components/Atividade";
import Manutencao from "./components/Manutencao";
import GraficoLinha from "./components/GraficoLinha";
import GraficoRosca from "./components/GraficoRosca";
import "./App.css";


const produtos = [
  { id: 1, nome: "Fone de Ouvido Bluetooth", sku: "1234", codigo: "PRD-001", categoria: "Eletrônicos", quantidade: 48, maximo: 60 },
  { id: 2, nome: "Smartwatch", sku: "5678", codigo: "PRD-002", categoria: "Eletrônicos", quantidade: 5, maximo: 60 },
  { id: 3, nome: "Câmera Digital", sku: "9012", codigo: "PRD-003", categoria: "Eletrônicos", quantidade: 12, maximo: 60 },
  { id: 4, nome: "Perfume", sku: "3450", codigo: "PRD-004", categoria: "Beleza", quantidade: 32, maximo: 60 },
  { id: 5, nome: "Teclado Mecânico", sku: "7788", codigo: "PRD-005", categoria: "Eletrônicos", quantidade: 45, maximo: 60 },
  { id: 6, nome: "Hidratante", sku: "4421", codigo: "PRD-006", categoria: "Beleza", quantidade: 3, maximo: 60 },
];

const cards = [
  { id: 1, titulo: "Total Produtos", valor: "1.248", variacao: "12,5% vs último mês", positivo: true, icone: "📦", cor: "azul" },
  { id: 2, titulo: "Estoque Baixo", valor: "48", variacao: "5% vs último mês", positivo: false, icone: "⚠️", cor: "vermelho" },
  { id: 3, titulo: "Valor Total", valor: "1.246,57", variacao: "8,5% vs ultimo mês", positivo: true, icone: "💲", cor: "verde" },
  { id: 4, titulo: "Fornecedores", valor: "32", variacao: "12 novos este mês", positivo: true, icone: "👥", cor: "roxo" },
]

export default function App() {
  const [paginaAtiva, setPaginaAtiva] = useState("Dashboard");
  const emDashboard = paginaAtiva === "Dashboard";

  return (
    <div className="layout">
      <Sidebar ativo={paginaAtiva} onSelecionar={setPaginaAtiva} />

      <div className="principal">
        <Header titulo={emDashboard ? "Dashboard Overview" : paginaAtiva} />

        <main className="conteudo">
          {emDashboard ? (
            <>
              <section className="cards">
                {cards.map((c) => (
                  <StatCard key={c.id} {...c} />
                ))}
              </section>

              <section className="graficos">
                <GraficoLinha />
                <GraficoRosca />
              </section>

              <section className="inferior">
                <Atividades />
                <ProductTable produtos={produtos} />
              </section>
            </>
          ) : (
            <Manutencao pagina={paginaAtiva} />
          )}
        </main>
      </div>
    </div>
  );
}