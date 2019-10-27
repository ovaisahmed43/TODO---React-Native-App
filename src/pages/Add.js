import React from 'react';
import {StatusBar} from 'react-native';
import {Container, Content, View, Toast} from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import {colors} from '../Constants';

import {connect} from 'react-redux';
import {addFeed} from '../actions/feed';

// Components
import CustomHeader from '../components/CustomHeader';
import CustomButtonFilled from '../components/CustomButtonFilled';
import CustomInput from '../components/CustomInput';
import CustomTextarea from '../components/CustomTextarea';
import CircularColorSelector from '../components/CircularColorSelector';

class Add extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      datetimePickerMode: null,
      date: new Date(),
      time: new Date(),

      text: '',
      expiry: moment().format('LLL'),
      selectedColor: colors[0],
    };

    this.addFeed = this.addFeed.bind(this);
    this.togglePicker = this.togglePicker.bind(this);
    StatusBar.setBackgroundColor('rgba(76, 217, 100, 1)');
  }

  addFeed = async () => {
    const {text, expiry, selectedColor} = this.state;

    if (text.length > 3) {
      await this.props.addFeed(
        text,
        'Due ' + moment(expiry).fromNow(),
        selectedColor,
      );

      Toast.show({
        text: 'Success!',
        type: 'success',
      });

      this.setState({
        text: '',
        expiry: '',
        selectedColor: colors[0],
      });
    } else {
      Toast.show({
        text: 'Please enter some note.',
        type: 'warning',
      });
    }
  };

  togglePicker = data => {
    const {datetimePickerMode} = this.state;

    switch (datetimePickerMode) {
      case 'date':
        const date = moment(data).format('YYYY-MM-DD');
        console.warn(data);

        this.setState({
          datetimePickerMode: 'time',
          date,
        });
        break;

      case 'time':
        const time = moment(data).format('HH:mm:ss');
        const expiry = this.state.date + ' ' + time;

        this.setState({
          expiry: moment(expiry).format('LLL'),
          datetimePickerMode: null,
          time,
        });
        break;

      default:
        this.setState({
          datetimePickerMode: 'date',
          date: new Date(),
          time: new Date(),
        });
        break;
    }
  };

  render() {
    const {text, expiry, selectedColor, datetimePickerMode} = this.state;

    return (
      <Container>
        <Content>
          <CustomHeader title="Add" />
          <View style={{padding: 10}}>
            <CustomTextarea
              placeholder={'What do you need to do?'}
              onChangeText={_text => this.setState({text: _text})}
              value={text}
              style={null}
            />

            <CustomInput
              placeholder={'When is it due?'}
              onChangeText={_expiry => this.setState({expiry: _expiry})}
              value={expiry}
              style={null}
              onTouchEnd={this.togglePicker}
            />

            <CircularColorSelector
              selectedColor={selectedColor}
              onPress={color => {
                this.setState({selectedColor: color});
              }}
            />

            <CustomButtonFilled text={'Add'} onPress={this.addFeed} />
          </View>
        </Content>

        {datetimePickerMode !== null ? (
          <DateTimePicker
            value={new Date()}
            mode={datetimePickerMode}
            display="default"
            onChange={(result, date) => {
              if (result.type === 'set') {
                // console.warn(date);

                this.togglePicker(date);
              } else {
                this.setState({datetimePickerMode: null});
              }
            }}
          />
        ) : null}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    feed: state.feed,
  };
};

const mapDispatchToProps = dispatch => ({
  addFeed: (text, expiry, color) => dispatch(addFeed(text, expiry, color)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Add);
