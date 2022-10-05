import { Container, Form, InputWrapper, ImgPlate, InputItem } from "./styles";
import { IoIosArrowBack } from "react-icons/io";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { IngredientsItem } from "../../components/IngredientsItem";
import { Textarea } from "../../components/Textarea";
import { MdOutlineFileUpload } from "react-icons/md";
import Logo from "../../assets/logo.svg";
import Pedido from "../../assets/pedido.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../service/api";

export function Edit() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function fetchPlate() {
      const response = await api.get(`/plates/${params.id}`);

      const { title, description, price, ingredients } = response.data;
      setTitle(title);
      setDescription(description);
      setPrice(price);
      setIngredients(ingredients.map(item => item.name));
    }

    fetchPlate();
  }, []);


  function handleAddIngredient() {
    setIngredients((prevState) => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredient(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    );
    setNewIngredient("");
  }

  async function handleEditPlate() {
    if (!title || !price || !description) {
      alert("Favor preecha todos os campos!");
    }

    if (ingredients.length < 1) {
      alert("Adicione no mínimo 1 ingrediente!");
    } else {
      const formData = new FormData();
      formData.append("image", imageFile);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);

      for (let i = 0; i < ingredients.length; i += 1) {
        formData.append("ingredients", ingredients[i]);
      }

      console.log(ingredients);

      await api
        .put(`/plates/${params.id}`, formData)
        .then(alert("Prato editado com sucesso!"))
        .catch((error) => {
          if (error.response) {
            alert(error.response.data.message);
          } else {
            alert("Erro ao criar o prato");
          }
        });

      navigate(-1);
    }
  }

  async function handleRemovePlate() {
    const isConfirm = confirm("Tem certeza que deseja remover?");

    if(isConfirm) {
      await api.delete(`/plates/${params.id}`);
      navigate(-1);
    }
  }

  function backToHome() {
    navigate(-1);
  }

  return (
    <Container>
      <header>
        <div className="logo">
          <img src={Logo} alt="Logo" />
          <h1>food explorer</h1>
        </div>

        <div className="buttons">
          <span>Administrador</span>
          <Button icon={Pedido} title="Meu pedido (0)" />
        </div>
      </header>

      <main>
        <button className="button-back" onClick={backToHome}>
          <IoIosArrowBack />
          voltar
        </button>
        <h2>Editar Prato</h2>
        <Form>
          <InputWrapper>
            <div>
              <span>Selecione imagem</span>
              <ImgPlate>
                <label htmlFor="file-image">Imagem do prato</label>

                <Input
                  id="file-image"
                  type="file"
                  placeholder="Selecione imagem"
                  icon={MdOutlineFileUpload}
                  onChange={(e) => setImageFile(e.target.files[0])}
                />
              </ImgPlate>
            </div>

            <div className="flex">
              <label htmlFor="event-name">Nome</label>
              <Input  
                id="event-name"
                type="text"
                placeholder="Ex.: Salada Caesar"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>
          </InputWrapper>

          <InputWrapper>
            <div className="flex">
              <label htmlFor="plate-ingredientes">Ingredientes</label>

              <InputItem>
                {ingredients.map((ingredient, index) => (
                  <IngredientsItem
                    key={String(index)}
                    onChange={(e) => setNewIngredient(e.target.value)}
                    value={ingredient}
                    onClick={() => handleRemoveIngredient(ingredient)}
                  />
                ))}
                <IngredientsItem
                  isNew
                  placeholder="Adicionar"
                  onChange={(e) => setNewIngredient(e.target.value)}
                  value={newIngredient}
                  onClick={handleAddIngredient}
                />
              </InputItem>
            </div>

            <div>
              <label htmlFor="plate-price">Preço</label>
              <Input
                type="text"
                id="plate-price"
                placeholder="R$ 00,00"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              />
            </div>
          </InputWrapper>

          <InputWrapper>
            <div className="textarea">
              <label htmlFor="text-area">Descrição</label>
              <Textarea
                id="text-area"
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                onChange={(e) => setDescription(e.target.value)}
                defaultValue={description}
              />
            </div>
          </InputWrapper>

          <div className="buttons">
            <Button 
            className="button-remove"
            title="Remover prato"
            onClick={handleRemovePlate}
            />
            
            <button type="button" onClick={handleEditPlate}>
              Adicionar pedido
            </button>
          </div>
        </Form>
      </main>

      <Footer />
    </Container>
  );
}
