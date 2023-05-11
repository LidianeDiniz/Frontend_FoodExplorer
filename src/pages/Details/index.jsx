import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Content } from "./styles";
import Pedido from "../../assets/pedido.svg";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { api } from "../../service/api";

import { Ingredients } from "../../components/Ingredients";
import { FiChevronLeft, FiMinus, FiPlus } from "react-icons/fi";

export function Details() {
  const [data, setData] = useState(null);
  const params = useParams();
  console.log(data);

  const imageURl = data && `${api.defaults.baseURL}/files/${data.image}`;

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  useEffect(() => {
    async function fetchPlate() {
      const response = await api.get(`/plates/${params.id}`);
      setData(response.data);
    }

    fetchPlate();
  }, []);

  return (
    <Container>
      <Header />

      <main>
        <div>
          <button className="backToPage" onClick={handleBack}>
            <FiChevronLeft size={35} />
            Voltar
          </button>
        </div>

        {data && (
          <Content>
            <img
              className="plate"
              src={imageURl}
              alt="`image de ${data.title}`"
            />

            <div className="information">
              <div className="description">
                <h2>{data.title}</h2>
                <p>{data.description}</p>

                {data.ingredients.map((ingredient) => (
                  <Ingredients
                    key={String(ingredient.id)}
                    ingredient={ingredient.name}
                  />
                ))}
              </div>

              <div className="price">
                <strong>R$ {data.price}</strong>
                <button className="btn">
                  <FiMinus size={25} />
                </button>

                <span>01</span>

                <button className="btn">
                  <FiPlus size={25} />
                </button>

                <Button icon={Pedido} title="incluir" />
              </div>
            </div>
          </Content>
        )}
      </main>
      <Footer />
    </Container>
  );
}
