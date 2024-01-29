import React from 'react';
import { Alert } from 'react-native';
import Modal from 'react-native-modal';

export default function CustomModal(props) {
  return (
    <Modal
      style={props.style}
      animationIn={props?.animationIn}
      animationOut={props?.animationOut}
      animationInTiming={600}
      animationOutTiming={600}
      backdropColor={props?.flatList ? 'rgba(0,0,0,0.8)' : '#000'}
      backdropOpacity={props?.backdropOpacity ? props?.backdropOpacity : 0.5}
      transparent={true}
      isVisible={props.visible}
      onBackButtonPress={props.onBackButtonPress}
      onBackdropPress={props.onBackdropPress}>
      {props?.children}
    </Modal>
  );
}
