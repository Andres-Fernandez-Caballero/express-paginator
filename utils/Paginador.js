class Paginador {
    constructor(listaObjetos, cantidadPorPagina) {
        this.listaObjetos = listaObjetos;
        this.cantidadPorPagina = cantidadPorPagina;
    }
    obtenerPagina(pagina = 1) {
        if(pagina < 1) throw new Error('La pagina no puede ser menor a 1');
        if(pagina > this.obtenerCantidadDePaginas()) pagina = this.obtenerCantidadDePaginas();
        const inicio = (pagina - 1) * this.cantidadPorPagina;
        const fin = pagina * this.cantidadPorPagina;
        return this.listaObjetos.slice(inicio, fin);
    }
    obtenerCantidadDePaginas() {
        return Math.ceil(this.listaObjetos.length / this.cantidadPorPagina);
    }
    obtenerPaginaAnterior(pagina) {
        return pagina === 1? 1 : (parseInt(pagina) - 1);
    }

    obtenerPaginaSiguiente(pagina) {
        return pagina >= this.obtenerCantidadDePaginas()? 
            this.obtenerCantidadDePaginas() : (parseInt(pagina) + 1);
    }

}

module.exports = Paginador;