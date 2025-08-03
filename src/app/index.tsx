import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

export default function Page() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Text className="text-center text-3xl font-semibold ">Home Page</Text>
        </View>
        <Link href="/flatList">FlatList</Link>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
