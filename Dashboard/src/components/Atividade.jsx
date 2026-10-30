
const atividades = [
    { id: 1, titulo: "Novo fornecedor", detalhe: "John Doe · 2 horas atrás", icone: "👤" },
    { id: 2, titulo: "Compra realizada", detalhe: "Order #456 · 4 horas atrás", icone: "🛒" },
    { id: 3, titulo: "Nova mensagem", detalhe: "Product X · 6 horas atrás", icone: "💬" },
    { id: 4, titulo: "Atualização do sistema", detalhe: "Version 2.3.1 · 1 dia atrás", icone: "🔔" },
];

export default function Atividades() {
    return (
        <section className="painel">
            <h2>Atividade recente</h2>
            <ul className="atividades">
                {atividades.map((a) => (
                    <li key={a.id} >
                    <span className="atividade-icone">{a.icone}</span>
                    <div>
                        <strong>{a.titulo}</strong>
                        <small>{a.detalhe}</small>
                    </div>
                    </li>
                ))}
        </ul>
        </section>
    );
}