import { View, Text, VirtualizedList } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

interface Message {
  id: string;
  message: string;
}
export default function VirtualList() {
  const [data, setData] = useState<Message[]>([]);
  const getData = (): Message[] => {
    return Array.from({ length: 400 }).map((item, index) => ({
      id: `Message Id: ${index + 1}`,
      message: `Message: ${index + 1}`,
    }));
  };
  useEffect(() => {
    setData(getData());
  }, []);
  const getItem = (data: Message[], index: number) => data[index];
  const getItemCount = (data: Message[]) => data.length;
  const renderItem = ({ item }: { item: Message }) => (
    <View className="bg-red-400 p-5 m-3 rounded-md ">
      <Text className="text-white text-center font-semibold text-lg">
        {item.message}
      </Text>
    </View>
  );
  return (
    <SafeAreaView>
      <Link href={"/"} className="underline mb-4">
        Back Home
      </Link>
      <View>
        <VirtualizedList
          data={data}
          getItem={getItem}
          getItemCount={getItemCount}
          renderItem={renderItem}
          initialNumToRender={5}
          keyExtractor={(item: Message) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}
