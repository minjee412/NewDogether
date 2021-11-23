import * as React from 'react';
import UserInformation from '../../../pages/screens/UserInformation';
import NickName from '../../../pages/screens/NickName/Detail';

import Push from '../../../pages/screens/Push';
import {
  SafeArea,
  SafeAreaTop,
  Button,
  HeaderTitle,
  UserInformationWrapper,
  NickNameWrapper,
  PushWrapper,
} from './Mypage.styles';

function MyPagePage({navigation}) {
  return (
    <>
      <SafeArea>
        <SafeAreaTop>
          {/* <TouchableOpacity onPressOut={() => navigation.pop()}>
                        <Button
                            source={require("../../../public/images/List/left-arrow.png")}
                        />
                    </TouchableOpacity> */}

          <HeaderTitle>마이페이지</HeaderTitle>
        </SafeAreaTop>
        <UserInformationWrapper>
          <UserInformation />
        </UserInformationWrapper>
        <NickNameWrapper>
          <NickName />
        </NickNameWrapper>
        <PushWrapper>
          <Push />
        </PushWrapper>
      </SafeArea>
    </>
  );
}

export default MyPagePage;
