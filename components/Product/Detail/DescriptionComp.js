import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  ScrollView,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';

import color from '../../../contains/color';

import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';

const DescriptionComp = (props) => {
  const dataDescription = props.dataDescriptionComp
  const [modalVisible, setModalVisible] = useState(false);

  const descriptionText = 'Description';
  const descriptionEndContent = '* Copyright by 1Pedal *';
  const buttonText = 'Read More';

  const OpenDescriptionButton = (
    <View style={{marginTop: 20}}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centerView}>
          <Pressable
            onPress={() => setModalVisible(!modalVisible)}
            style={StyleSheet.absoluteFill}
          />
          <View style={styles.modalView}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={styles.descriptionTitle}>{dataDescription.name}</Text>
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <Icon
                  name="close-outline"
                  size={30}
                  color={color.textBlack}></Icon>
              </Pressable>
            </View>
            <Text style={styles.descriptionText}>{descriptionText}</Text>

            <ScrollView
              decelerationRate="fast"
              showsVerticalScrollIndicator={false}>
              <TouchableWithoutFeedback>
                <>
                
                  <Text style={styles.descriptionContent}>{dataDescription.description}</Text>
                  <Text style={styles.descriptionEndContent}>
                    {descriptionEndContent}
                  </Text>
                </>
              </TouchableWithoutFeedback>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
  return (
    <View style={styles.description}>
      <Text style={styles.textDescription}>
        {dataDescription.description.slice(0, 135) + ' ...'}
        <Text onPress={() => setModalVisible(true)} style={{color: color.textRed, fontWeight: '600', marginTop: 10}}>
          {buttonText}
        </Text>
         {OpenDescriptionButton}
      </Text>
    </View>
  );
};

export default DescriptionComp;

const styles = StyleSheet.create({
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
  textDescription: {
    fontSize: 14,
    lineHeight: 20,
    color: color.textBlack1,
    fontWeight: '400',
  },
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
  descriptionTitle: {
    fontSize: 21,
    fontWeight: '600',
    color: color.textBlack,
    textTransform: 'uppercase',
  },
  descriptionText: {
    fontSize: 18,
    fontWeight: '600',
    color: color.textBlack,
    paddingVertical: 10,
  },
  descriptionContent: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 25,
    color: color.textBlack1,
  },
  descriptionEndContent: {
    textAlign: 'center',
    paddingTop: 15,
    fontWeight: '700',
    fontSize: 15,
    color: color.textRed,
  },
});
