import axios from "axios";
import { GOOGLE_MAP_API_KEY } from "../../cred";

export default async function findAddress(position) {
  try {
    const { data } = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.lat},${position.lng}&key=${GOOGLE_MAP_API_KEY}`
    );

    const addressObj = {
      address: data.results[0].formatted_address,
      addressPosition: data.results[0].geometry.location,
    };

    return addressObj;
  } catch (error) {
    console.log(error);
  }
}
