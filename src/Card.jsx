import React from 'react'

//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario 

const Card = ({dataInput1, dataInput2}) => {
  console.log(dataInput1);
  return (
    <div className="center-div">
    <p>Tu nombre es: {dataInput1}</p>
    <p>Estudias: {dataInput2}</p>
  </div>
  )
}

export default Card