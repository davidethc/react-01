import React, { useState } from "react";
import Card, { CardBody } from "./components/Card";
import Button from "./components/button";
import List from "./components/list";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const data = ["item 1", "goku 3"];

  const handleButtonClick = () => {
    setIsLoading(!isLoading);
  };

  const handleListSelect = (element: string) => {
    console.log(element);
  };

  const contenido = data.length !== 0 && (
    <List data={data} onselect={handleListSelect} />
  );

  return (
    <Card>
      <CardBody title={"hello"} subtitle={"mundo"} />
      {contenido}
      <Button isLoading={isLoading} onClick={handleButtonClick}>
        {isLoading ? "Cargando..." : "Cargar"}
      </Button>
    </Card>
  );
}

export default App;
