import { types } from 'mobx-state-tree'

export const User = types
  .model('User', {
    name:     types.string
    ,username: types.string
    ,email:    types.string
    ,age:      18
    ,location: types.string
  })
  .actions(self => ({haveBirthday: () => ++self.age}))

export const me = User.create({
  name:     'Alistar Corvi'
  ,username: 'amcorvi'
  ,email:    'amcorvi@unknd.io'
  ,location: 'Porto'
  ,age:      30
})
