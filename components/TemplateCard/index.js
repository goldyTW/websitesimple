import React, { useEffect, useState } from "react";

function TemplateCard({img, name, id, link, selected, setSelected }){
    const [clicked, setclicked] = useState(false);
    let x;
    
    useEffect(() => {
        x = localStorage.getItem('cart');
        
        if(x != null ){
            let cart = JSON.parse(x);
            cart.forEach((element) => {
                element == id &&
                setclicked(!clicked)
              });
        }        
      }, [])

    function handleAdd(idnya) {
        selected.push(idnya)
        setclicked(!clicked)
        // setSelected([...selected, idnya])
        localStorage.setItem("cart", JSON.stringify(selected));
        window.location.reload()
     }
   
     function handleRemove(idnya) {
       const found = selected.indexOf(idnya);
       if (found > -1) {
         selected.splice(found, 1);
         localStorage.setItem("cart", JSON.stringify(selected));
       }
       setclicked(!clicked)
       setSelected([...selected])
     }
      
    return(
        <div className="col-md-4 col-12 px-4 py-xl-2 py-4">
            <div className="cardTemplate align-self-center text-center p-0">
                <img className='p-0' src={img} />
                <div className="titleheight">
                    <h4 className="titletemplate p-4">{name}</h4>
                </div>
                <div className="row">
                    <div className="col-12 align-self-center">
                       {
                        !clicked ?
                            <button className='btn py-2 px-4 m-1 m-lg-2 btn-beli' onClick={() => handleAdd(id)}>Tambah</button>
                            :
                            <button className='btn py-2 px-4 m-1 m-lg-2 btn-beliSelected' onClick={() => handleRemove(id)}>
                            Hapus</button>
                        }
                        <a href={link} rel="noreferrer" target="_blank" className="btn btn-lihat px-4 py-2 m-1 m-lg-2">Lihat</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TemplateCard;