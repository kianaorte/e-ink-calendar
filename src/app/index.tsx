import TodoItem, { type Todo } from "@/components/TodoItem";
import {
  borderWidth,
  colors,
  fontSize,
  radius,
  spacing,
} from "@/constants/theme";
import { calculateEuropeDate } from "@/utils/calculateEuropeDate";
import { CloudSun } from "lucide-react-native";
import { StyleSheet, Text, View } from "react-native";

const events = [
  { id: 1, time: "9:30am", title: "Standup" },
  { id: 2, time: "11:30am", title: "Catchup" },
  { id: 3, time: "4:30pm", title: "Gym" },
];

const todos: Todo[] = [
  { id: 1, item: "Buy groceries" },
  { id: 2, item: "Do laundry" },
  { id: 3, item: "Get sweet treat" },
];

export default function HomeScreen() {
  const countdownDate = calculateEuropeDate();

  return (
    <View style={styles.home}>
      <View style={styles.panel}>
        <View style={styles.subSection}>
          <Text style={styles.heading}>Friday</Text>
          <View style={styles.dateRow}>
            <Text style={styles.body}>23 October</Text>
            <View style={styles.weather}>
              <CloudSun />
              <Text>Cloudy</Text>
            </View>
          </View>
        </View>
        <View style={[styles.subSection, styles.today]}>
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
          <Text style={styles.subheading}>Euro Countdown</Text>
          <Text style={styles.body}>{countdownDate} days til Europe!</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    flexDirection: "row",
  },
  panel: {
    flex: 1,
    justifyContent: "center",
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
    alignItems: "center",
  },
  weather: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
  },
  today: {
    padding: spacing.lg,
    borderWidth: borderWidth,
    borderColor: colors.border,
    borderRadius: radius.sm,
  },
});
