import axios from 'axios';
import { KAKAO_TM_COORD_API_KEY } from '../config/config';

const key = KAKAO_TM_COORD_API_KEY;

export const getCoord = (lat, lon) => {
  // TM 좌표계로 변환, 카카오 API
  const parameter = `input_coord=WGS84&output_coord=TM&y=${lat}&x=${lon}`;
  const url = `https://dapi.kakao.com/v2/local/geo/transcoord.json?${parameter}`;
  return axios.get(url, {
    headers: {
      Authorization: `KakaoAK ${key}`,
    },
  });
};
