import * as axios from "axios";
import React, { useState, useEffect } from "react";

export const instance = axios.create({
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
      const request = await instance.get(`favourites`);
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
