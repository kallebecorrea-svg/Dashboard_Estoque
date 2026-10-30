import { useState } from "react";
import StatCard from "./StatCard";
import TabelaProdutos from "./TabelaProdutos";
import FormProduto from "./FormProduto";

const ITENS_POR_PAGINA = 8;

function PaginaProdutos({ produtos, setProdutos }) {
    const [pagina, setPagina] = useState(1);
    // null = modal fechado | {} = novo produto | produto = editando
    const [formAberto, setFormAberto] = useState(null);

    //----- indicadores calculados a partir do array ------------
    const total = produtos.length;
    const ativos = produtos.filter((p) => p.ativo).length;
    const inativos = produtos.filter((p) => !p.ativo).length;
    const foraDeEstoque = produtos.filter((p) => p.quantidade === 0).length;

    const cards = [
        { id: 1, titulo: "Total produtos", valor: total, icone: "📦", cor: "azul" },
        { id: 2, titulo: "Produtos ativos", valor: ativos, icone: "✅", cor: "verde" },
        { id: 3, titulo: "Produtos inativos", valor: inativos, icone: "❌", cor: "vermelho" },
        { id: 4, titulo: "Fora de estoque", valor: foraDeEstoque, icone: "⚠️", cor: "amarelo" },
    ]

    // Paginação
    const totalPaginas = Math.max(1, Math.ceil(total / ITENS_POR_PAGINA))
    const paginaAtual = Math.min(pagina, totalPaginas); //evita página vazia após excluir
    const inicio = (paginaAtual - 1) * ITENS_POR_PAGINA;
    const produtosPagina = produtos.slice(inicio, inicio + ITENS_POR_PAGINA);
    const numerosDePaginas = Array.from({ length: totalPaginas }, (_, i) => i + 1);

    // Ações
    function salvar(dados) {
        if (dados.id) {
            //editar: troca só o produto com esse id
            setProdutos(produtos.map((p) => (p.id === dados.id ? dados : p)));
        } else {
            // adicionar: cria um id novo e coloca no fim da lista
            const novoId = Math.max(0, ...produtos.map((p) => p.id)) + 1;
            setProdutos([...produtos, { ...dados, id: novoId }]);
            setPagina(Math.ceil((total + 1) / ITENS_POR_PAGINA)) //vai para a ultima página
        }
        setFormAberto(null);
    }

    function excluir(produto) {
        if (window.confirm(`Excluir: "${produto.nome}"?`)) {
            setProdutos(produtos.filter((p) => p.id !== produto.id));
        }
    }

    return (
    <>
      <section className="cards">
        {cards.map((c) => (
          <StatCard key={c.id} {...c} />
        ))}
      </section>
 
      <div className="pagina-topo">
        <div>
          <h2 className="pagina-titulo">Inventário de produtos</h2>
          <p className="pagina-subtitulo">Gerencie seus itens de estoque e níveis de inventário</p>
        </div>
 
        <div className="botoes">
          <button className="btn btn-sec">Importar</button>
          <button className="btn btn-sec">Exportar</button>
          <button className="btn btn-primario" onClick={() => setFormAberto({})}>
            + Adicionar Produto
          </button>
        </div>
      </div>
 
      <section className="painel">
        <TabelaProdutos
          produtos={produtosDaPagina}
          onEditar={setFormAberto}
          onExcluir={excluir}
        />
 
        <nav className="paginacao">
          <button disabled={paginaAtual === 1} onClick={() => setPagina(paginaAtual - 1)}>‹</button>
 
          {numerosDePagina.map((n) => (
            <button
              key={n}
              className={n === paginaAtual ? "pag-ativa" : ""}
              onClick={() => setPagina(n)}
            >
              {n}
            </button>
          ))}
 
          <button disabled={paginaAtual === totalPaginas} onClick={() => setPagina(paginaAtual + 1)}>›</button>
        </nav>
      </section>
 
      {formAberto && (
        <FormProduto
          produto={formAberto.id ? formAberto : null}
          onSalvar={salvar}
          onCancelar={() => setFormAberto(null)}
        />
      )}
    </>
  );
}
 
export default PaginaProdutos;
