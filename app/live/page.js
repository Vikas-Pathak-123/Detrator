"use client";
import MiniDrawer from "@/components/MiniDrawer";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";


export default function Page() {
  return (
    <Box p={1} ml={10}>
      <h1>Hello, Live Page!</h1>

      <Typography variant="body1" gutterBottom>
        Work in progress...
      </Typography>
      <p>This page is currently under construction. Please check back later.</p>
      {/* Add your search functionality or content here */}
    </Box>
  );
}
