import axios from "axios";

const BASE_URL = "https://northwind.vercel.app/api";

export async function getAllData(endpoint) {
  try {
    const res = await axios(`${BASE_URL}/${endpoint}`);
    //   return res.data;
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
}

function square(number) {
  console.log(number ** 2);
}

square(3); //9
square(7); //49
