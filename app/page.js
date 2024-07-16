"use client";
import React, { useEffect, useState } from "react";

const LandingPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  const getData = async () => {
    const response = await fetch("/api/products/working", {
      method: "GET",
    });
    const data = await response.json();
    setData(data);
    console.log(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return <div>{isLoading ? <h1>Loading...</h1> : <h1>{data.message}</h1>}</div>;
};

export default LandingPage;
