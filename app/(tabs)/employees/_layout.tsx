import { employees } from "../data/employees";
import {
  DrawerContentScrollView,
  type DrawerContentComponentProps,
} from "@react-navigation/drawer";
import { router } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { Pressable, StyleSheet, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function CustomDrawerContent(props: DrawerContentComponentProps) {
  const insets = useSafeAreaInsets();
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={[
        styles.drawerContainer,
        { paddingTop: insets.top },
      ]}>
      <Text style={styles.drawerTitle}>Employees</Text>
      {employees.map((emp) => (
        <Pressable
          key={emp.id}
          style={({ pressed }) => [
            styles.drawerItem,
            pressed && styles.drawerItemPressed,
          ]}
          onPress={() => router.push(`/employees/${emp.id}`)}>
          <Text style={styles.drawerItemText}>{emp.name}</Text>
          <Text style={styles.drawerItemSubtext}>{emp.role}</Text>
        </Pressable>
      ))}
    </DrawerContentScrollView>
  );
}

export default function EmployeesLayout() {
  return (
    <Drawer
      drawerContent={CustomDrawerContent}
      screenOptions={{
        drawerStyle: styles.drawer,
        headerStyle: { backgroundColor: "#25292e" },
        headerTintColor: "#fff",
        headerTitleStyle: { color: "#fff" },
      }}>
      <Drawer.Screen
        name="[employee]"
        options={{ drawerLabel: "Employee", title: "Employee" }}
      />
    </Drawer>
  );
}

const styles = StyleSheet.create({
  drawer: {
    backgroundColor: "#25292e",
  },
  drawerContainer: {
    paddingBottom: 16,
  },
  drawerTitle: {
    color: "#ffd33d",
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#3a3f45",
    marginBottom: 8,
  },
  drawerItem: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  drawerItemPressed: {
    backgroundColor: "#3a3f45",
  },
  drawerItemText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "500",
  },
  drawerItemSubtext: {
    color: "#aaa",
    fontSize: 12,
    marginTop: 2,
  },
});