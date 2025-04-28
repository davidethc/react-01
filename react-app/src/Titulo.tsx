function Titulo() {
  //jsx -> js + html-> react create element
  //react toma las etiquetas y las hace js
  const nombre = "ChanchitoFeliz";
  if (nombre) {
    return <h1>Hola {nombre}</h1>;
  }
  return <h1>Hola Mundo</h1>;
}
export default Titulo;
