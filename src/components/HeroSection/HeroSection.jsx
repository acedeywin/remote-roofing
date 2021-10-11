import React, {useEffect, useRef} from 'react'
import { ImageBg , HeroContainer, IconDiv, TextSpan, HeroBg, HeroFeatures, HeroContent, HeroH1, HeroP, HeroInput, HeroBtn, InputSpan, LocationIcon, FeatureDiv, MdSmokeFreeIcon, BsFilesIcon, BsToolsIcon} from './HeroSection.styles'
import image from '../../images/rr-img1.jpg'

const apiKey = process.env.REACT_APP_API_KEY
const url = `https://maps.googleapis.com/maps/api/js`

const loadAsyncScript = (src) => {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        Object.assign(script, {
            type: "text/javascript",
            async: true,
            src
        })
        script.addEventListener("load", () => resolve(script))
        document.head.appendChild(script)
    })
}


const HeroSection = () => {

    const searchInput = useRef(null)

    //init google map script
    const initMapScript = () => {
        //if script already loaded
        if(window.google) return Promise.resolve()

        const src = `${url}?key=${apiKey}&libraries=places&v=weekly`

        return loadAsyncScript(src)
    }

    const onchangeAddress = (autocomplete) => {
        const location = autocomplete.getPlace()

        return location
    }

    //init autocomplete
   

    //load map script after mounted
    useEffect(() => {

        const initAutocomplete = () => {
            if(!searchInput.current) return;
            const autocomplete = new window.google.maps.places.Autocomplete(searchInput.current)
            autocomplete.setFields(["address_component", "geometry"])
            autocomplete.addListener("place_changed", () => {onchangeAddress(autocomplete)})
          }
        initMapScript().then(() => initAutocomplete())
        
    }, [])

    return (
        <HeroContainer>
            <HeroBg>
                <ImageBg src={image} />
            </HeroBg>
            <HeroContent>
                <HeroH1>Roof inspection made remote and easy</HeroH1>
                <HeroP>Get your roof inspected remotely and connect with our trusted roofers</HeroP>

                <InputSpan>
                <LocationIcon/>
                <HeroInput ref={searchInput} type="text" name='input' placeholder="Enter Your Address" /> 
                <HeroBtn>Get Inspection</HeroBtn>
                </InputSpan>
            </HeroContent> 

            <HeroFeatures>
                <FeatureDiv>
                    <IconDiv>
                      <MdSmokeFreeIcon />
                    </IconDiv>
                    <TextSpan>
                      Free<br/>Inspection
                    </TextSpan>

                    <IconDiv>
                      <BsFilesIcon/>
                    </IconDiv>
                    <TextSpan>
                       File a Claim
                    </TextSpan>

                    <IconDiv>
                     <BsToolsIcon/>
                    </IconDiv> 
                    <TextSpan>
                       Replace or<br/>Repair a Roof 
                    </TextSpan>         
                </FeatureDiv>
            </HeroFeatures>
            
        </HeroContainer>
    )
}

export default HeroSection
