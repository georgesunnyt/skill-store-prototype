import './Skillstore.css'
import { faCalculator, faDiagnoses, faGraduationCap, faHelicopter, faSyringe } from '@fortawesome/free-solid-svg-icons'
import { faAndroid, faCodepen, faFly, faReact } from '@fortawesome/free-brands-svg-icons'
import Carousel from '../Carousel/Carousel'

export default function Skillstore() {

    const topskills = [
        {
            name: 'React JS',
            image: faReact,
            description: 'Coding with react js',
            utterances : ['Create a social media app with react', 'Create a dashboard using react', 'Create a skill store using react']
        },
        {
            name: 'Math tutor',
            image: faCalculator,
            description: 'Extensive math tutoring at your house',
            utterances: ['Teach me trigonometry', 'Teach me Integration', 'Teach me algebra']
        },
        {
            name: 'Nurse',
            image: faSyringe,
            description: 'Ask for medical support',
            utterances: ['Hey nurse help me with this injection', 'Hey nurse help me with this band aid', 'Hey nurse help me dress this wound']
        }
    ]

    const recentskills = [
        {
            name: 'Android developer',
            image: faAndroid,
            description: 'android dev who could make pretty much anything',
            utterances: ['Create an app to track my expenses', 'Create an app to track my workouts']
        },
        {
            name:'Helicopter pilot',
            image: faHelicopter,
            description:'expert chopper operator',
            utterances: ['Fly me to bangalore', 'Airlift me to a hospital']
        },
        {
            name:'Doctor',
            image: faDiagnoses,
            description: 'Doctor who can help with critical needs',
            utterances: ['Check my vitals', 'Do i need a surgery?']
        }
    ]

    const categories = [
        {
            name: 'Coding',
            image: faCodepen,
            skills: [{
                name: 'React JS',
                image: faReact,
                description: 'Coding with react js',
                utterances : ['Create a social media app with react', 'Create a dashboard using react', 'Create a skill store using react']
            },
            {
                name: 'Android developer',
                image: faAndroid,
                description: 'android dev who could make pretty much anything',
                utterances: ['Create an app to track my expenses', 'Create an app to track my workouts']
            }]
        },
        {
            name: 'Flying',
            image: faFly,
            skills: [{
                name:'Helicopter pilot',
                image: faHelicopter,
                description:'expert chopper operator',
                utterances: ['fly me to bangalore', 'airlift me to a hospital']
            }]
        },
        {
            name: 'Teaching',
            image: faGraduationCap,
            skills: [{
                name: 'Math tutor',
                image: faCalculator,
                desciption: 'Extensive math tutoring at your house',
                utterances: ['Teach me trigonometry', 'Teach me Integration', 'Teach me algebra']
            }]
        }
    ]

    return (
        <div className='skillstore-container'>
            <Carousel heading='Categories' category={true} items={categories}></Carousel>
            <Carousel heading='Top Skills' items={topskills}></Carousel>
            <Carousel heading='Recent Skills' items={recentskills}></Carousel>
        </div>
    )
}