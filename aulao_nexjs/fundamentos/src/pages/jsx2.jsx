export default function Jsx2(){
  const titulo = <h1>Titulo</h1>

  function subtitulo(){
    return <h2>{"subtitulo".toUpperCase()}</h2>
  }

  return(
    <div>
      {titulo}
      {subtitulo()}
    </div>
    
  )
}