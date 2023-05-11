import { Container, Slider } from './styles';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useState } from 'react';

export function Section({title, children, items }) {
  const [ scrollX, setScrollX] = useState(30)
 


  function handleLeftArrow(e) {
    e.preventDefault();
    let x = scrollX + 150;
    if (x > 0){
      x = 0;
    }
    
    setScrollX(x);
  }

  function handleRightArrow(e) {
    e.preventDefault();
    let x = scrollX - 150;
    let listW = children.length *450;
    if((window.innerWidth - listW) > x){

      x= (window.innerWidth - listW) - 15;
    }
    setScrollX(x)
    
  }

   return (
    <Container>
      <h2>{title}</h2>

      <Slider>
        <button 
          className='btn-left'
          onClick={handleLeftArrow}
        >
          <FiChevronLeft size={50}/>
        </button>
        <div style={{marginLeft: scrollX,
        width:children.length *150}}>
    {children}
  </div>


        <button 
          className='btn-right'
          onClick={handleRightArrow}
        >
          <FiChevronRight size={50}/>
        </button>
      </Slider>

    </Container>
   )
}