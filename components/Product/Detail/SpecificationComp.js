import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import color from '../../../contains/color';

const SpecificationComp = props => {
  const specificationTable = props.dataSpecificationComp;
  const [specTableVisible, setSpecTableVisible] = useState(false);

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
        <View style={styles.centerView}>
          <Pressable
            onPress={() => setSpecTableVisible(!specTableVisible)}
            style={StyleSheet.absoluteFill}
          />
          <View style={styles.modalView}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingBottom: 5
              }}>
              <Text style={styles.specificationTitle}>
                {specificationTable.name}
              </Text>
              <Pressable onPress={() => setSpecTableVisible(!specTableVisible)}>
                <Icon
                  name="close-outline"
                  size={30}
                  color={color.textBlack}></Icon>
              </Pressable>
            </View>
            <Text style={styles.specificationText}>Specification : </Text>
            <ScrollView
              decelerationRate="fast"
              showsVerticalScrollIndicator={false}>
              <TouchableWithoutFeedback>
                <View style={styles.table}>
                  {specificationTable.specification.map((item, index) => (
                    <View
                      style={{flexDirection: 'row', width: '100%'}}
                      key={index}>
                      <Text style={styles.tableTitle}>{item[0]}</Text>
                      <Text style={styles.tableContent}>{item[1]}</Text>
                    </View>
                  ))}
                </View>
              </TouchableWithoutFeedback>
              <Text style={styles.specificationEndContent}>
                * Copyright by 1Pedal *
              </Text>
            </ScrollView>
          </View>
        </View>
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
      {specificationTable.specification.slice(0, 5).map((item, index) => (
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
