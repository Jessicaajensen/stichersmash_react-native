export interface Employee {
  id: string;
  name: string;
  role: string;
  department: string;
  email: string;
  age: number;
  location: string;
}

export const employees: Employee[] = [
  {
    id: "alice-johnson",
    name: "Alice Johnson",
    role: "CEO",
    department: "Executive",
    email: "alice@stickersmash.com",
    age: 45,
    location: "New York",
  },
  {
    id: "bob-martinez",
    name: "Bob Martinez",
    role: "CTO",
    department: "Engineering",
    email: "bob@stickersmash.com",
    age: 41,
    location: "San Francisco",
  },
  {
    id: "carol-lee",
    name: "Carol Lee",
    role: "Lead Designer",
    department: "Design",
    email: "carol@stickersmash.com",
    age: 34,
    location: "Austin",
  },
  {
    id: "david-kim",
    name: "David Kim",
    role: "Senior Engineer",
    department: "Engineering",
    email: "david@stickersmash.com",
    age: 30,
    location: "Seattle",
  },
  {
    id: "eva-nguyen",
    name: "Eva Nguyen",
    role: "Product Manager",
    department: "Product",
    email: "eva@stickersmash.com",
    age: 37,
    location: "Chicago",
  },
  {
    id: "frank-osei",
    name: "Frank Osei",
    role: "Marketing Director",
    department: "Marketing",
    email: "frank@stickersmash.com",
    age: 39,
    location: "Atlanta",
  },
  {
    id: "grace-patel",
    name: "Grace Patel",
    role: "Data Analyst",
    department: "Analytics",
    email: "grace@stickersmash.com",
    age: 28,
    location: "Boston",
  },
  {
    id: "hank-wilson",
    name: "Hank Wilson",
    role: "DevOps Engineer",
    department: "Engineering",
    email: "hank@stickersmash.com",
    age: 33,
    location: "Denver",
  },
  {
    id: "iris-chen",
    name: "Iris Chen",
    role: "UX Researcher",
    department: "Design",
    email: "iris@stickersmash.com",
    age: 31,
    location: "Los Angeles",
  },
  {
    id: "james-brooks",
    name: "James Brooks",
    role: "Sales Lead",
    department: "Sales",
    email: "james@stickersmash.com",
    age: 44,
    location: "Miami",
  },
];