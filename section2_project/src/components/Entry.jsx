export default function Entry(props){
   
    return (
     <article className="journal">

            {/* image section */}
           <div  className="main">
           <img 
           className="mount" 
           src={props.entry.img.src} 
           alt={props.entry.img.alt}
           />
           </div>
                 

           
           {/* Content Section */}      
        <div className="content">

            {/* Meta Row */}
            <div className="meta">
              <img 
              className="icon" 
              src="src/assets/marker.png" 
              alt="location icon"
              />
            

              <span>{props.entry.country}</span>
              <a 
              href={props.entry.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              >View on google maps</a>
            </div>

             {/* Title */}
              <h2>{props.entry.title}</h2>

               {/* Description */}
              <p>{props.entry.text}</p>
        </div>
           
     </article>
    )
}