import { ScrollView, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInDown, FadeInRight } from 'react-native-reanimated';
import { ThemedText } from '@/components/themed-text';

export default function DashboardScreen() {
    const todayClasses = [
        {
            subject: 'Mobile Development',
            time: '8:00 AM - 10:00 AM',
            room: 'Room 402',
            icon: 'phone-portrait-outline',
        },
        {
            subject: 'Database Systems',
            time: '1:00 PM - 3:00 PM',
            room: 'Lab 2',
            icon: 'server-outline',
        },
        {
            subject: 'UI/UX Design',
            time: '4:00 PM - 5:30 PM',
            room: 'Room 305',
            icon: 'color-palette-outline',
        },
    ];

    const tasks = [
        {
            title: 'React Native Project Proposal',
            due: 'Due Today',
            color: 'bg-red-500',
        },
        {
            title: 'Database Normalization Activity',
            due: 'Due Tomorrow',
            color: 'bg-yellow-500',
        },
        {
            title: 'UI Prototype Submission',
            due: 'Due Friday',
            color: 'bg-green-500',
        },
    ];

    return (
        <ScrollView
            className="flex-1 bg-slate-950"
            contentContainerStyle={{
                padding: 20,
                paddingBottom: 50,
            }}
            showsVerticalScrollIndicator={false}
        >
            {/* Header */}
            <Animated.View
                entering={FadeInDown.duration(700)}
                className="flex-row justify-between items-center mt-4"
            >
                <View>
                    <ThemedText className="text-white text-4xl font-extrabold">
                        Dashboard
                    </ThemedText>
                    <ThemedText className="text-slate-400 mt-1">
                        Stay synced and productive.
                    </ThemedText>
                </View>

                <TouchableOpacity className="bg-slate-800/70 p-3 rounded-full border border-slate-700">
                    <Ionicons
                        name="person-circle-outline"
                        size={38}
                        color="#60A5FA"
                    />
                </TouchableOpacity>
            </Animated.View>

            {/* Overview */}
            <Animated.View
                entering={FadeInDown.delay(150).duration(700)}
                className="mt-8 rounded-3xl overflow-hidden"
            >
                <LinearGradient
                    colors={['#2563EB', '#7C3AED', '#0EA5E9']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    className="p-6"
                >
                    <ThemedText className="text-white text-xl font-bold">
                        Today Overview
                    </ThemedText>

                    <View className="flex-row justify-between mt-5">
                        {[
                            { value: '3', label: 'Classes' },
                            { value: '3', label: 'Tasks' },
                            { value: '2', label: 'Upcoming' },
                        ].map((item, index) => (
                            <View
                                key={index}
                                className="bg-white/15 px-5 py-4 rounded-2xl items-center min-w-[90px]"
                            >
                                <ThemedText className="text-white text-2xl font-extrabold">
                                    {item.value}
                                </ThemedText>
                                <ThemedText className="text-slate-200 text-sm">
                                    {item.label}
                                </ThemedText>
                            </View>
                        ))}
                    </View>
                </LinearGradient>
            </Animated.View>

            {/* Classes */}
            <Animated.View
                entering={FadeInRight.delay(250).duration(700)}
                className="mt-8"
            >
                <ThemedText className="text-white text-2xl font-bold mb-4">
                    Today’s Classes
                </ThemedText>

                <View className="gap-4">
                    {todayClasses.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            activeOpacity={0.9}
                            className="bg-slate-900/80 border border-slate-800 rounded-3xl p-5 flex-row items-center"
                        >
                            <View className="bg-blue-500/20 p-4 rounded-2xl mr-4">
                                <Ionicons
                                    name={item.icon}
                                    size={24}
                                    color="#60A5FA"
                                />
                            </View>

                            <View className="flex-1">
                                <ThemedText className="text-white font-bold text-lg">
                                    {item.subject}
                                </ThemedText>
                                <ThemedText className="text-slate-400">
                                    {item.time}
                                </ThemedText>
                                <ThemedText className="text-slate-500 text-sm">
                                    {item.room}
                                </ThemedText>
                            </View>

                            <Ionicons
                                name="chevron-forward"
                                size={20}
                                color="#64748B"
                            />
                        </TouchableOpacity>
                    ))}
                </View>
            </Animated.View>

            {/* Tasks */}
            <Animated.View
                entering={FadeInRight.delay(350).duration(700)}
                className="mt-8"
            >
                <ThemedText className="text-white text-2xl font-bold mb-4">
                    Tasks & Deadlines
                </ThemedText>

                <View className="gap-4">
                    {tasks.map((task, index) => (
                        <TouchableOpacity
                            key={index}
                            className="bg-slate-900/80 border border-slate-800 rounded-3xl p-5 flex-row items-center"
                        >
                            <View
                                className={`w-3 h-12 rounded-full ${task.color} mr-4`}
                            />

                            <View className="flex-1">
                                <ThemedText className="text-white font-semibold">
                                    {task.title}
                                </ThemedText>
                                <ThemedText className="text-slate-400">
                                    {task.due}
                                </ThemedText>
                            </View>

                            <Ionicons
                                name="time-outline"
                                size={22}
                                color="#94A3B8"
                            />
                        </TouchableOpacity>
                    ))}
                </View>
            </Animated.View>

            {/* Quick Actions */}
            <Animated.View
                entering={FadeInDown.delay(450).duration(700)}
                className="mt-8"
            >
                <ThemedText className="text-white text-2xl font-bold mb-4">
                    Quick Actions
                </ThemedText>

                <View className="flex-row justify-between gap-3">
                    {[
                        {
                            icon: 'calendar-outline',
                            label: 'Schedule',
                        },
                        {
                            icon: 'checkmark-done-outline',
                            label: 'Tasks',
                        },
                        {
                            icon: 'people-outline',
                            label: 'Groups',
                        },
                    ].map((action, index) => (
                        <TouchableOpacity
                            key={index}
                            activeOpacity={0.85}
                            className="flex-1 rounded-3xl overflow-hidden"
                        >
                            <LinearGradient
                                colors={['#1D4ED8', '#7C3AED']}
                                className="py-5 items-center rounded-3xl"
                            >
                                <Ionicons
                                    name={action.icon}
                                    size={24}
                                    color="#FFFFFF"
                                />
                                <ThemedText className="text-white mt-2 font-semibold text-sm">
                                    {action.label}
                                </ThemedText>
                            </LinearGradient>
                        </TouchableOpacity>
                    ))}
                </View>
            </Animated.View>
        </ScrollView>
    );
}