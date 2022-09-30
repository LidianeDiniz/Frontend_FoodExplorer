import { Container } from "./styles";
import Lettuce from "../../assets/alface.png";
import Plum from "../../assets/ameixa.png"
import Almonds from "../../assets/amendoas.png"
import Anise from "../../assets/aniz.png";
import Coffee from "../../assets/cafe.png";
import Shrimp from "../../assets/camarao.png";
import LowerLeg from "../../assets/canela.png";
import EggWhites from "../../assets/claras.png"
import Damascus from "../../assets/damasco.png"
import Flour from "../../assets/farinha.png"
import Lemon from "../../assets/limao.png";
import Apple from "../../assets/maca.png";
import PassionFruit from "../../assets/maracuja.png";
import Pasta from "../../assets/massa.png";
import Bread from "../../assets/pao.png";
import BreadNaan from "../../assets/paonaan.png";
import Cucumber from "../../assets/pepino.png";
import Peach from "../../assets/pessego.png"
import Pesto from "../../assets/pesto.png";
import Ham from "../../assets/presunto.png";
import Radish from "../../assets/rabanete.png";
import Arugula from "../../assets/rucula.png";
import Tomato from "../../assets/tomate.png";
import Whiskey from "../../assets/whiskey.png";

export function Ingredients({ ingredient }) {
  function fetchImageIngredient(name) {
    let ingredient = name.toLowerCase().trim()
    
    let result;
    
    if (ingredient == "alface") {
      return result = Lettuce
      
    } else if (ingredient == "ameixa") {
      return result = Plum

    } else if (ingredient == "amêndoas") {
      return result = Almonds

    } else if (ingredient == "aniz") {
      return result = Anise  

    } else if (ingredient == "café") {
      return result = Coffee

    } else if (ingredient == "camarão") {
      return result = Shrimp

    } else if (ingredient == "canela") {
      return result = LowerLeg
      
    } else if (ingredient == "claras") {
      return result = EggWhites 

    } else if (ingredient == "damasco") {
      return result = Damascus

    } else if (ingredient == "farinha") {
      return result = Flour

    } else if (ingredient == "limão") {
      return result = Lemon

    } else if (ingredient == "maçã") {
      return result = Apple

    } else if (ingredient == "maracujá") {
      return result = PassionFruit

    } else if (ingredient == "massa") {
      return result = Pasta

    } else if (ingredient == "pão") {
      return result = Bread

    } else if (ingredient == "pão naan") {
      return result = BreadNaan

    } else if (ingredient == "pepino") {
      return result = Cucumber

    } else if (ingredient == "pêssego") {
      return result = Peach

    } else if (ingredient == "pesto") {
      return result = Pesto

    } else if (ingredient == "presunto") {
      return result = Ham

    } else if (ingredient == "rabanete") {
      return result = Radish

    } else if (ingredient == "rúcula") {
      return result = Arugula

    } else if (ingredient == "tomate") {
      return result = Tomato

      
    } else if (ingredient == "whiskey") {
      return result = Whiskey
   
    } else {
      return result = Apple
    }}
  
  
  let result = fetchImageIngredient(ingredient)
  
    return (
      <Container>
        <img src={result} alt="Ingredientes que são usados no seu prato." />
        <span className="ingredient-name">{ingredient}</span>
      </Container>
    );
  }