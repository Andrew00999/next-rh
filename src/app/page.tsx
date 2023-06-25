"use client";
import React, { useContext } from "react";
import { DataContext } from "@/context/DataContext";

export default function Home() {
  const { dataState } = useContext(DataContext);
  console.log("Page global state >>>", dataState);

  return <h1>Response: {dataState.data.data?.attributes.test}</h1>;
}
