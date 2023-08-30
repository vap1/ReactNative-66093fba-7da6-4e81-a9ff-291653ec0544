
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Metadata } from '../types/Types';

type MetadataDetailCardProps = {
  metadata: Metadata;
};

const MetadataDetailCard: React.FC<MetadataDetailCardProps> = ({ metadata }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{metadata.userName}</Text>
      <Text style={styles.subtitle}>Age: {metadata.userAge}</Text>
      <Text style={styles.subtitle}>Location: {metadata.userLocation}</Text>
      <Text style={styles.subtitle}>Preferences:</Text>
      {Object.entries(metadata.userPreferences).map(([key, value]) => (
        <Text key={key} style={styles.preference}>
          {key}: {value}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 4,
  },
  preference: {
    fontSize: 14,
    marginLeft: 8,
  },
});

export default MetadataDetailCard;