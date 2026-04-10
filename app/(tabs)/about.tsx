import { employees } from "./data/employees";
import { Link } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
  return (
      <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}>
      <Text style={styles.heading}>Our Team</Text>
      <Text style={styles.subheading}>Meet the people behind StickerSmash</Text>

      {employees.map((emp) => (
        <Link
          key={emp.id}
          href={`/employees/${emp.id}`}
          asChild>
          <Pressable style={styles.card}>
            <Text style={styles.name}>{emp.name}</Text>
            <Text style={styles.role}>{emp.role}</Text>
            <Text style={styles.department}>{emp.department}</Text>
          </Pressable>
        </Link>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  heading: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 4,
  },
  subheading: {
    color: "#aaa",
    fontSize: 14,
    marginBottom: 24,
  },
  card: {
    backgroundColor: "#2e3540",
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
  },
  name: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  role: {
    color: "#ffd33d",
    fontSize: 13,
    marginTop: 2,
  },
  department: {
    color: "#aaa",
    fontSize: 12,
    marginTop: 2,
  },
});
