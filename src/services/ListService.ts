import axios from 'axios';
import {ListData} from '../screens/List';

const baseURL = 'https://6172cfe5110a740017222e2b.mockapi.io/elements';

export const getList = async () => {
  try {
    const {data} = await axios.get<ListData[]>(baseURL);
    return data;
  } catch (error) {
    console.log(error);
  }
};
