import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MyTextInput = ({ label, helpText, errorText, left, type, ...rest }: any) => {
  const theme = useTheme();

  return left ? (
    <>
      <TextInput
        secureTextEntry={type === 'password'}
        placeholder={label}
        placeholderTextColor={theme.colors.conversionGrey}
        {...rest}
        mode="outlined"
        textColor={theme.colors.primary}
        style={[styles.textInput, { borderRadius: 8 }]}
        left={<TextInput.Icon icon={left} color={theme.colors.primary} />}
      />
      {helpText && !errorText && (
        <View style={styles.helpTextContainer}>
          <Icon name="information" size={13} color={theme.colors.primary} />
          <Text
            variant="bodySmall"
            style={[styles.helpText, { color: theme.colors.primary }]}
          >
            {helpText}
          </Text>
        </View>
      )}
      {errorText && (
        <View style={styles.helpTextContainer}>
          <Icon name="alert-circle-outline" size={13} color={theme.colors.error} />
          <Text
            variant="bodySmall"
            style={[styles.helpText, { color: theme.colors.error }]}
          >
            {errorText}
          </Text>
        </View>
      )}
    </>
  ) : (
    <>
      <TextInput
        secureTextEntry={type === 'password'}
        placeholder={label}
        placeholderTextColor={theme.colors.conversionGrey}
        {...rest}
        mode="outlined"
        textColor={theme.colors.primary}
        style={[styles.textInput, { borderRadius: 8 }]}
      />
      {helpText && !errorText && (
        <View style={styles.helpTextContainer}>
          <Icon name="information" size={13} color={theme.colors.primary} />
          <Text
            variant="bodySmall"
            style={[styles.helpText, { color: theme.colors.primary }]}
          >
            {helpText}
          </Text>
        </View>
      )}
      {errorText && (
        <View style={styles.helpTextContainer}>
          <Icon name="alert-circle-outline" size={13} color={theme.colors.error} />
          <Text
            variant="bodySmall"
            style={[styles.helpText, { color: theme.colors.error }]}
          >
            {errorText}
          </Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    // Shared input styles
  },
  helpTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  helpText: {
    paddingLeft: 5,
  },
});

export default MyTextInput;
