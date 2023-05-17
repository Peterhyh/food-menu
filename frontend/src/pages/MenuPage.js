
import StirFriedNoodles from '../app/img/stirFriedNoodles.png';
import ItemCard from '../components/ItemCard';


const MenuPage = () => {
    const stirFriedNoodlesTitle = 'StirFriedNoodles';
    const stirFriedNoodlesImg = StirFriedNoodles;
    return (
        <div className='menuPageContainer'>
            <h1>Menu</h1>

            <ItemCard foodImg={stirFriedNoodlesImg} foodTitle={stirFriedNoodlesTitle} />

        </div>
    )
};

export default MenuPage;