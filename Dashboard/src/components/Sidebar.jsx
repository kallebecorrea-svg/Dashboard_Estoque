import { useState } from "react";

const menuPrincipal = ["Dashboard", "Produtos", "Estoque", "Fornecedores", "Movimentações"];
const configuracoes = ["Sistema", "Usuários"];

function Sidebar() {
    const [ativo, setAtivo] = useState("Estoque");

    function renderItem(nome) {
        return (
            <li
                key={nome}
                className={ativo === nome ? "menu-item ativo" : "menu-item"}
                onClick={() => setAtivo(nome)}
            >
                {nome}
            </li>
        );
    }

    return (
        <aside className="sidebar">
            <div className="logo">FlowStock</div>

            <p className="menu-titulo">MENU PRINCIPAL</p>
            <ul>{menuPrincipal.map(renderItem)}</ul>

            <p className="menu-titulo">CONFIGURAÇÕES</p>
            <ul>{configuracoes.map(renderItem)}</ul>

            <div className="perfil">
                <div className="avatar">KA</div>
                <div>
                    <strong>Kallebe Avozani</strong>
                    <small>Admin</small>
                </div>
            </div>
        </aside>
    );
}
export default Sidebar