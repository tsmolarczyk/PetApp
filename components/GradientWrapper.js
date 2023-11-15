// GradientWrapper.js
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const GradientWrapper = ({ children }) => (
  <LinearGradient colors={["#6DD5FA", "#FF758C"]} style={{ flex: 1 }}>
    {children}
  </LinearGradient>
);

export default GradientWrapper;
