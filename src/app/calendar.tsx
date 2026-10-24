import { Category } from "@/constants/categories";
import { calendarColors, colors, fontSize } from "@/constants/theme";
import { weeklyEvents } from "@/data/weeklyEvents";
import { router } from "expo-router";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextStyle,
  View,
} from "react-native";

const Calendar = () => {
  const groupedEvents = () => {
    //check their dates
    //
  };

  return (
    <View>
      <Button title="Calendar" onPress={() => router.push("/")} />
      <FlatList
        data={weeklyEvents}
        renderItem={(event) => {
          const { item } = event;
          return (
            //group data by date then render each as its own section
            <View key={item.id}>
              <Text style={styles.title}> {item.title}</Text>
              <Text>{item.location}</Text>
              <Text style={categoryColour(item.category)}>
                {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const categoryColour = (category: Category): TextStyle => {
  return { color: calendarColors[category] };
};

const styles = StyleSheet.create({
  title: {
    fontSize: fontSize.lg,
  },
  location: {
    fontSize: fontSize.md,
    color: colors.info,
  },
});

export default Calendar;
