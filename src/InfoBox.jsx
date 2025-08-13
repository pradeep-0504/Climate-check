import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import "./InfoBox.css";

export default function InfoBox({info}) {
    const Hot_URL = "https://images.unsplash.com/photo-1572246538688-3f326dca3951?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHN1bW1lcnxlbnwwfHwwfHx8MA%3D%3D";

    const cold_URL="https://images.unsplash.com/photo-1519944159858-806d435dc86b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29sZHxlbnwwfHwwfHx8MA%3D%3D";

    const Rainy_URL="https://media.istockphoto.com/id/2166330742/photo/mumbai-monsoon-man.webp?a=1&b=1&s=612x612&w=0&k=20&c=XJBghA5CIenFGXTSGy62e2xAplxVCJOjj_39h2FKUWs=";

  return (
    <div className="info-box">
    <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            objectfit="cover"
            image={info.humidity > 78 ? Rainy_URL : info.temp > 25 ? Hot_URL : cold_URL}
            alt="weather report"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city} {info.temp > 25 ? "🌞" : info.humidity > 78 ? "🌧️" : "❄️"}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }} component={"span"}>
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}C</p>
              <p>Max Temp = {info.tempMax}&deg;C</p>
              <p>Min Temp = {info.tempMin}&deg;C</p>
              <p>Feels Like = {info.feels_like}&deg;C</p>
              <p>The weather is described as {info.weather} and feels like {info.feels_like}&deg;C</p>

            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
