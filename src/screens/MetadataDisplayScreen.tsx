
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { fetchMetadata } from '../apis/fetchMetadata';
import { Metadata } from '../types/Types';

const MetadataDisplayScreen = () => {
  const [metadata, setMetadata] = useState<Metadata[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMetadata();
        setMetadata(data);
      } catch (error) {
        console.error('Error fetching metadata:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      {metadata.length > 0 ? (
        metadata.map((item) => (
          <View key={item.metadataId}>
            <Text>User ID: {item.userId}</Text>
            <Text>User Name: {item.userName}</Text>
            <Text>User Age: {item.userAge}</Text>
            <Text>User Location: {item.userLocation}</Text>
            {/* Display other metadata fields as needed */}
          </View>
        ))
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default MetadataDisplayScreen;