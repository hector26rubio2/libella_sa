import { Image } from 'primereact/image';

import { Button } from 'primereact/button';
 
const Product= () => {

    return (
        <div class="grid">
          <div class="col-12"><h1> Nombre del producto</h1></div>
    <div class="col-6">
        
       <h1> informacion producto</h1>
    <div class="grid">
          
    <div class=" col-3 col-offset-3"> <Button label="Comprar" className="p-button-rounded p-button-help" />
</div>
    <div class=" col-4 col-offset"> 
    <Button label="Help" className="p-button-outlined p-button-help" />

        </div>
    </div>
    
    
    
    </div>
    <div class="col-6"><Image src="image1.png" template="Preview Content" alt="Image Text" /></div>
    </div>
    )
}

export default Product;