import React, { useState } from 'react'
import { View, Text, Platform, TouchableOpacity, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import{
  Bars3BottomLeftIcon,
  MagnifyinGlassIcon
} from 'react-native-heroicons/outline';
import { styles } from '../theme';


const ios = Platform.OS == "ios";

export default function HomeScreen() {
  const [trending, setTrending] = useState([1,2,3]);
  return (
    <View className='flex-1 bg-neutral-800'>
      <SafeAreaView className={ios ? "-mb-2" : "mb-3"}>
        <StatusBar style='light' />
        <View className='flex-row justify-between itms-center mx-4 mt-2'>
          <TouchableOpacity>
            <Bars3BottomLeftIcon size={30} strokeWidth={2} color='white' />
          </TouchableOpacity>
          <text className="text-white text -3xl font-bold">
            <Text style={style.text}>Gm</Text>ovies
          </text>
          <TouchableOpacity>
            <MagnifyinGlassIcon size={30} strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        <TrandingMovies data={trending} />
      </ScrollView>
    </View>
  )
}