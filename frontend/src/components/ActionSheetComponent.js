import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';

const ActionSheetComponent = React.forwardRef(
  ({title = '', dataset = [], onPress = () => {}}, ref) => (
    <ActionSheet ref={ref} containerStyle={{backgroundColor: 'transparent'}}>
      <View style={{padding: 10, paddingBottom: 20}}>
        <View
          style={{
            backgroundColor: 'rgba(241,241,241,0.9)',
            borderRadius: 10,
            marginBottom: 10,
            overflow: 'hidden',
          }}>
          <View
            style={{
              borderBottomWidth: 1.5,
              borderBottomColor: '#ccc',
              paddingVertical: 10,
            }}>
            <Text
              style={{
                color: 'rgb(0,88,200)',
                textAlign: 'center',
                fontSize: 18,
                fontWeight: '500',
              }}>
              {title}
            </Text>
          </View>
          <ScrollView
            style={{maxHeight: 200}}
            showsVerticalScrollIndicator={false}>
            {dataset.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index + 1}
                  onPress={() => {
                    ref.current.hide();
                    onPress(item);
                  }}
                  style={{
                    paddingVertical: 12,
                    alignItems: 'center',
                    borderBottomWidth: 1.5,
                    borderBottomColor: '#ccc',
                  }}>
                  <Text style={{color: '#000', fontSize: 16}} numberOfLines={1}>
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
        <TouchableOpacity
          onPress={() => ref.current.hide()}
          style={{
            backgroundColor: 'white',
            borderRadius: 10,
            paddingVertical: 12,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'rgb(0,88,200)',
              fontSize: 18,
              fontWeight: '600',
            }}>
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
    </ActionSheet>
  ),
);

export default ActionSheetComponent;
