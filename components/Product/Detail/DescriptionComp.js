import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';

import color from '../../../contains/color';

import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';

const DescriptionComp = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const description = `The EHX Oceans 12 is the Oceans 11’s big brother with even more reverbs and functionality. It features two simultaneous, independent, stereo reverb engines, series and parallel control for the dual reverbs, 24 presets and advanced I/O allowing for stereo in/out or mono send/return with pre and post reverb options. The pedal also includes a new Tide Control for stereo image alteration, a Lo-fi Control, an infinite attenuation control and an input jack for external expression and 3-button footswitch control.

    A Tails switch provides a choice of whether the reverb effect fades out naturally or stops immediately when the pedal is switched to bypass. In most settings the pedal is also capable of producing infinite reverb which can be played over with a different reverb effect.
    
    The Oceans 12’s reverbs are:
    • ROOM – two modes: reverb algorithms modeled after a lively room and a spacious performance hall
    • SPRING – two modes: vintage 1962 Fender® 6G15 tube reverb emulation and the spring algorithm from the EHX Holy Grail
    • PLATE – two modes: two emulations of the smooth, metal plate reverb often used in high-end recording studios during the 1960s and ‘70s
    • REVERSE – two modes: a reverse reverb effect as well as true reversed echoes
    • ECHO – three modes: a digital delay with various echo rhythms feeding into a plate reverb
    • TREM – three modes: a classic, periodic volume envelope with various shapes applied to both the wet and dry mix of a hall reverb
    • MOD – three modes: combinations of chorus and flange reverbs that create rich reverb tails
    • DYNA – three dynamic, experimental reverb algorithms: swell, gate and duck
    • AUTO-INF – three modes: auto-infinite reverb (w/optional chorus or flange) that “listens” to your playing and crossfades to a new reverb wash upon detection of newly struck notes.
    • SHIMMER – two modes: two configurations of a rich octave-shifted reverb wash
    • POLYPHONIC – two modes: two configurable bi-directional pitch shifts that add dimensionality to the reverb tail
    • RESONANT – two modes: reverb excited by tunable resonators and configurable self-oscillating filters on the reverb tail
    
    2 simultaneous, independent, stereo reverb engines
    Series and parallel control for the dual reverbs
    24 presets
    Stereo in/out or mono send/return with pre and post reverb options
    Tide Control for stereo image alteration
    Lo-fi Control
    Infinite attenuation control
    Tap tempo to set your pre-delay time, echo time and more
    Input jack for external expression and 3-button footswitch control
    Power supply included`;
  const descriptionTitle = 'oceans 12';
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
        <Pressable
          style={styles.centerView}
          onPress={() => setModalVisible(!modalVisible)}>
          <Pressable onPress={() => setModalVisible(modalVisible)}>
            <View style={styles.modalView}>
              {/* <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={styles.descriptionTitle}>{descriptionTitle}</Text>
                <Pressable onPress={() => setModalVisible(!modalVisible)}>
                  <Icon
                    name="close-outline"
                    size={30}
                    color={color.textBlack}></Icon>
                </Pressable>
              </View> */}
              {/* <Text style={styles.descriptionText}>{descriptionText}</Text> */}

              <ScrollView
                decelerationRate="fast"
                showsVerticalScrollIndicator={false}
                style={{borderWidth: 1, borderColor: 'black'}}>
                <Text style={styles.descriptionContent}>{description}</Text>
                <Text style={styles.descriptionEndContent}>
                  {descriptionEndContent}
                </Text>
              </ScrollView>
              
            </View>
          </Pressable>
        </Pressable>
      </Modal>
      <Pressable onPress={() => setModalVisible(true)}>
        <Text style={{color: color.textRed, fontWeight: '600'}}>
          {buttonText}
        </Text>
      </Pressable>
    </View>
  );
  return (
    <View style={styles.description}>
      <Text style={styles.textDescription}>
        {description.slice(0, 145) + ' ...'} {OpenDescriptionButton}
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
    height: 200,
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
