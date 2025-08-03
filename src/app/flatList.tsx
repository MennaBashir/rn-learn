import { View, Text, FlatList, RefreshControl } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { useEffect, useState } from "react";

interface User {
  id: string;
  name: string;
  email: string;
}
function renderEmptyComponent() {
  return (
    <View>
      <Text className="text-red-600">Empty Component</Text>
    </View>
  );
}
function renderSeparator() {
  return <View className="w-full h-[1px] bg-slate-400" />;
}
export default function FlatlistComponent() {
  const [data, setData] = useState<User[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);
  const getData = (count: number, startIndex: number = 0): User[] => {
    return Array.from({ length: count }).map((_, index) => ({
      id: `UserID: ${index + 1 + startIndex}`,
      name: `UserName: ${index + 1 + startIndex}`,
      email: `user@gmail.com`,
    }));
  };
  // To get Data
  useEffect(() => {
    setData(getData(20));
  }, []);
  // To Render Item
  const renderItem = ({ item }: { item: User }) => {
    return (
      <View className="bg-[#d0d2e8] p-4 m-4 rounded-md text-lg">
        <Text>{item.name}</Text>
        <Text>{item.email}</Text>
      </View>
    );
  };
  // On Refresh
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setData(getData(30));
      setRefreshing(false);
    }, 1000);
  };
  // On Reached end list
  const handleMoreData = () => {
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      setData((prev) => {
        let startIndex = prev.length;
        return [...prev, ...getData(10, startIndex)];
      });
      setLoading(false);
    }, 1000);
  };
  return (
    <SafeAreaView>
      <Link href={"/"} className="underline mb-4">
        Back Home
      </Link>
      <View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={renderEmptyComponent}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          onEndReached={handleMoreData}
          onEndReachedThreshold={0.1}
          ItemSeparatorComponent={renderSeparator}
        />
      </View>
    </SafeAreaView>
  );
}
