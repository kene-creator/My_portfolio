import React from "react";
import { Html, useProgress } from "@react-three/drei";
import { CircularProgress, Box, Typography } from "@mui/material";

function CircularProgressWithLabel(props) {
  const val = parseFloat(props.value);
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        value={val}
        thickness={6}
        color="secondary"
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" color="white" fontWeight="bold">
          {`${parseFloat(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load"></span>
      <div
        style={{
          fontSize: 14,
          color: "#f1f1f1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        <CircularProgressWithLabel value={progress.toFixed(0)} />
      </div>
    </Html>
  );
};

export default Loader;
