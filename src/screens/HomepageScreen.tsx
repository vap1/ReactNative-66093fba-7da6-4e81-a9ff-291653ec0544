
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { fetchHomepageData } from '../apis/fetchHomepageData';

const HomepageScreen: React.FC = () => {
  const [homepageData, setHomepageData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchHomepageData();
        setHomepageData(response);
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
        <Text>Loading homepage data...</Text>
      )}
    </View>
  );
};

export default HomepageScreen;