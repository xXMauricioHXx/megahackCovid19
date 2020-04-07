import styled, { css } from 'styled-components/native';
import { Platform } from 'react-native';

export const LocationBox = styled.View`
  background: #f04c41;
  elevation: 1;
  border-radius: 10px;
  flex-direction: row;
  ${Platform.select({
    ios: css`
      margin-top: 20px;
    `,
    android: css`
      margin-left: 20px;
    `,
  })}
`;

export const LocationText = styled.Text`
  margin: 3px 10px;
  padding: 5px 5px;
  font-size: 14px;
  color: #fff;
`;

export const LocationTimeBox = styled.View`
  padding: 0px 10px;
  border: 1px solid #fff;
  background: #fff;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const LocationTimeText = styled.Text`
  font-size: 12px;
  text-align: center;
  background: #ffff;
  color: #333;
`;

export const LocationTimeTextSmall = styled.Text`
  font-size: 10px;
  text-align: center;
  color: #333;
  background: #fff;
`;
