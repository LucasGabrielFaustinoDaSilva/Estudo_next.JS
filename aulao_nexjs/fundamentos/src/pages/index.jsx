import Link from 'next/link'
import Navegador from '@/components/Navegador'
export default function Inicio(){
  return(
    <div style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      height:"100vh",
      flexWrap:"wrap"
    }}>
      <Navegador texto="Estiloso" destino="/estiloso"/>
      <Navegador texto="Exemplo" destino="/exemplo" cor="#cf3347ff"/>
      <Navegador texto="JSX" destino="/jsx2" cor="#9400d3"/>
      <Navegador texto="Navegação #01" destino="/navegacao" cor="#18d818ff"/>
      <Navegador texto="Navegação #01" destino="/cliente/123" cor="#c4d80cff"/>
      
    </div>
  )
}
