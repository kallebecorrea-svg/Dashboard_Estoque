
function formatarValor(valor) {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export default function TabelaProdutos({ produtos, onEditar, onExcluir}) {
    return (
        <table className="tabela tabela-produtos">
            <thead>
                <tr>
                    <th>PRODUTO</th>
                    <th>CÓDIGO</th>
                    <th>DESCRIÇÃO</th>
                    <th>FORNECEDOR</th>
                    <th>CATEGORIA</th>
                    <th>VALOR</th>
                    <th>STATUS</th>
                    <th>AÇÃO</th>
                </tr>
            </thead>

            <tbody>
                {produtos.map((p) => (
                    <tr key={p.id}>
                        <td>
                            <div className="produto-nome">
                                <span className="produto-icone">📦</span>
                                <strong>{p.nome}</strong>
                            </div>
                        </td>
                        <td>{p.codigo}</td>
                        <td className="descricao">{p.descricao}</td>
                        <td>{p.fornecedor}</td>
                        <td>{p.categoria}</td>
                        <td>{formatarValor(p.valor)}</td>
                        <td>
                            <span className={p.ativo ? "badge badge-ativo" : "badge badge-inativo"}>
                                {p.ativo ? "Ativo" : "Inativo"}
                            </span>
                        </td>
                        <td>
                            <div className="acoes">
                                <button className="btn-icone" title="Editar" onClick={() => onEditar(p)}>✏️</button>
                                <button className="btn-icone" title="Excluir" onClick={() => onExcluir(p)}>🗑️</button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}