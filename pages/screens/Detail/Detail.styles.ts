import styled from '@emotion/native';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: #0d0d0d;
  justify-content: space-between;
`;
export const SafeAreaTop = styled(View)``;
export const Header = styled(View)`
  width: 100%;
  height: 80px;
  padding: 0px 32px;
  background-color: #0d0d0d;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  elevation: 4;
`;
export const Button = styled(Image)`
  width: 20px;
  height: 20px;
`;
export const HeaderTitle = styled(Text)`
  width: 160px;
  text-align: center;
  /* font-family: ; */
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
`;
export const Body = styled(View)``;
export const BodyTop = styled(View)`
  padding: 19px 32px;
`;
export const BodyTitle = styled(Text)`
  /* font-family: ; */
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
`;
export const BodyTitleEmpty = styled(Text)`
  /* font-family: ; */
  font-size: 16px;
  font-weight: 700;
  color: #c4c4c4;
`;
export const BodyContent = styled(Text)`
  /* font-family: ; */
  font-size: 15px;
  color: #888888;
  margin-top: 19px;
`;
export const BodyContentEmpty = styled(Text)`
  /* font-family: ; */
  font-size: 15px;
  color: #c4c4c4;
  margin-top: 19px;
`;
export const BodyMiddel = styled(View)`
  height: 52px;
  border-width: 1px 0;
  border-color: #222222;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 16px;
  /* background-color: yellow; */
`;
export const BodyText = styled(Text)`
  height: 32px;
  background-color: #222222;
  border-radius: 10px;
  margin: 9px 0 10px 16px;
  padding: 5px 8px;
  font-size: 15px;
  color: #ffffff;
  /* elevation: 4; */
`;
export const BodyBottom = styled(View)`
  height: 230px;
  padding-left: 32px;
  padding-top: 16px;
  /* background-color: orange; */
`;
export const NullWrapper = styled(View)``;

// 불러오는 댓글 컴포넌트
export const MemoListWrapper = styled(View)`
  padding-bottom: 16px;
  display: flex;
  flex-direction: row;
`;
export const MemoListLeft = styled(View)`
  width: 287px;
`;
export const MemoContent = styled(Text)`
  width: 287px;
  color: #ffffff;
  font-size: 16px;
  padding-top: 5px;
`;
export const MemoCreatedAt = styled(Text)`
  color: #888888;
  font-size: 14px;
`;
export const MemoDeleteButton = styled(Image)`
  width: 14px;
  height: 14px;
  margin-left: 4px;
`;
