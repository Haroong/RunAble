import React, { useState } from 'react';
import { useEffect } from 'react';

import axios from 'axios';
import styled from 'styled-components';

import CoordApi from '../lib/api/coord';
import { getDustNearStation, getDustStationDetail } from '../lib/api/dust';

const DustWrapper = styled.div`
  margin: 8rem;
  color: white;
`;

const Dust = () => {
  const [tmX, setTmX] = useState('');
  const [tmy, setTmY] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [station, setStation] = useState('');
  const [pm10, setPm10] = useState('');
  const [pm25, setPm25] = useState('');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);

        const fetchData = async () => {
          try {
            await CoordApi.then((res) => {
              setTmX(res.data.documents[0].x);
              setTmY(res.data.documents[0].y);
            }).catch((err) => console.error(err));
          } catch {
            console.log('Failed to get location data');
          }
        };
        fetchData();
      });
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.all[
          (getDustNearStation(tmx, tmY), getDustStationDetail(station))
        ]
          .then((res) => {
            const rootElement =
              res.request.responseXML.documentElement.lastElementChild; // body
            const childElement = rootElement.childNodes[1]; // items
            const stationElement =
              childElement.childNodes[1].childNodes[5].textContent; // textContent.. station name

            setStation(stationElement);

            console.log(res);
            setPm10(res.data.response.body.items[0].pm10Value); // pm10Value: 미세먼지(pm10) 농도
            setPm25(res.data.response.body.items[0].pm25Value); // pm25Value: 미세먼지(pm25) 농도
          })
          .catch((err) => console.log(err));
      } catch {
        console.error();
      }
    };
    fetchData();
  }, []);

  return (
    <DustWrapper>
      <p>{station} 측정소 기준</p>
      <h3>pm10 {pm10}</h3>
      <h3>pm25 {pm25}</h3>
    </DustWrapper>
  );
};

export default Dust;
