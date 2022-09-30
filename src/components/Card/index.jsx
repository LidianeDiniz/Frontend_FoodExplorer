import { Container } from './styles';
import { Button } from '../Button';
import { api } from '../../service/api';
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';
import { MdFavoriteBorder } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';


export function Card({ data }) {

    const imageURl = `${api.defaults.baseURL}/files/${data.image}`

    const { user } = useAuth();
    const navigate = useNavigate();

    function handleDetails(id) {
        navigate(`/details/${id}`);
    }

    function handleEditPlate(id) {
        navigate(`/edit/${id}`);
    }

    return (
        <Container>

            <button className='edit-plate' onClick={() => handleEditPlate(data.id)}>
                {user.is_admin === 1 && (
                    <FiEdit/>
                )} 
            </button>

            <img src={imageURl} alt={data.title} />

            <button type='button' onClick={() => handleDetails(data.id)}>
                <h3>{data.title} &gt;</h3>
            </button>
            <p>{data.description}</p>
            <strong>R$ {data.price}</strong>

            <div>
                <span>-</span>
                <span>0</span>
                <span>+</span>

                <Button title={"Incluir"}/>
            </div>
            
            <button className='favorites'>
                <MdFavoriteBorder/>
            </button>

        </Container>
    );
}