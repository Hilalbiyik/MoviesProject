import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PopularMovie from "../../components/PopularMovie";
import axios from "axios"
import MovieCard from "../Movies/MovieCard";

const Series = () => {
  // const axios = require('axios');

  // // Make a request for a user with a given ID
  // axios.get('/user?ID=12345')
  //   .then(function (response) {
  //     // handle success
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error);
  //   })
  //   .then(function () {
  //     // always executed
  //   });
  const [data,setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://gist.githubusercontent.com/hknclk/5710c4adb791755b31ccde6777f04bd2/raw/19954b5d84f476a1d691ce43e4319292893cc27a/sample.json");
      setData(response.data)
      console.log(response.data.entries)
    }
    fetchData();
  })

  
  return (
    <div>
      <Navbar />
      <PopularMovie/>
      <div>
     
      </div>
    </div>
  );
};



export default Series;
