import { useEffect, useState } from "react";
import { Container, Content } from "./styles";
import imgHome from "../../assets/imgPrincipal.png";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Footer } from "../../components/Footer";
import { Card } from '../../components/Card';
import { api } from "../../service/api";






export function Home() {
  const [search, setSearch] = useState('');
  const [plates, setPlates] = useState([]);

  useEffect(() => {
    async function fetchPlates() {
      const response = await api.get(
        `/plates?title=${search}&ingredient=${search}`
      );
      setPlates(response.data);
    }

    fetchPlates();
  }, [search]);

  return (
    <Container>
    <Header setSearch={setSearch} />

    <Content>
      <div>
        <img src={imgHome} alt="" />
        <div>
          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
        </div>
      </div>

      {
            plates.filter(plates => plates.category == "pratos principais").length > 0 &&
            <Section title="Pratos principais">
              {
                plates.filter(plates => plates.category == "pratos principais").map(plates => (
                  <Card
                    key={String(plates.id)}
                    data={plates} 
                  />
                ))
              }
            </Section>
          }

      

    </Content>

    <Footer />
  </Container>
);
}
