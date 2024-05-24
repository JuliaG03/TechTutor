import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const TalkingBallon = ({ sentence }) => {
  let x = wordShredding(sentence);
  function wordShredding(text) {
    const sentences = text.split(" ");
    return sentences;
  }

  return (
    <View className="w-[80%] bg-white rounded-xl p-[15px] border-[1px] m-[10px] ml-9">
      <View className="w-0 h-0 border-l-[20px] border-r-[1px] border-b-[20px] border-solid rounded-[5px] bg-transparent border-l-transparent
      border-r-transparent border-b-black absolute top-1/2 -left-[15%] items-center justify-center">
        <View className="w-0 h-0 border-l-[17.5px] border-r-[1px] border-b-[17.5px] border-solid rounded-[5px]
        bg-transparent border-l-transparent border-r-transparent border-b-white top-[10.2px] -left-2">     
        </View>
      </View>

      <Text>
        {x.map((item, index) => (
          <Text key={index}>
            <Text> </Text>
              <Text className="text-lg tracking-[0.5px] justify-around text-center leading-[30px]">{item}</Text>
          </Text>
        ))}
      </Text>
    </View>
  );
};

export default TalkingBallon;