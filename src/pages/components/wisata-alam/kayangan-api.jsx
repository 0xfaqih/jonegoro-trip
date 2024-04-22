import React from "react";
import { Card } from "framework7-react";

const CardRecom = () => (
   <Card className="card-recom">
      <div className="card-recom-content">
         <img src="img/kayanganapi.png"/>
         <div className="card-recom-content-inner">
            <h4>Kayangan Api</h4>
            <div className="recom-location">
               <img src="icons/location.png" alt="" srcset="" />
               <p>Desa Sendang harjo, Kecamatan Ngasem, Kabupaten Bojonegoro, Jawa timur</p>
            </div>
            <div className="recom-rating">
               <img src="icons/star.png" alt="" srcset="" />
               <p>3.4</p>
            </div>
         </div>
      </div>
    </Card>
);

export default CardRecom;