import StatusBadge from "./StatusBadge";

function corBarra(quantidade) {
    if (quantidade < 10) return "barra-critica";
    if (quantidade < 20) return "barra-atencao";
    return "barra-estavel"
}

function ProductTable({ produtos }) {
    return (
        <section className="painel tabela-painel">
            <div className="painel-topo">
                <h2>Status do Estoque</h2>
                <a href="#" className="ver-todos">Ver Todos</a>
            </div>

            <table className="tabela">
                <thead>
                    <tr>
                        <th>PRODUTO</th>
                        <th>CÓDIGO</th>
                        <th>CATEGORIA</th>
                        <th>ESTOQUE TOTAL</th>
                        <th>STATUS</th>
                    </tr>
                </thead>

                <tbody>
                    {produtos.map((p) => (
                        <tr key={p.id}>
                            <td>
                                <strong>{p.nome}</strong>
                                <small>#SKU - {p.sku}</small>
                            </td>
                            <td>{p.codigo}</td>
                            <td>{p.categoria}</td>
                            <td>
                                <span className="qtd">{p.quantidade} unidade</span>
                                <div className="barra-fundo">
                                    <div
                                        className={`barra ${corDaBarra(p.quantidade)}`}
                                        style={{ width: `${(p.quantidade / p.maximo) * 100}%` }}
                                    />
                                </div>
                            </td>
                            <td>
                                <StatusBadge quantidade={p.quantidade} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default ProductTable