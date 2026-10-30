import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const categorias = [
  { nome: "Eletrônicos", valor: 40, cor: "#8b5cf6" },
  { nome: "Beleza", valor: 25, cor: "#16a34a" },
  { nome: "Alimentos", valor: 20, cor: "#f59e0b" },
  { nome: "Outros", valor: 15, cor: "#3b82f6" },
];

function GraficoRosca() {
  return (
    <section className="painel">
      <h2>Categorias</h2>

      <ResponsiveContainer width="100%" height={220}>
        <PieChart>
          <Pie
            data={categorias}
            dataKey="valor"
            nameKey="nome"
            innerRadius={55}
            outerRadius={80}
            paddingAngle={2}
          >
            {categorias.map((c) => (
              <Cell key={c.nome} fill={c.cor} />
            ))}
          </Pie>
          <Tooltip formatter={(v) => `${v}%`} />
          <Legend iconType="circle" />
        </PieChart>
      </ResponsiveContainer>
    </section>
  );
}

export default GraficoRosca;