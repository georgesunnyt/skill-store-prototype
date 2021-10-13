import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useLocation } from 'react-router'
import './Skill.css'

export default function Skill (props) {

    const location = useLocation()
    const skill = location.state.params

    return (
        <div className='skill-page'>
            <div className='skill-container'>
                <div className='skill-heading'>
                    <FontAwesomeIcon icon={skill.image}></FontAwesomeIcon>
                    <span> {skill.name}</span>
                </div>
                <div className='description-container'>
                    <div className='description-heading'>Description</div>
                    <div className='description'>{skill.description}</div>
                    <div className='utterance-heading'>Utterances</div>
                    {skill.utterances.map(utterance => <div className='utterance' key={utterance}>{utterance}</div>)}
                </div>
            </div>
        </div>
    )   
}