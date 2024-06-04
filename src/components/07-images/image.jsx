import React from 'react'
import imgFrontend from "../../assets/frontend.jpg"
import imgSalesforce from "../../assets/salesforce.png"
import imgHome from "../../assets/home.svg"
const Image = () => {
  return (
    <div>
        <h2>Static Images</h2>
        <p>
            Eger image ler public kalosrunde ise ve herhangi bir optimizxasyona ihticaz yokta
             bu yontem kullanılabilir.
        </p>

        <img src="vite.svg" alt="" />
        <img src={imgFrontend} alt="" />
        <img src={imgSalesforce} alt="" />
        <img src={imgHome} alt="" />
    </div>

  )
}

export default Image