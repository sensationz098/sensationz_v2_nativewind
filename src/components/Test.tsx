import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";

// Sample Data
const categories = [
  { id: "1", title: "Development" },
  { id: "2", title: "Design" },
  { id: "3", title: "Business" },
  { id: "4", title: "Marketing" },
  { id: "5", title: "Photography" },
];

const courses = [
  {
    id: "1",
    title: "React Native - The Practical Guide",
    author: "Maximilian Schwarzmüller",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "2",
    title: "Modern UI/UX Figma for Beginners",
    author: "Jane Doe",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3",
    title: "The Complete JavaScript Course 2025",
    author: "Jonas Schmedtmann",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const CourseCard = ({ course }) => (
  <View className="bg-white rounded-2xl shadow-md overflow-hidden mb-6">
    <Image source={{ uri: course.image }} className="w-full h-44" />
    <View className="p-4">
      <Text className="font-quicksand-bold text-lg text-gray-900">
        {course.title}
      </Text>
      <Text className="font-quicksand-medium text-sm text-gray-500 mt-1 mb-3">
        By {course.author}
      </Text>
      <TouchableOpacity className="bg-primary py-3 px-5 rounded-lg self-start w-full">
        <Text className="text-white font-quicksand-semibold text-sm text-center">
          View Details
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);

const CategoryChip = ({ title, active }) => (
  <TouchableOpacity
    className={`py-2 px-5 rounded-full mr-3 ${
      active ? "bg-primary" : "bg-white"
    }`}
  >
    <Text
      className={`font-quicksand-bold ${
        active ? "text-white" : "text-gray-700"
      }`}
    >
      {title}
    </Text>
  </TouchableOpacity>
);

const Test = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-50 mt-10">
      <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View className="px-6 pt-8 pb-6">
          {/* <Text className="font-quicksand-medium text-lg text-gray-600">
            Welcome back!
          </Text> */}
          <Text className="font-quicksand-bold text-3xl text-gray-900">
            What will you learn today?
          </Text>
        </View>

        {/* Categories */}
        <View className="mb-8">
          <Text className="font-quicksand-bold text-xl text-gray-900 px-6 mb-4">
            Categories
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 24 }}
          >
            {categories.map((category, index) => (
              <CategoryChip
                key={category.id}
                title={category.title}
                active={index === 0} // Make the first one active for demo
              />
            ))}
          </ScrollView>
        </View>

        {/* Courses List */}
        <View className="px-6">
          <Text className="font-quicksand-bold text-xl text-gray-900 mb-4">
            Popular Courses
          </Text>
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Test;
