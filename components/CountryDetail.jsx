import React, { useContext, useEffect, useState } from "react";
import './CountryDetail.css'
import { Link, useLocation, useOutletContext, useParams } from "react-router-dom";
import CountryDetailsShimmer from "./CountryDetailsShimmer";
import { ThemeContext } from "../contexts/ThemeProvider";

//onclick="history.back()"
const CountryDetail = () => {
  //const countryName = new URLSearchParams(location.search).get("name");
  const params = useParams()
  const countryName = params.country;
  const [countryData, setCountryData] = useState(null);
  const [countryNotFound, setcountryNotFound] = useState(false);
  const {state} = useLocation();
  const [isDark] = useContext(ThemeContext);

  function UpdateCountryData(data){
    setCountryData({
      name: data.name.common,
      nativeName: Object.values(data.name.nativeName)[0].common,
      population: data.population.toLocaleString("en-US"),
      region: data.region,
      subRegion: data.subregion,
      capital: data.capital,
      tld: Object.values(data.tld)[0],
      currencies:
        Object.values(data.currencies)[0].name +
        " " +
        `(${Object.values(data.currencies)[0].symbol})`,
      languages: Object.values(data.languages).join(", "),
      borders: [],
      //borders: data.borders && Array.isArray(data.borders)? Object.values(data.borders).join(", "): 'No Boarders',
      flag: data.flags.svg,
    });

    if(!data.borders){
        data.borders = [];
    }

    Promise.all(data.borders.map((code)=>{
        return fetch(`https://restcountries.com/v3.1/alpha/${code}`)
        .then((res)=>res.json())
        .then(([border])=>border.name.common)
    })).then((borderCountry)=>{
        setCountryData((prev)=>({...prev, borders:borderCountry}))
    })
  }

  useEffect(() => {
    if(state){
      UpdateCountryData(state)
      return
    }
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        UpdateCountryData(data);
      }).catch((err)=>{
        setcountryNotFound(true);
      });
  }, [countryName]);
  if(countryNotFound){
    return <h2>Country Name not found</h2>
  }
  return countryData === null ? (
    <CountryDetailsShimmer/>
  ) : 
  (
    <main className={isDark?'dark':''}>
      <div className="country-details-container">
        <span className="back-button" onClick={()=>history.back()}>
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className="country-details">
          <img src={countryData.flag} alt={`${countryData.name} flag`} />
          <div className="details-text-container">
            <h1>{countryData.name}</h1>
            <div className="details-text">
              <p>
                <b>Native Name: </b>
                <span className="native-name">{countryData.nativeName}</span>
              </p>
              <p>
                <b>Population: </b>
                <span className="population">{countryData.population}</span>
              </p>
              <p>
                <b>Region: </b>
                <span className="region">{countryData.region}</span>
              </p>
              <p>
                <b>Sub Region: </b>
                <span className="sub-region">{countryData.subRegion}</span>
              </p>
              <p>
                <b>Capital: </b>
                <span className="capital">{countryData.capital}</span>
              </p>
              <p>
                <b>Top Level Domain: </b>
                <span className="top-level-domain">{countryData.tld}</span>
              </p>
              <p>
                <b>Currencies: </b>
                <span className="currencies">{countryData.currencies}</span>
              </p>
              <p>
                <b>Languages: </b>
                <span className="languages">{countryData.languages}</span>
              </p>
            </div>
            <div className="border-countries">
              <b>Border Countries: </b>&nbsp;
              {
                countryData.borders?.map((border)=><Link key={border} to={`/${border}`}>{border}</Link>)
              }
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CountryDetail;
