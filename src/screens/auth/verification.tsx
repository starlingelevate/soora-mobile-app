import React, {useRef, useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  StatusBar,
  ScrollView,
  StyleSheet,
  TextInput,
} from 'react-native';
import {Text, useTheme} from 'react-native-paper';
import MyButton from '../../components/ui/button';

const Verification: React.FC = () => {
  const theme = useTheme();
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(240); // 4-minute timer
  const [isResendEnabled, setIsResendEnabled] = useState(false);
  const inputRefs = useRef<Array<TextInput | null>>([]);

  // Countdown Timer Logic
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setIsResendEnabled(true);
    }
  }, [timeLeft]);

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;

    if (text && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
    setOtp(newOtp);
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && index > 0 && !otp[index]) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    const enteredOtp = otp.join('');
    if (enteredOtp.length === 6) {
      console.log(`Entered OTP: ${enteredOtp}`);
    } else {
      console.log('Please complete the OTP input.');
    }
  };

  const handleResendCode = () => {
    setTimeLeft(240);
    setIsResendEnabled(false);
    console.log('Resent OTP');
  };

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: theme.colors.white}]}>
      <StatusBar
        animated
        backgroundColor={theme.colors.primary}
        barStyle="light-content"
        showHideTransition="fade"
        hidden={false}
      />
      <ScrollView style={styles.scrollView}>
        <View style={styles.wrapper}>
          <View style={styles.header}>
            <View style={styles.backIcon}>
              <Image
                source={require('./../../assets/images/back.png')}
                style={styles.backImage}
              />
            </View>

            <Image
              source={require('./../../assets/images/dark_logo_only.png')}
              style={styles.logo}
            />

            <Text style={[styles.title, {color: theme.colors.primary}]}>Verification</Text>
            <Text style={[styles.subtitle, {color: theme.colors.primary}]}>
              We have sent a code to Name@mail.com
            </Text>
          </View>

          <View style={styles.otpSection}>
            {/* OTP Input Row */}
            <View style={styles.otpContainer}>
              {otp.map((digit, index) => (
                <TextInput
                  key={index}
                  ref={(ref) => (inputRefs.current[index] = ref)}
                  style={[
                    styles.otpBox,
                    {
                      borderColor: theme.colors.primary,
                      color: theme.colors.text,
                    },
                  ]}
                  keyboardType="numeric"
                  maxLength={1}
                  value={digit}
                  onChangeText={(text) => handleChange(text, index)}
                  onKeyPress={(e) => handleKeyPress(e, index)}
                />
              ))}
            </View>
            <Text style={[styles.timer, {color: theme.colors.primary}]}>
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </Text>
          </View>

          <View style={styles.footer}>
            <View style={styles.resendSection}>
              <Text style={[styles.resendText, {color: theme.colors.primary}]}>
                Didn't receive the code?
              </Text>
              <MyButton
                mode="text"
                onPress={handleResendCode}
                label="Resend OTP"
                disabled={!isResendEnabled}
              />
            </View>
            <MyButton
              mode="contained"
              onPress={handleSubmit}
              label="Verify"
              disabled={otp.join('').length !== 6}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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
    flexDirection: 'column',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  backIcon: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  backImage: {
    height: 32,
    width: 32,
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
  otpSection: {
    flex: 1,
    alignItems: 'center',
    gap: 10,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  otpBox: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 5,
  },
  timer: {
    fontSize: 16,
    marginTop: 10,
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
  },
  resendSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resendText: {
    fontSize: 14,
  },
});

export default Verification;
