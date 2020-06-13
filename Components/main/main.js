import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import Section1 from './Section/Section1'
import Section2 from './Section/Section2'
import Section3 from './Section/Section3'


export default function main() {
  return (
    <View style={styles.container}>
      <View style={{marginTop: 20}} />
      <ProgressSteps>
        <ProgressStep label="Informations Générales ">
          <Section1 />
        </ProgressStep>

        <ProgressStep label="Comorbidité">
          <Section2 />
        </ProgressStep>

        <ProgressStep label="Circonstance de la maladie ">
          <Section3 />
        </ProgressStep>
      </ProgressSteps>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#273c75',
  },

});
