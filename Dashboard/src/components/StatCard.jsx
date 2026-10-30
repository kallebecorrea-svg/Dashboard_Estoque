
export default function StatCard({ titulo, valor, variacao , cor, positivo, icone }) {
    return (
        <div className="stat-card">
            <div className="stat-info">
                <span className="stat-titulo">{titulo}</span>
                <span className="stat-valor">{valor}</span>
                <span className={positivo ? "variacao positivo" : "variacao negativo"}>
                    {positivo ? "↑" : "↑"} {variacao}
                </span>
            </div>
            <div className={`stat-icone ${cor}`}>{icone}</div>

        </div>
    )
}