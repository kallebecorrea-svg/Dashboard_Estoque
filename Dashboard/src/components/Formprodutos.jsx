import { useState } from "react";

const vazio = {
    nome: "",
    codigo: "",
    descricao: "",
    fornecedor: "",
    categoria: "Eletrônico",
    valor: "",
    quantidade: "",
    ativo: "true",
}

export default function FormProduto({ produto, onSalvar, onCancelar }) {
    //se veio produto, estamos editando; senão, é um produto novo
    const [form, setForm] = useState(
        produto ? { ...produto, ativo: String(produto.ativo) } : vazio
    );
    const [erro, setErro] = useState("");

    //um unico handler serve para todos os campos, usando atribruto "name"
    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!form.nome.trim() || !form.codigo.trim()) {
            setErro("Preencha pelo menos o nome e o código.")
            return;
        }

        onSalvar({
            ...form,
            valor: Number(form.valor) || 0,
            quantidade: Number(form.quantidade) || 0,
            ativo: form.ativo === "true",
        });
    }

    return (
        <div className="modal-fundo" onClick={onCancelar}>
            <form
                className="modal"
                onClick={(e) => e.stopPropagation()}
                onSubmit={handleSubmit}
            >
                <h2>{produto ? "Editar Produto" : "Adicionar Produto"}</h2>

                <label>
                    Nome
                    <input name="nome" value={form.nome} onChange={handleChange} />
                </label>

                <div className="campos-linha">
                    <label>
                        Código
                        <input name="codigo" value={form.codigo} onChange={handleChange} placeholder="PRD-013" />
                    </label>

                    <label>
                        Categoria
                        <select name="categoria" value={form.categoria} onChange={handleChange}>
                            <option>Eletrônico</option>
                            <option>Beleza</option>
                            <option>Casa</option>
                            <option>Outros</option>
                        </select>
                    </label>
                </div>

                <label>
                    Descrição
                    <input name="descricao" value={form.descricao} onChange={handleChange} />
                </label>

                <label>
                    Fornecedor
                    <input name="fornecedor" value={form.fornecedor} onChange={handleChange} />
                </label>

                <div className="campos-linha">
                    <label>
                        Valor (R$)
                        <input name="valor" type="number" step="0.01" min="0" value={form.valor} onChange={handleChange} />
                    </label>
                    <label>
                        Quantidade
                        <input name="quantidade" type="number" min="0" value={form.quantidade} onChange={handleChange} />
                    </label>
                    <label>
                        Status
                        <select name="ativo" value={form.ativo} onChange={handleChange}>
                            <option value="true">Ativo</option>
                            <option value="false">Inativo</option>
                        </select>
                    </label>
                </div>

                {erro && <p className="erro">{erro}</p>}

                <div className="modal-botoes">
                    <button type="button" className="btn btn-sec" onClick={onCancelar}>Cancelar</button>
                    <button type="submit" className="btn btn-primario">Salvar</button>
                </div>
            </form>
        </div>
    );
}