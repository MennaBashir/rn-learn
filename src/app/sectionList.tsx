import { View, Text, SectionList } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

interface Contact {
  id: string;
  name: string;
  phone: string;
}
interface ContactInfo {
  title: string;
  data: Contact[];
}
const sections: ContactInfo[] = [
  {
    title: "A",
    data: [
      { id: "a1", name: "Ahmed", phone: "+20 010438704" },
      { id: "a2", name: "Amgd", phone: "+20 012355704" },
    ],
  },
  {
    title: "B",
    data: [{ id: "b1", name: "Bashir", phone: "+20 011938474" }],
  },
  {
    title: "M",
    data: [{ id: "m1", name: "Menna", phone: "+20 010438704" }],
  },
];
export default function SectionListScreen() {
  const renderItem = ({ item }: { item: Contact }) => {
    return (
      <View className="m-3 border-b border-b-[#eee] pb-4">
        <Text className="font-bold text-xl">{item.name}</Text>
        <Text className="text-[#9d9a9a] ">{item.phone}</Text>
      </View>
    );
  };

  const renderHeader = ({ section }: { section: ContactInfo }) => (
    <View className="bg-[#d7d2d2] p-2 ">
      <Text className="text-lg">{section.title}</Text>
    </View>
  );

  const renderFooter = ({ section }: { section: ContactInfo }) => (
    <View className="bg-[#eee] p-1">
      <Text className="text-center text-[#333]">
        {section.data.length} contact{section.data.length > 1 && "s"}
      </Text>
    </View>
  );
  return (
    <SafeAreaView>
      <Link href={"/"} className="underline mb-4">
        Back Home
      </Link>
      <View>
        <SectionList
          sections={sections}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          renderSectionHeader={renderHeader}
          renderSectionFooter={renderFooter}
          stickyHeaderHiddenOnScroll={true}
          ListEmptyComponent={
            <Text className="text-center text-gray-500 mt-4">
              No contacts found
            </Text>
          }
        />
      </View>
    </SafeAreaView>
  );
}
