import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: #ededed;
`;

export const Header = styled.View`
  height: 80px;
  background-color: #f04c41;
  width: 100%;
  align-items: center;
  padding-top: 40px;
`;

export const HeaderTitle = styled.Text`
  color: #ffff;
  height: 80px;
  font-size: 18px;
  font-weight: bold;
`;

export const OrderBox = styled.View`
  height: 280px;
  background-color: #ffff;
  margin: 20px;

  elevation: 30;
`;

export const OrderBoxHeader = styled.View`
padding: 20px
  flex-direction: row;
  
`;

export const OrderTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin: 10px 15px;
`;

export const OrderDescription = styled.View`
  width: 100%
  height: 100px;
 
`;

export const OrderDescriptionHeader = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const OrderDescriptionTitle = styled.Text`
  width: 50%;
  font-weight: bold;
  font-size: 16px;
  margin: 15px 0px 15px 15px;
  text-align: left;
`;

export const OrderDescriptionTitlePrice = styled.Text`
  width: 40%;
  text-align: right;
  font-weight: bold;
  font-size: 16px;
  margin: 15px 15px 15px 10px;
`;

export const OrderDescriptionItems = styled.Text`
  font-size: 14px;
  margin: 0px 15px;

  color: #a6a6a6;
`;

export const ButtonContainer = styled.TouchableNativeFeedback`
  width: 100%;
  text-align: center;
`;

export const ButtonLabel = styled.Text`
  background-color: #f04c41;
  color: #ffff;
  height: 50px;
  margin: 15px;
  text-align: center;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  padding-top: 13px;
`;
