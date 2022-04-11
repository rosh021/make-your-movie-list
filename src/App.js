import "./App.css";
import { Title } from "./Components/title/Title";
import { Container } from "react-bootstrap";
import { CostumeForm } from "./Components/form/CostumeForm";
import { useState } from "react";

import { fetchApi } from "./Components/axiosHelper/apiFetch";
import { CustomCard } from "./Components/customCard/CustomeCard";

function App() {
  const [list, setList] = useState([]);

  const getData = async (search) => {
    const { data } = await fetchApi(search);
    const newList = data.results[0];

    setList([...list, newList]);
  };

  return (
    <div className="wrapper">
      <Container>
        <Title />
        <CostumeForm getData={getData} />
      </Container>
      <hr />
      <CustomCard list={list} />
    </div>
  );
}

export default App;
