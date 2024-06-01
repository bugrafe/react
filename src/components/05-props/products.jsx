import React from 'react'
import Productcard from './product-card';
const Products = () => {
  return (
    <div>
        <Productcard title="Sony X5 Headset" price="$54.99">
            Lorem ipsum dolor sit amet consectetur <b>adipisicing</b> elit. Aperiam, itaque.
        </Productcard>

        <Productcard title="Samsung X7 Headset"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, itaque."
        price="$44.99"/>
    </div>
  )
}

export default Products