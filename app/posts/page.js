"use client";
import { Box } from "@mui/system";
import ImgPostCard from "@/components/ImgPostCard";
import ReviewCard from "@/components/ReviewCard";
import { useState, useEffect } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function Page() {
  const [data, setData] = useState([]);
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const jsonData = await response.json();
        setData(jsonData);
        console.log(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
  useEffect(() => {
    fetchData();
  }, []);






  return (
    <Box
      style={{
        display: "flex",
        flexWrap: "wrap",
        margin: "2% 20% 2% 10% ",
        // border: "red solid 10px",
      }}
    >
      {/* <h1>Hello, Dashboard Page!</h1> */}
      {/* <ImgPostCard /> */}
      {/* <div style={{margin:"auto"}}> */}
        {data.map((currItem) => {
          return <ReviewCard key={currItem.id} review={currItem} />;
        })}
      {/* </div> */}
    </Box>
  );
}
