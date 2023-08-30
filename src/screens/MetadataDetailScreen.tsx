
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fetchDetailedMetadata } from '../apis/fetchDetailedMetadata';
import { Metadata } from '../types/Types';

type MetadataDetailScreenProps = {
  metadataId: string;
};

const MetadataDetailScreen: React.FC<MetadataDetailScreenProps> = ({ metadataId }) => {
  const [metadata, setMetadata] = useState<Metadata | null>(null);

  useEffect(() => {
    const fetchMetadataDetail = async () => {
      try {
        const response = await fetchDetailedMetadata(metadataId);
        setMetadata(response);
      } catch (error) {
        console.error('Error fetching metadata detail:', error);
      }
    };

    fetchMetadataDetail();
  }, [metadataId]);

  return (
    <View style={styles.container}>
      {metadata ? (
        <>
          <Text style={styles.title}>{metadata.userName}</Text>
          <Text style={styles.subtitle}>Age: {metadata.userAge}</Text>
          <Text style={styles.subtitle}>Location: {metadata.userLocation}</Text>
          {/* Display other metadata details here */}
        </>
      ) : (
        <Text>Loading metadata detail...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default MetadataDetailScreen;