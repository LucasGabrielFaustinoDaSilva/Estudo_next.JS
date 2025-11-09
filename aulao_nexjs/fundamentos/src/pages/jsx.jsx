export default function Jsx()
{
  const a = 3
  const b = 3
  console.log(a * b)

  const obj = {
    nome:'Joao',
    idade: 31
  }
  return(
    <div>
      <h1>Jsx é um conceito central</h1>
      <h2>{a * b}</h2>
      <p>{Math.random()}</p>
      <p>
        {JSON.stringify({obj})} 
      </p>
    </div>
  )
}