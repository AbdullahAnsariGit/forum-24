import React, {Component} from 'react';
import {Text, FlatList, TouchableOpacity} from 'react-native';
import AppBackground from '../../../components/AppBackground';
import styles from './styles';
import CustomText from '../../../components/CustomText';
import {View} from 'react-native';
import appStyles from '../../appStyles';
import NavService from '../../../helpers/NavService';

class Information extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderTextItem = ({item}) => {
    return <Text style={styles.para}>{item}</Text>;
  };

  render() {
    const textData = [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    ];

    return (
      <AppBackground back title={'Information'} marginHorizontal={false}>
        <View style={styles.mainContainer}>
          <CustomText
            text="Lorem Ipsum is simply dummy text"
            style={styles.heading}
          />
          <CustomText text="Created By Admin" style={styles.heading1} />
        </View>

        <FlatList
          data={textData}
          renderItem={this.renderTextItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}
          style={{}}
        />
      </AppBackground>
    );
  }
}

export default Information;
