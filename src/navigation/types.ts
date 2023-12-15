import {StackNavigationProp} from '@react-navigation/stack';

export type StackParamList = {
  home: undefined;
  tasks: undefined;
  list: undefined;
};

export type HomeScreenNavigationProp = StackNavigationProp<
  StackParamList,
  'home'
>;

export interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}
