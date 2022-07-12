import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import color from '../../../contains/color';

const SpecificationComp = () => {
  const [specTableVisible, setSpecTableVisible] = useState(false);
  const specificationTable = [
    ['Type Effect', 'Phaser Effects Pedals'],
    ['Circuit', 'Analog'],
    ['Bypass', 'True Bypass'],
    ['Audio', 'Mono'],
    [
      'Power Supply',
      '9V battery included (optional 9.6VDC-200mA power adapter not included)',
    ],
    ['Dimensions (in)', '4.5 x 2.75 x 2.1'],
    ['Current Draw', '10mA'],
    ['Year Released', '2006'],
    ['UPC', '683274050041'],
  ];
  const specificationText = 'Specification :';

  const OpenSpecificationButton = (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={specTableVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setSpecTableVisible(!specTableVisible);
        }}>
        <Pressable
          style={styles.centerView}
          onPress={() => setSpecTableVisible(!specTableVisible)}>
          <Pressable onPress={() => setSpecTableVisible(specTableVisible)}>
            <View style={styles.modalView}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={styles.specificationTitle}>oceans 12</Text>
                <Pressable
                  onPress={() => setSpecTableVisible(!specTableVisible)}>
                  <Icon name="close-outline" size={30}></Icon>
                </Pressable>
              </View>
              <Text style={styles.specificationText}>Specification</Text>
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.table}>
                  {specificationTable.map((item, index) => (
                    <View
                      style={{flexDirection: 'row', width: '100%'}}
                      key={index}>
                      <Text style={styles.tableTitle}>{item[0]}</Text>
                      <Text style={styles.tableContent}>{item[1]}</Text>
                    </View>
                  ))}
                </View>
                <Text style={styles.specificationEndContent}>
                  * Copyright by 1Pedal *
                </Text>
              </ScrollView>
            </View>
          </Pressable>
        </Pressable>
      </Modal>
      <Pressable onPress={() => setSpecTableVisible(true)}>
        <Text
          style={{
            color: color.textRed,
            fontWeight: '600',
            marginTop: 20,
            textAlign: 'center',
            fontSize: 18,
          }}>
          See More Specification
        </Text>
      </Pressable>
    </View>
  );
  return (
    <View style={styles.table}>
      <Text style={styles.specificationText}>{specificationText}</Text>
      {specificationTable.slice(0, 5).map((item, index) => (
        <View style={{flexDirection: 'row', width: '100%'}} key={index}>
          <Text style={styles.tableTitle}>{item[0]}</Text>
          <Text style={styles.tableContent}>{item[1]}</Text>
        </View>
      ))}
      <View>{OpenSpecificationButton}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.shawdowModal,
  },
  modalView: {
    backgroundColor: color.textWhite,
    shadowColor: color.textBlack,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 350,
    height: 500,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  specificationTitle: {
    fontSize: 21,
    fontWeight: '600',
    color: color.textBlack,
    textTransform: 'uppercase',
  },
  specificationText: {
    fontSize: 18,
    fontWeight: '600',
    color: color.textBlack,
    paddingVertical: 10,
  },
  descriptionContent: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 25,
  },
  specificationEndContent: {
    textAlign: 'center',
    paddingTop: 15,
    fontWeight: '600',
    fontSize: 15,
    color: color.textRed,
  },
  table: {
    marginVertical: 10,
  },
  tableTitle: {
    flex: 1,
    borderWidth: 1,
    width: '100%',
    alignContent: 'center',
    paddingVertical: 5,
    paddingLeft: 7,
    fontSize: 15,
    fontWeight: '700',
    color: color.textBlack,
  },
  tableContent: {
    flex: 2,
    borderWidth: 1,
    borderLeftWidth: 0,
    width: '100%',
    alignContent: 'center',
    paddingVertical: 5,
    paddingLeft: 7,
    fontSize: 15,
    color: color.textBlack1,
  },
  specificationText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: color.textBlack,
    marginBottom: 10,
  },
});

export default SpecificationComp;
