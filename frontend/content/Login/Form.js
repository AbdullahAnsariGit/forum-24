import React, {useRef, useState} from 'react';
import {View, Image} from 'react-native';
import {Formik} from 'formik';
import {ValidationSchema} from './Validation';
import CustomTextInput from '../../../components/CustomTextInput';
import CustomButton from '../../../components/CustomButton';
import styles from './styles';
import {appIcons, appLogos} from '../../../assets';
import {colors} from '../../../utils';

const LoginForm = ({submit}) => {
  const form = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmitForm = values => {
    submit(values);
  };

  return (
    <Formik
      innerRef={form}
      initialValues={{email: '', password: ''}}
      onSubmit={handleSubmitForm}
      validationSchema={ValidationSchema}>
      {({handleChange, handleBlur, values, errors, handleSubmit}) => (
        <View>
          <View style={{padding: 20, gap: 10}}>
            <View style={styles.logoStyle}>
              <Image style={styles.applogo} source={appLogos.appLogo} />
            </View>
            <CustomTextInput
              ref={email}
              value={values?.email}
              onFocus={() => setFocusedField('email')}
              onBlur={() => {
                setFocusedField(null);
                handleBlur('email');
              }}
              placeholder="Email"
              keyboardType="email-address"
              onChangeText={handleChange('email')}
              error={errors?.email}
              style={focusedField === 'email' ? styles.focusedInput : null}
              // label
              maxLength={35}
              // labeltext={'Email'}
              leftIcon={appIcons.email}
              Lineicon={appIcons.line}
              Lineiconcolor={colors.gray}
              Iconcolor={colors.secondary}
              containerStyle={styles.emailinput}
            />
            <CustomTextInput
              ref={password}
              value={values?.password}
              onFocus={() => setFocusedField('password')}
              onBlur={() => {
                setFocusedField(null);
                handleBlur('password');
              }}
              placeholder="Password"
              onChangeText={handleChange('password')}
              error={errors?.password}
              style={focusedField === 'password' ? styles.focusedInput : null}
              // label
              maxLength={35}
              // labeltext={'Password'}
              leftIcon={appIcons.locks}
              Lineicon={appIcons.line}
              Lineiconcolor={colors.gray}
              Iconcolor={colors.secondary}
              containerStyle={styles.emailinput}
            />
            <CustomButton
              title="Next"
              onPress={handleSubmit}
              buttonStyle={styles.btn}
              textStyle={styles.btntext}
            />
          </View>
        </View>
      )}
    </Formik>
  );
};

export default LoginForm;
