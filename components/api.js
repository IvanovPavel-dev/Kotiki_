import * as axios from "axios";
import React, { useState, useEffect } from "react";

const postData = {
  image_id: "",
  sub_id: "ap-39",
};
const missingBreedUrl =
  "https://media.istockphoto.com/vectors/the-declaration-of-the-disappearance-of-a-beloved-cat-the-runaway-is-vector-id1210366497?k=6&m=1210366497&s=612x612&w=0&h=nhnf9Cvn4WUOP19LMOZ-BCTRhhOy1KH54jKXVClR8f4=";

function filterObj(arr) {
  const obj = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].image === undefined) {
      arr[i].image = { url: missingBreedUrl };
      obj.push(arr[i]);
    } else {
      obj.push(arr[i]);
    }
  }
  return obj;
}

export const instanceGet = axios.create({
  baseURL: "https://api.thecatapi.com/v1/",
  async: true,
  crossDomain: true,
  method: "GET",
  headers: {
    "x-api-key": "ea505b5c-e873-4b18-86ca-d855815a2cbc",
  },
});

export const getFavorites = () => {
  const [favoriteCatsUrls, setFavoriteCatsUrls] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchFavorites() {
      const request = await instanceGet(`favourites`);
      //console.log(request);
      const catsObjs = request.data.map((item) => {
        const a = { url: item.image.url, key: item.id };
        return a;
      });

      setFavoriteCatsUrls(catsObjs);
      setIsLoading(false);
    }
    fetchFavorites();
  }, []);
  return [favoriteCatsUrls, isLoading];
};

export const getBreeds = () => {
  const [breeds, setBreeds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function getBreeds() {
      const request = await instanceGet(`breeds?attach_breed=0`);
      console.log(request);
      const tempItem = request.data.map((item) => {
        const a = {
          image: item.image,
          key: item.name,
          description: item.description,
          name: item.name,
          breedId: item.id,
          imageId: item.reference_image_id,
        };
        return a;
      });
      filterObj(tempItem);
      setBreeds(tempItem);
      setIsLoading(false);
    }
    getBreeds();
  }, []);
  return [breeds, isLoading];
};

export async function nextCatA(appendUrl) {
  const request = await instanceGet(appendUrl);
  const tempItem =
    request.data.length > 0 ? request.data[0].url : missingBreedUrl;
  const catObj = {
    url: tempItem,
    catId: request.data[0].id,
  };
  console.log(catObj);

  return catObj;
}

export const instancePost = axios.create({
  baseURL: "https://api.thecatapi.com/v1/favourites",
  async: true,
  crossDomain: true,
  method: "POST",
  headers: {
    "content-type": "application/json",
    "x-api-key": "ea505b5c-e873-4b18-86ca-d855815a2cbc",
  },
  processData: false,
  body: JSON.stringify(postData),
});

export async function likeCatPost(datum) {
  postData.image_id = datum;
  const mem = JSON.stringify(postData);
  console.log(mem);

  const request = await instancePost();
  console.log(request);
}
