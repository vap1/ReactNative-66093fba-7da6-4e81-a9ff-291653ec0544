
import axios from 'axios';
import { HomepageData } from '../types/Types';

const fetchHomepageData = async (): Promise<HomepageData> => {
  try {
    const response = await axios.get('/fetchHomepageData');
    return response.data;
  } catch (error) {
    console.error('Error fetching homepage data:', error);
    throw error;
  }
};

export default fetchHomepageData;