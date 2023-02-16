import { CssBaseline } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
type MainProps = {
  className?: string;
  children: React.ReactNode;
};

const MainPage: React.FC<MainProps> = ({ children, className }) => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ backgroundColor: "#f7f7f7" }}>
        <Box sx={{ bgcolor: "#ebe4e4" }}>{children} </Box>
      </Container>
    </>
  );
};

export default MainPage;
