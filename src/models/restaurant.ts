class Restaurante {
  imagem: string
  titulo: string
  categoria: string
  descricao: string
  score: string
  id: number

  constructor(
    imagem: string,
    titulo: string,
    categoria: string,
    descricao: string,
    score: string,
    id: number
  ) {
    this.imagem = imagem
    this.titulo = titulo
    this.categoria = categoria
    this.descricao = descricao
    this.score = score
    this.id = id
  }
}

export default Restaurante
