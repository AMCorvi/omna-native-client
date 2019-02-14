import React from 'react'
import {User} from '../store/User.model.js'
import {Button, View, Text} from 'react-native'
import {SaltinoText} from '../components/StyledText'
import {observer} from 'mobx-react'

const UserView = ({user}) => (
  <View>
    <SaltinoText style={{fontSize: 45}}>
      RealName: {user.name}
    </SaltinoText>
    <Text>
      User: {user.username}
    </Text>

    <Text>
      Age: {user.age}
    </Text>



    <Button
      onPress={user.haveBirthday}
      title='Increase Age'
      color='#B22222'
    />
  </View>
)

export default observer(UserView)
