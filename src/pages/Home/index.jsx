import { useEffect, useState } from "react";
import { Container, Content, FrontCover } from "./styles";
import imgHome from "../../assets/imgPrincipal.png";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Footer } from "../../components/Footer";
import { Card } from '../../components/Card';
import { api } from "../../service/api";

export function Home() {

   
  const [search, setSearch] = useState('');
  const [plates, setPlates] = useState([]);
  let typePlates;

  useEffect(() => {
    async function fetchPlates() {
      const response = await api.get(
        `/plates?title=${search}&ingredient=${search}`
      );
      setPlates(response.data);
    }

    fetchPlates();
  }, 
  [search]);
    if (plates.length > 0) {
    typePlates = plates.map((e) => e);
  }
  console.log(typePlates);

  return (
    <Container>
    <Header setSearch={setSearch} />

    <Content >
       <FrontCover>
       <img src={imgHome} alt="" />
        <div>
          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
        </div>

        </FrontCover> 
       
      {
        plates.filter(plate => plate.category == "pratos principais").length > 0 &&
        <Section  title ="Pratos Principais">
         {plates.filter(plates=> plates.category == "pratos principais").map((item, index) =>(
          <Card key={String(index)} data={item} 
          />
          ))
          }            
          </Section>  
        } 

          {
            plates.filter(plate => plate.category == "sobremesas").length > 0 &&
            <Section title ="Sobremesas">
            
            {
           
            plates.filter(plates=> plates.category == "sobremesas").map((item, index) =>(
              <Card key={String(index)} data={item} 
              />
              ))
            }
             
              </Section>  
        } 
          
          {
          
            plates.filter(plate => plate.category == "bebidas").length > 0 &&
            <Section title ="Bebidas">
              
           
              
            {plates.filter(plates=> plates.category == "bebidas").map((item, index) =>(
              <Card key={String(index)} data={item} />))}
              
   
              </Section>  
        } 
       
    </Content>

    <Footer />
  </Container>
);
}
