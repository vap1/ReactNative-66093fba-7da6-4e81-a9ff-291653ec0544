
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { fetchHomepageData } from '../apis/fetchHomepageData';
import { HomepageData } from '../types/Types';

const HomepageScreen = () => {
  const [homepageData, setHomepageData] = useState<HomepageData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchHomepageData();
        setHomepageData(data);
      } catch (error) {
        console.error('Error fetching homepage data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      {homepageData ? (
        <>
          <Text>{homepageData.title}</Text>
          <Text>{homepageData.description}</Text>
          <Text>Last Updated: {homepageData.lastUpdated}</Text>
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default HomepageScreen;