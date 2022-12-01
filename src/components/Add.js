import axios from "axios";
import React from "react";
import { useState } from "react";
import { v4 as uuid } from 'uuid';


const Add = () => {
  const [book, setBook] = useState({
    u_id:"",
    name:"",
    label:"",
    ProjectPlotArea:"",
    GreenArea:"",
    PropertyStatus:"",
    PriceRange:"",
    TotalTowers:"",
    TotalFlats:"",
    OCStatus:"",
    Density:"",
    PodiumNonPodium:"",
    ApprovedBank:"",
    ClubHouseSize:"",
    ConstructionType:"",
    TowerHeights:"",
    LiftperTower:"",
    FloorvsFlats:"",
    PossessionDate:"",
    Lobby:"",
    Distance:"",
    Segment:""


  });
  const [error,setError] = useState(false)

 

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/compare/data", book);
     
    } catch (err) {
      console.log(err);
      setError(true)
    }
  };

  return (
    <div className="container" >
      <h1>Add New Property</h1>
      <input
        type="text"
        placeholder="Property name"
        name="name"
        onChange={handleChange}
        className="form-control"
      />
       <input
        type="text"
        placeholder="label"
        name="label"
        onChange={handleChange}
        className="form-control"
      />
      <input
        type="text"
        placeholder="Project plot area"
        name="ProjectPlotArea"
        onChange={handleChange}
        className="form-control"
      />
      <input
        type="text"
        placeholder="Green Area"
        name="GreenArea"
        onChange={handleChange}
        className="form-control"
      />
      <input
        type="text"
        placeholder="Property Status"
        name="PropertyStatus"
        onChange={handleChange}
        className="form-control"
      />
      <input
        type="text"
        placeholder="Price Range"
        name="PriceRange"
        onChange={handleChange}
        className="form-control"
      />
      <input
        type="text"
        placeholder="Total Towers"
        name="TotalTowers"
        onChange={handleChange}
        className="form-control"
      />
       <input
        type="text"
        placeholder="Total Flats"
        name="TotalFlats"
        onChange={handleChange}
        className="form-control"
      />
       <input
        type="text"
        placeholder="OC Status"
        name="OCStatus"
        onChange={handleChange}
        className="form-control"
      />
       <input
        type="text"
        placeholder="Density"
        name="Density"
        onChange={handleChange}
        className="form-control"
      />
       <input
        type="text"
        placeholder="Podium/NonPodium"
        name="PodiumNonPodium"
        onChange={handleChange}
        className="form-control"
      />
       <input
        type="text"
        placeholder="Approved Bank"
        name="ApprovedBank"
        onChange={handleChange}
        className="form-control"
      />
       <input
        type="text"
        placeholder=" Club House Size"
        name="ClubHouseSize"
        onChange={handleChange}
        className="form-control"
      />
       <input
        type="text"
        placeholder="Construction Type"
        name="ConstructionType"
        onChange={handleChange}
        className="form-control"
      />
       <input
        type="text"
        placeholder="Tower Heights"
        name="TowerHeights"
        onChange={handleChange}
        className="form-control"
      />
       <input
        type="text"
        placeholder="Lift per Tower"
        name="LiftperTower"
        onChange={handleChange}
        className="form-control"
      />
       <input
        type="text"
        placeholder="Floor vs Flats"
        name="FloorvsFlats"
        onChange={handleChange}
        className="form-control"
      />
       <input
        type="text"
        placeholder="Possession Date"
        name="PossessionDate"
        onChange={handleChange}
        className="form-control"
      />
       <input
        type="text"
        placeholder="Lobby"
        name="Lobby"
        onChange={handleChange}
        className="form-control"
      />
       <input
        type="text"
        placeholder="Distance"
        name="Distance"
        onChange={handleChange}
        className="form-control"
      />
       <input
        type="text"
        placeholder="Segment"
        name="Segment"
        onChange={handleChange}
        className="form-control"
      />
      
      <button onClick={handleClick} className='btn'>Add</button>
      {error && "Something went wrong!"}
     
    </div>
  );
};

export default Add;