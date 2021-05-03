import axios from 'axios';
import { DUST_API_KEY } from '../config/config';

const key = DUST_API_KEY;

export const getDustNearStation = (tmX, tmY) => {
  // TM좌표와 가장 가까운 측정소 정보 가져오기, 한국환경공단 API
  const parameter = `&tmX=${tmX}&tmY=${tmY}&ServiceKey=${key}&returnType=json`;
  const url = `http://apis.data.go.kr/B552584/MsrstnInfoInqireSvc/getNearbyMsrstnList?${parameter}`;
  return axios.get(url);
};

export const getDustStationDetail = (station) => {
  // 측정소의 실시간 측정정보조회
  // pm10, pm25 정보 조회를 위함
  const parameter = `stationName=${station}&dataTerm=daily&ServiceKey=${key}&ver=1.3&returnType=json`;
  const url = `http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?${parameter}`;
  return axios.get(url);
};
