import * as axios from "axios";
import React, { useState } from "react";

function toArrObj(arr) {
  let arrObj = [];
  for (let i = 0; i < arr.length; i++) {
    let tempObj = {
      key: i.toString(),
      name: arr[i].name,
      description: arr[i].description,
      image: arr[i].image,
      breedId: arr[i].id,
    };
    arrObj.push(tempObj);
  }
  return arrObj;
}

const instance = axios.create({
  baseURL: "https://api.thecatapi.com/v1/",
  async: true,
  crossDomain: true,
  method: "GET",
  headers: {
    "x-api-key": "ea505b5c-e873-4b18-86ca-d855815a2cbc",
  },
});

export const getBreeds = () => {
  return instance
    .get(`breeds?attach_breed=0`)
    .then((res) => {
      return res.data;
    })
    .then((data) => {
      console.log(data);
      const tempItem = toArrObj(data);
      // setBreeds(tempItem);
    })
    .catch((error) => {
      console.log("Error", error);
    });
  return tempItem;
};
