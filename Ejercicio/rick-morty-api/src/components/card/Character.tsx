import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import httpClient from "../../helpers/HttpClient";
import Layout from "../Layout/Index";
import "./Character.css";
const DetailCaracters = () => {
  const param: any = useParams();
  console.log(param);
  const [char, setChar] = useState<any>([]);
  const loadCharacter = async () => {
    console.log(param.id);
    await httpClient
      .get(`/character/${param.id}`)
      .then((res) => {
        setChar(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    loadCharacter();
  }, []);
  const { name, id, image, gender,status,species,origin,type,location} = char;
  return (
    <>
    <Layout>
    <div className="hero">

          <div className="d-flex  justify-content-center align-items-center">
            <img src={image} className="border-radius img-card-top" alt="..." />
          </div>
          <h1 className="name text-center mt-3 mb-4">{name}</h1>

          <div className="d-flex justify-content-center align-items-center">
            <div className="col-3 ">

              <ul className="list-group">

                <li className="list-group-item">
                  <h4>Gender </h4>
                  <p className="card-text mb-2">{gender}</p>
                  <hr/>
                </li>
                <li className="list-group-item">
                  <h4>Status </h4>
                  <p className="card-text mb-2">{status}</p>
                  <hr/>
                </li>
                <li className="list-group-item">
                  <h4>Specie </h4>
                  <p className="card-text mb-2">{species}</p>
                  <hr/>
                </li>
                <li className="list-group-item">
                  <h4>Origin</h4>
                  <p className="card-text mb-2">{}</p>
                  <hr/>
                </li>
                <li className="list-group-item">
                  <h4>Type </h4>
                  <p className="card-text mb-2">{type}</p>
                  <hr/>
                </li>
                <li className="list-group-item">
                  <h4>Location </h4>
                  <p className="card-text mb-2">{}</p>
                  <hr/> 
               </li>
              </ul>
            </div>
          
          </div>
          </div>
          </Layout>
    </>
  );
};

export default DetailCaracters;
