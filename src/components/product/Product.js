import { Image } from 'primereact/image';

import { Button } from 'primereact/button';
 
const Product= () => {
    const image = require("./thestocks.jpg").default;
    return (
        <div class="grid">
          <div class="col-12"><h1> Nombre del producto</h1></div>
    <div class="col-6">
    <p className="m-0" style={{lineHeight: '1.5'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                    quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
           
    <div class="grid">
          
    <div class=" col-3 col-offset-3"> <Button label="Comprar" className="p-button-rounded p-button-help" />
</div>
    <div class=" col-4 col-offset"> 
    <Button label="Agregar al carrito" className="p-button-rounded p-button-help" />

        </div>
    </div>
    
    
    
    </div>
    <div class="col-6"><Image src={image} template="Preview Content" alt="Image Text" /></div>
    </div>
    )
}

export default Product;