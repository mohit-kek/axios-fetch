import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./Card.css";
import logo from "./logo.png"

const Card = () => {
  const [userData, setUserData] = useState([]);

  // const fetchData = () => {
  //   fetch("https://randomuser.me/api/?results=10")
  //     .then((res) => {
  //       return res.json();
  //     }).then((data) => {
  //       let users = data.results;
  //       console.log(users);
  //       setUserData(users);
  //     })
  // }

  const fetchData = () => {
    axios.get("https://randomuser.me/api/?results=15")
      .then((res) => {
        let users = res.data.results;
        console.log(users);
        setUserData(users);
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="cards">
      {userData.map(data => {
        return (
          <div className='card' key={data.id.value}>
            <div className="blob-top"></div>
            <span ><img src={data.picture.large} className='img' alt="ge" /></span>
            <span><h3>{data.name.first} {data.name.last}</h3></span>
            <span><h4>{data.dob.age}</h4></span>
            <span><h4>{data.location.country}</h4></span>
            <div className="blob-bottom"></div>
          </div>
        )

      })}

    </div>

  )
}

export default Card