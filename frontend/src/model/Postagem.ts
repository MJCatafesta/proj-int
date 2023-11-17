import Usuario from './Usuario';
import Categoria from './Categorias'


export default interface Postagem{

    corpo: string;
    likes: number;
    compartilhamentos: number;
    comentarios: string;
    data: string;
    categoria: Categoria | null;
    usuario: Usuario | null;
  }
