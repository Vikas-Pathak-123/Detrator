"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import CommentIcon from "@mui/icons-material/Comment";
import { Avatar } from "@mui/material";
import { Box } from "@mui/system";


const PostCard = styled(Card)(({ theme }) => ({
  maxWidth: "60%",
  marginLeft: "10%",
  marginBottom: theme.spacing(2),
}));

const PostHeader = styled(CardHeader)(({ theme }) => ({
  paddingBottom: theme.spacing(1),
}));

const PostImage = styled(CardMedia)(({ theme }) => ({
  height: 0,
  paddingTop: "56.25%", // 16:9 aspect ratio
}));

const PostContent = styled(CardContent)(({ theme }) => ({
  paddingBottom: theme.spacing(2),
}));

const PostActions = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: theme.spacing(2),
}));

export default function ImgPostCard({ userProfile, userName, imageSrc, caption }) {
  return (
    <>
      <PostCard sx={{ pt: 2, pl: 5, pr: 5, pb: 2 }}>
        <Box>
          <Avatar
            alt="User Avatar"
            src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            sx={{ width: 66, height: 66, mb: 1 }}
          />
          <Typography color="text.primary" fontSize={40}>
            {userName}
          </Typography>
        </Box>

        <img
          style={{
            borderRadius: "5px",
            maxWidth: "100%",
            maxHeight: "100%",
            width: "auto",
            height: "auto",
          }}
          src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Post Image"
        />
        <PostContent>
          <Typography variant="body1" color="text.primary">
            {caption}
          </Typography>
        </PostContent>
        <PostActions>
          <IconButton aria-label="like">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton aria-label="comment">
            <CommentIcon />
          </IconButton>
        </PostActions>
      </PostCard>
    </>
  );
}
