"use client";

import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib.js";
import * as THREE from "three";
import { cn } from "@/lib/utils";

// Initialize RectAreaLight uniforms
if (typeof window !== "undefined") {
RectAreaLightUniformsLib.init();
}