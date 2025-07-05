import { useDispatch, useSelector } from 'react-redux';
import Container from '../components/Container';
import { useNavigate } from 'react-router-dom';
import { setActiveProductCat } from '../store/user/userSlice';

const Home = () => {
    const categories = useSelector(state => state.product.allCategories) || [];
    const foodCategories = categories?.filter(item => item.parent === "1");
    console.log(foodCategories)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleCatClick = (cat) => {
        dispatch(setActiveProductCat(cat));
        navigate("/productlisting");
    }

    return (
        <Container>
            <h1 className='text-center text-4xl sm:text-5xl  text-primary capitalize my-4 mb-7 yellowtail-font'>Always homemade, always fresh</h1> <hr className='h-1 bg-primary' />
            <div className='text-center'>
                <h3 className='text-[30px] mt-5 mb-3 text-center md:text-[45px] yellowtail-font leading-none'>Our Menu</h3>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mt-8 capitalize'>
                {foodCategories?.map(cat => (
                    <div onClick={() => handleCatClick(cat)} className='cursor-pointer duration-300 hover:opacity-[0.9]' key={cat.c_id}>
                        <img src={cat.icon} alt={cat.c_name} className='w-full rounded-md mb-3' />
                        <p className='sm:text-lg text-center playFont'>{cat.c_name}</p>
                    </div>
                ))}
            </div>

        </Container>
    )
}

export default Home
