import { View, Text, Dimensions, TouchableWithoutFeedback, Image } from 'react-native'
import { useNavigantion} from '@react-navigation/native';
import Carousel from 'react-native-reanimated-carousel'


var { width, height } = Dimensions.get('window');

export default function TrendingMovies({data}) {
    const navigation = useNavigantion();
    const handleClick = (item) => {
        navigation.navigate ('Movie', item);
    }
  return (
    <View>
      <Text className="text-white text-xl mx-4">Em alta</Text>
      <Carousel

      />
    </View>
  )
}

const MovieCard = ({item, handleClick}) => {
    return (
        <TouchableWithoutFeedback onPress={() => handleClick(item)}>
            <image
                source={require('')}
                style={{width: '100%', height: '100%'}}
                className="rouded-2x1"
            />
        </TouchableWithoutFeedback>
    )
}