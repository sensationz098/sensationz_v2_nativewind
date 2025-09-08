import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Assuming you have expo-icons installed

// --- SAMPLE DATA ---
// In a real app, this data would come from your state management or API
const trialCourses = [
  {
    id: "trial1",
    title: "Introduction to Python",
    timing: "Next class: Tomorrow at 10:00 AM",
  },
];

const enrolledCourses = [
  {
    id: "enroll1",
    title: "The Complete React Native Course",
    timing: "Mon, Wed, Fri at 4:00 PM",
  },
  {
    id: "enroll2",
    title: "Advanced UI/UX with Figma",
    timing: "Tue, Thu at 6:00 PM",
  },
];

const hasTrialCourses = trialCourses.length > 0;
// --- END SAMPLE DATA ---

const TrialCourseCard = ({ course }) => (
  <View className="bg-white rounded-2xl shadow-md p-5 mb-5">
    <Text className="font-quicksand-bold text-lg text-gray-800 mb-1">
      {course.title}
    </Text>
    <View className="flex-row items-center mb-4">
      <Ionicons name="time-outline" size={16} color="#6b7280" />
      <Text className="font-quicksand-medium text-sm text-gray-500 ml-2">
        {course.timing}
      </Text>
    </View>
    <TouchableOpacity className="bg-blue-500 py-3 rounded-lg w-full items-center">
      <Text className="text-white font-quicksand-semibold text-base">
        Join Trial Class
      </Text>
    </TouchableOpacity>
  </View>
);

const EnrolledCourseCard = ({ course }) => (
  <View className="bg-white rounded-2xl shadow-md p-5 mb-5">
    <Text className="font-quicksand-bold text-lg text-gray-800 mb-1">
      {course.title}
    </Text>
    <View className="flex-row items-center mb-5">
      <Ionicons name="time-outline" size={16} color="#6b7280" />
      <Text className="font-quicksand-medium text-sm text-gray-500 ml-2">
        {course.timing}
      </Text>
    </View>
    <View className="flex-row gap-2">
      <TouchableOpacity className="flex-1 bg-green-500 py-3 rounded-lg items-center justify-center flex-row">
        <Ionicons name="logo-whatsapp" size={18} color="white" />
        <Text className="text-white font-quicksand-semibold text-base ml-2">
          WhatsApp
        </Text>
      </TouchableOpacity>
      <TouchableOpacity className="flex-1 bg-primary py-3 rounded-lg items-center justify-center">
        <Text className="text-white font-quicksand-semibold text-base">
          Join Class
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);

const EnrolledCoursesScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-50 mt-10">
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 24 }}
        showsVerticalScrollIndicator={false}
      >
        <Text className="font-quicksand-bold text-3xl text-gray-900 mb-8 text-left">
          My Learning
        </Text>

        {/* --- Trial Courses Section --- */}
        {/* This entire block is conditionally rendered */}
        {hasTrialCourses && (
          <View className="mb-8">
            <Text className="font-quicksand-bold text-xl text-gray-800 mb-4">
              Trial Courses
            </Text>
            {trialCourses.map((course) => (
              <TrialCourseCard key={course.id} course={course} />
            ))}
          </View>
        )}

        {/* --- Enrolled Courses Section --- */}
        <View>
          <Text className="font-quicksand-bold text-xl text-gray-800 mb-4">
            Enrolled Courses
          </Text>
          {enrolledCourses.map((course) => (
            <EnrolledCourseCard key={course.id} course={course} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EnrolledCoursesScreen;
