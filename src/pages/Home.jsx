import React, {useState} from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const links = [{
        id: 1,
        to: "residential",
        text: "Home"
    },{
       id: 2,
       to: "solar",
       text: "Services" 
    },{
       id: 3,
       to: "commercial",
       text: "How It Works" 
    }]

    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle} links={links} />
            <Navbar toggle={toggle} links={links} />
            <HeroSection/>
        </div>
    )
}

export default Home
