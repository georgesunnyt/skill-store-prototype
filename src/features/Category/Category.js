import { useLocation } from 'react-router'
import Carousel from '../Carousel/Carousel'
import './Category.css'

export default function Category () {

    const location = useLocation()
    const category = location.state.params

    return (
        <div className='category-main-container'>
            <Carousel  image={category.image} heading={category.name} items={category.skills}></Carousel>
            <Carousel  heading='Top Skills' items={category.skills}></Carousel>
            <Carousel  heading='Recent Skills' items={category.skills}></Carousel>
        </div>

    )
}