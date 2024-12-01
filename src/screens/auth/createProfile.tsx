import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  Image,
} from 'react-native';
import {Text, useTheme} from 'react-native-paper';
import MyButton from '../../components/ui/button';
import MyTextInput from '../../components/ui/textInput';
import MyDropdown from '../../components/ui/dropdown'; // Assume dropdown for country & gender
import DatePicker from 'react-native-date-picker'; // Assume a library like `react-native-date-picker`
import Layout from './partials/layout';

const CreateProfile: React.FC = navigation => {
  const theme = useTheme();
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+1'); // Default country code
  const [dob, setDob] = useState<Date | null>(null);
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleSubmit = () => {
    console.log('Profile Submitted', {
      fullName,
      mobileNumber,
      countryCode,
      dob,
      gender,
      country,
    });
  };

  const genderOptions = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
    {label: 'Other', value: 'other'},
  ];

  const countryOptions = [
    {label: 'United States', value: 'us'},
    {label: 'India', value: 'in'},
    {label: 'Canada', value: 'ca'},
    // Add more countries as needed
  ];

  return (
    <Layout
      header={
        <>
          <Text style={[styles.title, {color: theme.colors.primary}]}>
            Create Profile
          </Text>
          <Text style={[styles.subtitle, {color: theme.colors.primary}]}>
            Fill in your details to complete your profile
          </Text>
        </>
      }
      main={
        <View style={styles.form}>
          <MyTextInput
            label="Full Name"
            value={fullName}
            onChangeText={setFullName}
            left="account"
          />

          {/* <View style={styles.row}> */}
            {/* <MyDropdown
              label="Country Code"
              value={countryCode}
              onValueChange={setCountryCode}
              options={[
                {label: '+1', value: '+1'},
                {label: '+91', value: '+91'},
                {label: '+44', value: '+44'},
              ]}
              style={styles.countryCode}
            /> */}
            <MyTextInput
              label="Mobile Number"
              value={mobileNumber}
              onChangeText={setMobileNumber}
              left="phone"
            />
            <MyTextInput
              label="DD-MM-YYYY"
              value={dob}
              onPress={() => setShowDatePicker(true)}
              left="cake"
            />

          {showDatePicker && (
            <DatePicker
              modal
              mode="date"
              open={showDatePicker}
              date={dob || new Date()}
              onConfirm={date => {
                setDob(date);
                setShowDatePicker(false);
              }}
              onCancel={() => setShowDatePicker(false)}
            />
          )}

          <MyDropdown
            label="Gender"
            value={gender}
            onValueChange={setGender}
            options={genderOptions}
          />

          <MyDropdown
            label="Country"
            value={country}
            onValueChange={setCountry}
            options={countryOptions}
          />
        </View>
      }
      footer={
        <View style={styles.footer}>
          <MyButton
            mode="contained"
            label="Take a Selfie"
            onPress={() => console.log('Take Selfie')}
            disabled={!fullName || !mobileNumber || !dob || !gender || !country}
          />
        </View>
      }
      navigation={navigation}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  scrollView: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 20,
    minHeight: '100%',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    height: 48,
    width: 48,
  },
  title: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    marginTop: 10,
    marginBottom: 30,
    fontSize: 16,
    textAlign: 'center',
  },
  form: {
    flex: 1,
    width: '100%',
    gap: 15,
  },
  row: {
    width: "100%",
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  countryCode: {
    flex: 1,
  },
  mobileInput: {
    flex: 3,
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
    marginTop: 20,
    gap: 15,
  },
});

export default CreateProfile;
