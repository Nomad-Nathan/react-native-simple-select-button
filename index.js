import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'


const SimpleSelectButton = ({ 
  text,
  textSize,
  iconName,
  iconColor,
  iconSize,
  buttonDefaultColor,
  buttonSelectedColor,
  textDefaultColor,
  textSelectedColor,
  isChecked,
  style,
  styleText,
  styleIcon,
  ...props
 }) => {

    return (
      <TouchableOpacity
        {...props}
        style={{ paddingVertical: 10, }}
        >

        <View 
          style={{ 
            flexDirection: 'row',
            borderRadius: 5,
            overflow: 'hidden',
            textAlign: 'center',
            justifyContent: 'center',
            backgroundColor: isChecked === true ? buttonSelectedColor : buttonDefaultColor 
          }}>
            <Text
              style={[styleText, { fontSize: textSize, color: isChecked === true ? textSelectedColor : textDefaultColor } ]}>
              {text}
            </Text>
            <Text 
              style={styleIcon}>
              <MaterialCommunityIcons name={iconName} size={iconSize} color={iconColor} />
            </Text>
        </View>

      </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    button_item: {
        padding: 8,
        margin: 5,
        borderRadius: 5,
        textAlign: 'center'
    },

})

export default SimpleSelectButton;
