import { colors, spacing } from "@/constants/theme";
import { Sparkles } from "lucide-react-native";
import { StyleSheet, Text, View } from "react-native";

export type Todo = {
  id: number;
  item: string;
};

const TodoItem = ({ todo }: { todo: Todo }) => {
  return (
    <View style={styles.todo}>
      <Sparkles size={24} color={colors.text} />
      <Text style={styles.todoLabel}>{todo.item}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
  },
  todoLabel: {
    flexShrink: 1,
  },
});

export default TodoItem;
