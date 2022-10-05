import { useEffect, useState } from "react";
import { Container, Content } from "./styles";
import imgHome from "../../assets/imgPrincipal.png";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Footer } from "../../components/Footer";
import { Card } from '../../components/Card';
import { api } from "../../service/api";
import Carousel from 'react-elastic-carousel';


export function Home() {

    const breakPoints = [
    { width: 1, itemsToShow: 2 },
    { width: 550, itemsToShow: 1.5 },
    { width: 768, itemsToShow: 2.45 },
    { width: 1200, itemsToShow: 3.45 },
  ];

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

    <Content  className="row--left">
      <div>
          
        <img src={imgHome} alt="" />
        <div>
          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          <div className="row--right"></div>
        </div>
      </div>


      
     
      {
        plates.filter(plate => plate.category == "Pratos principais").length > 0 &&
        <Section title ="Pratos Principais">
              
            {
              <Carousel className="plates" breakPoints={breakPoints} pagination={false}>
            {plates.filter(plates=> plates.category == "Pratos principais").map((item, index) =>(
              <Card key={String(index)} data={item} />))}
              
            </Carousel>
            
          }
        </Section>  
        } 

          {
            
            
            plates.filter(plate => plate.category == "Sobremesas").length > 0 &&
            <Section title ="Sobremesas">
              
            {
            <Carousel breakPoints={breakPoints} pagination={false}>
            {plates.filter(plates=> plates.category == "Sobremesas").map((item, index) =>(
              <Card key={String(index)} data={item} />))}
              
            </Carousel>
            
          }
              </Section>  
        } 
          
          {
            
            
            plates.filter(plate => plate.category == "Bebidas").length > 0 &&
            <Section title ="Bebidas">
              
            {
              <Carousel breakPoints={breakPoints} pagination={false}>
            {plates.filter(plates=> plates.category == "Bebidas").map((item, index) =>(
              <Card key={String(index)} data={item} />))}
              
            </Carousel>
            
          }
              </Section>  
        } 
       
    </Content>

    <Footer />
  </Container>
);
}
