import styled from '@emotion/native';
import {ScrollView} from 'react-native-gesture-handler';
import {Text, View, Image} from 'react-native';

export const Container = styled(ScrollView)`
  /* border: 1px solid black; */
  background-color: #0d0d0d;
`;

export const ViewStyle = styled(View)`
  flex: 1;
`;

export const Loader = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const BgImg = styled(Image)`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const Poster = styled(Image)`
  width: 100px;
  height: 160px;
  border-radius: 5px;
  background-color: grey;
`;

export const Title = styled(Text)`
  font-size: 16px;
  font-weight: 600;
  color: #ffbe0b;
`;

export const Wrapper = styled(View)`
  flex-direction: row;
  height: 100%;
  width: 90%;
  margin: 0 auto;
  justify-content: space-around;
  align-items: center;
`;

export const Column = styled(View)`
  width: 60%;
  margin-left: 10px;
`;

export const Overview = styled(Text)`
  color: white;
  margin-top: 10px;
  width: 80%;
`;

export const Votes = styled(Overview)``;

export const ListTitle = styled.Text`
  color: white;
  font-weight: 600;
  margin-left: 20px;
  font-size: 18px;
`;

export const Movie = styled(View)`
  margin-right: 10px;
  align-items: center;
`;

export const TrendingScroll = styled.ScrollView`
  margin-top: 20px;
`;

export const Name = styled(Text)`
  color: white;
`;

export const ListContainer = styled.View`
  margin-bottom: 10px;
`;

export const HMovie = styled.View`
  padding: 0px 30px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const HColumn = styled.View`
  margin-left: 10px;
  width: 80%;
`;

export const Release = styled.Text`
  font-size: 12px;
  color: #ffbe0b;
  font-weight: 500;
`;

export const Search_Input = styled.TextInput`
  border: 1px solid grey;
  border-radius: 10px;
  width: 90%;
  margin-left: 20px;
  font-size: 14px;
  height: 1.1%;
  padding: 0px 15px;
  margin-bottom: 5px;
  margin-top: 5px;
  color: white;
`;
