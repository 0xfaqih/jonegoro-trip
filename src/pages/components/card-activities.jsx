import React from "react";
import { Card, CardHeader, CardContent, CardFooter, Link } from "framework7-react";

const CardActivities = () => (
   <Card className="card-activities">
      <CardHeader
        valign="bottom"
      >
        <img src="img/activities.png" />
      </CardHeader>
      
      <CardContent>
        <h4>Judul kegiatan</h4>
        <div className="footer-clock">
          <i class="material-icons">schedule</i>
          <span>Jam tayang</span>
        </div>
      </CardContent>
    </Card>
);

export default CardActivities;