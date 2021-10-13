import { useLocation } from 'react-router'
import Categories from '../Categories/Categories'
import './Category.css'

export default function Category () {

    const location = useLocation()
    const category = location.state.params

    return (
        <div className='category-main-container'>
            <Categories  image={category.image} heading={category.name} items={category.skills}></Categories>
            <Categories  heading='Top Skills' items={category.skills}></Categories>
            <Categories  heading='Recent Skills' items={category.skills}></Categories>
        </div>

    )
}