// components/navigation/TabBarIcon.tsx
import React, { ComponentProps } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Ionicons from '@expo/vector-icons/Ionicons';
import { type IconProps } from '@expo/vector-icons/build/createIconSet';
import { type Component } from 'react';

export function TabBarIcon({ style, ...rest}:
  IconProps<ComponentProps<typeof Ionicons>['name']>) {
    return <Ionicons size={28} style={[{marginBottom: -3}, style]}
    {...rest} />;
  }

