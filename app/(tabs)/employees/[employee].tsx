import { employees } from "../data/employees"; // Ensure this file exists and path alias is configured in tsconfig.json
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function EmployeeScreen() {
  const { employee: id } = useLocalSearchParams<{ employee: string }>();
  const emp = employees.find((e) => e.id === id);

  if (!emp) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Employee not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{emp.name}</Text>
      <Text style={styles.role}>{emp.role}</Text>

      <View style={styles.card}>
        <InfoRow
          label="Department"
          value={emp.department}
        />
        <InfoRow
          label="Email"
          value={emp.email}
        />
        <InfoRow
          label="Age"
          value={String(emp.age)}
        />
        <InfoRow
          label="Location"
          value={emp.location}
        />
      </View>
    </View>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    padding: 24,
  },
  name: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 4,
  },
  role: {
    color: "#ffd33d",
    fontSize: 16,
    marginBottom: 24,
  },
  card: {
    backgroundColor: "#2e3540",
    borderRadius: 12,
    padding: 16,
    gap: 14,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    color: "#aaa",
    fontSize: 14,
  },
  value: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },
  errorText: {
    color: "#fff",
    fontSize: 16,
  },
});