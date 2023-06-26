import React from "react";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Divider, rgbToHex } from "@mui/material";
import { red } from "@mui/material/colors";

const ProfileDiv = styled("div")(({ theme }) => ({
  position: "fixed",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  marginBottom: theme.spacing(4),
  marginTop: "-60px",
}));

//   avatar: {
//     width: theme.spacing(10),
//     height: theme.spacing(10),
//     marginBottom: theme.spacing(2),
//   },

const UserProfile = () => {
  return (
    <ProfileDiv>
      <div
        style={{
          background: "white",
          width: "25%",
          height: "100vh",
          textAlign: "center",
          padding: "30px 10px 10px 10px",
          boxShadow: "5px 5px 20px gray",
        }}
      >
        <Avatar
          alt="User Avatar"
          src="https://images.pexels.com/photos/3090148/pexels-photo-3090148.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          sx={{width:66,height:66}}
        />
        <Typography variant="h6" color="textSecondary">
          John Doe
        </Typography>
        <Divider />
        <Typography color="textSecondary">john.doe@example.com</Typography>
      </div>
    </ProfileDiv>
  );
};

export default UserProfile;
