import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const dados = [
  { mes: "Jan", atual: 33, ideal: 16 },
  { mes: "Fev", atual: 31, ideal: 14 },
  { mes: "Mar", atual: 41, ideal: 19 },
  { mes: "Abr", atual: 41, ideal: 20 },
  { mes: "Mai", atual: 44, ideal: 22 },
  { mes: "Jun", atual: 47, ideal: 24 },
  { mes: "Jul", atual: 51, ideal: 25 },
];

function GraficoLinha() {
  return (
    <section className="painel">
      <h2>Controle de Estoque</h2>

      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={dados}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
          <XAxis dataKey="mes" tick={{ fontSize: 11 }} />
          <YAxis tick={{ fontSize: 11 }} />
          <Tooltip />
          <Legend verticalAlign="top" iconType="circle" />
          <Line
            type="monotone"
            dataKey="atual"
            name="Quant. Atual de Estoque"
            stroke="#2563eb"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="ideal"
            name="Estoque Ideal"
            stroke="#16a34a"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
}

export default GraficoLinha;