// ExternalLink.tsx

import React from 'react';
import {
  TouchableOpacity,
  Text,
  Linking,
  StyleProp,
  ViewStyle,
} from 'react-native';

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export function ExternalLink({href, children, style}: ExternalLinkProps) {
  const handlePress = () => {
    Linking.openURL(href).catch(err => {
      console.error('Failed to open URL:', err);
    });
  };

  return (
    <TouchableOpacity onPress={handlePress} style={style}>
      {children}
    </TouchableOpacity>
  );
}
