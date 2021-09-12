import React, { useEffect } from "react";
import "./styles.css";
import {useSelector } from 'react-redux';
import { getCountries } from './actions'

export default function App() {
  const storeState = useSelector((state) => { return state })

  useEffect(() => {
  /*   getCountries(); */
  }, []);

  return (
    <div className="App">
      <h1>React Redux ile thunk middleware kullanarak API'dan veri almak</h1>
      <h2>React Router</h2>
      {storeState?.isLoading ?
        <p style={{ width: 30, height: 30 }}>
          <img src='https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif'
            alt='Yükleniyor...'
          />
        </p> :

        storeState?.countries.map(country => {
          return (
            <div key={country.name}>
              <h3>{country.name}</h3>
              <h4>{country.capital}</h4>
              <p>
                <img
                  src={country.flag}
                  alt={country.name}
                  style={{ width: "100px" }}
                />
              </p>
            </div>
          );
        })}

    </div>
  );
}
