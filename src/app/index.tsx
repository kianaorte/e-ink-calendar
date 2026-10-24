import TodoItem from "@/components/TodoItem";
import {
  borderWidth,
  colors,
  fontSize,
  radius,
  spacing,
} from "@/constants/theme";
import { getDaysTilEurope } from "@/utils/getDaysTilEurope";
import { router } from "expo-router";
import { CloudSun, PlaneTakeoff } from "lucide-react-native";
import { Button, StyleSheet, Text, View } from "react-native";

const events = [
  { id: 1, time: "9:30am", title: "Standup" },
  { id: 2, time: "11:30am", title: "Catchup" },
  { id: 3, time: "4:30pm", title: "Gym" },
];

const todos = [
  { id: 1, item: "Buy groceries" },
  { id: 2, item: "Do laundry" },
  { id: 3, item: "Get sweet treat" },
];

export default function HomeScreen() {
  const daysTilEurope = getDaysTilEurope();

  return (
    <View>
      <Button title="Calendar" onPress={() => router.push("/calendar")} />
      <View style={styles.banner}>
        <Text style={styles.heading}>Friday</Text>
        <View style={styles.dateRow}>
          <Text style={styles.body}>23 October</Text>
          <View style={styles.iconRow}>
            <CloudSun />
            <Text>Cloudy 21°C</Text>
          </View>
        </View>
      </View>
      <View style={styles.home}>
        <View style={styles.panel}>
          <View style={[styles.subSection, styles.eventsCard]}>
            <Text style={styles.subheading}>Today</Text>
            {events.map((event) => (
              <Text key={event.id} style={styles.body}>
                {event.time} {event.title}
              </Text>
            ))}
          </View>
        </View>
        <View style={styles.panel}>
          <View style={styles.subSection}>
            <Text style={styles.subheading}>Reminders List</Text>
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </View>
          <View style={styles.subSection}>
            <View style={styles.iconRow}>
              <PlaneTakeoff />
              <Text style={styles.subheading}>Euro Countdown</Text>
            </View>
            <Text style={styles.body}>{daysTilEurope} days til Europe!</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    flexDirection: "row",
    alignItems: "stretch",
  },
  banner: {
    padding: spacing.lg,
  },
  panel: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: spacing.lg,
    gap: spacing.lg,
  },
  subSection: {
    gap: spacing.sm,
    alignSelf: "stretch",
  },
  heading: {
    fontSize: fontSize.xxl,
  },
  subheading: {
    fontSize: fontSize.lg,
  },
  body: {
    fontSize: fontSize.md,
  },
  dateRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconRow: {
    flexDirection: "row",
    gap: spacing.xs,
  },
  eventsCard: {
    flexGrow: 1,
    padding: spacing.lg,
    borderWidth: borderWidth,
    borderColor: colors.border,
    borderRadius: radius.sm,
  },
});
