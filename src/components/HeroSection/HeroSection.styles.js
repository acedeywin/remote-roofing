import styled from "styled-components";
import {ImLocation2} from 'react-icons/im'
import { MdSmokeFree } from "react-icons/md";
import { BsFiles, BsTools } from "react-icons/bs";

export const HeroContainer = styled.div`
  display: flex;
  height: 100vh;
`
export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80%;
  overflow: hidden;
`
export const ImageBg = styled.img`
  display: flex;
  width: 100%;
  height: 100vh;
`
export const HeroContent = styled.div`
  z-index: 3;
  width: auto;
  position: absolute;
  top: 0;
  left: 0;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  margin: 10rem 0 0 18.5rem;

  @media screen and (max-width: 1024px){
    margin: 20rem 0 0 5rem;
  }

  @media screen and (max-width: 768px){
    margin: 10rem 0 0 5rem;
  }

@media screen and (max-width: 425px){
  margin-left: 1rem;
  padding: 8px 6px;
}

@media screen and (max-width: 375px){
  margin-left: 10px;
}
`

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;

  @media screen and (max-width: 768px){
    font-size: 30px;
  }

  @media screen and (max-width: 480px){
      font-size: 26px;
  }

  @media screen and (max-width: 425px){
    font-size: 22px;
  }
`

export const HeroP = styled.p`
  margin-top: 20px;
  color: #fff;
  font-size: 22px;

  @media screen and (max-width: 768px){
    font-size: 18px;
  }

  @media screen and (max-width: 425px){
    font-size: 13px;
  }
`

export const InputSpan = styled.span`
  display: flex;
  margin-top: 2rem;
  background-color: #fff;
  width: 66.1%;
  padding: 3px 0 3px 8px;
  border-radius: 50px 50px;

  @media screen and (max-width: 1024px){
    width: 66.5%;
  }

  @media screen and (max-width: 768px){
    width: auto;
  }

  @media screen and (max-width: 425px){
    width: auto;
  }
`

export const LocationIcon = styled(ImLocation2)`
  color: #1155cc;
  font-size: 30px;
  margin-top: 14px;
`

export const HeroInput = styled.input`
  display: flex;
  padding: 8px 100px 8px 20px;
  border: none;
  border-radius: 50px 0 0 50px;
  font-size: 16px;


  &::-webkit-input-placeholder {
    font-size: 16px;
    paddding-right: 6rem;
  }

  @media screen and (max-width: 425px){
    padding: 2px 20px;
  }

  @media screen and (max-width: 320px){
    font-size: 10px;
    padding-left: 20px;
  }
`
export const HeroBtn = styled.button`
  padding: 20px;
  font-size: 1rem;
  font-weight: 700;
  background: #1155cc;
  color: #fff;
  border: 2px solid #fff;
  padding 20px 55px;
  border-radius: 50px 50px;
  
  &:hover{
    cursor: pointer;
  }

  @media screen and (max-width: 425px){
    padding: 20px 20px;
  }

  @media screen and (max-width: 375px){
    padding: 10px 8px;
  }
`
export const FeatureDiv = styled.div`
  color: #fff;
  margin-left: 2rem;
  display: flex;
`

export const IconDiv = styled.div`
@media screen and (max-width: 425px){
  margin-right: 3rem; 
}
`

export const HeroFeatures = styled.div`
z-index: 3;
width: 60%;
position: absolute;
top: 0;
left: 0;
background: #1155cc;
padding: 40px 24px;
display: flex;
flex-direction: column;
margin: 37rem 0 0 18.5rem;
border-radius: 5px;

@media screen and (max-width: 1024px){
  margin: 45rem 0 0 6rem;
  width: 80%;
}

@media screen and (max-width: 768px){
  margin: 33rem 0 0 5rem;
  width: 80%;
  padding: 30px 0px 
}

@media screen and (max-width: 425px){
  margin: 33rem 0 0 3rem;
  width: 80%;
 justify-content: center;
 align-items: center
}

@media screen and (max-width: 320px){
  margin-left: 2rem;
}
`

export const MdSmokeFreeIcon = styled(MdSmokeFree)`
 font-size: 5rem;

 @media screen and (max-width: 768px){
  font-size: 3rem;
}
`
export const BsFilesIcon = styled(BsFiles)`
font-size: 5rem;

@media screen and (max-width: 768px){
  font-size: 3rem;
}
`
export const BsToolsIcon = styled(BsTools)`
font-size: 5rem;

@media screen and (max-width: 768px){
  font-size: 3rem;
}
`

export const TextSpan = styled.span`
margin: 1.2rem 3.5rem 0 0;
padding-left: 10px;

@media screen and (max-width: 1024px){
  margin-right: 2rem;
}

@media screen and (max-width: 768px){
  margin-right: 3rem; 
}

@media screen and (max-width: 425px){
  display: none 
}
`

