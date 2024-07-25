import Cards from "./Card"

export default function Tours({tours,nothandler}){
    return(
        <div className="container">
            <div>
                <h2 className="title">Plan With Rihan</h2>
            </div>
        <div className="cards">
           {
            tours.map((tour)=>{
                return <Cards key={tour.id} {...tour} nothandler={nothandler}></Cards> 
            })
           }
        </div>
       </div>
        
    )
}