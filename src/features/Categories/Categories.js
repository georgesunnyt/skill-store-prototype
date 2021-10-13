import './Categories.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useHistory } from 'react-router'
export default function Categories ({heading, items, category, image}) {

    const history = useHistory()

    return (
        <div className='categories-main-container'>
        <div className='categories-heading'>
            {image? <div><FontAwesomeIcon icon={image}></FontAwesomeIcon><span> {heading}</span></div>: <div>{heading}</div>}
        </div>
        <div className='categories-sub-container'>
            {items.map(item => 
                <div key={item.name} className='category' onClick={category?()=>history.push(`/category/${item.name}`,{params: item}) : ()=>history.push(`/skill/${item.name}`,{params: item})}>
                    <FontAwesomeIcon icon={item.image}></FontAwesomeIcon>
                    <div className='category-title'>{item.name}</div>
                </div>    
            )}  
        </div>
        </div>
    )

}