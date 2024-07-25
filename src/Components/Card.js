import { useState } from "react";


export default function Cards({id,name,info,image,price,nothandler}){

    const[readmore,setreadmore]=useState(false);
    const description=readmore ? info:`${info.substring(0,200)}...`
    

    function readmorehandler(){
        setreadmore(!readmore);
    }


    return(
        <div className="Card">
        <img className="image" src={image}></img>
         <div className="tour-info">
            <div className="tour-det">
                <h4 className="tour-price">{price}</h4>
                <h4 className="tour-name">{name}</h4>
            </div>
            <div className="description">
                {description}
                <span className="read-more" onClick={readmorehandler}>
                    {readmore ? `ShowLess`:`ShowMore`}
                </span>
            </div>
         </div>
        <button className="button" onClick={()=>nothandler(id)}>Not Interested</button>
        </div>
    );
}