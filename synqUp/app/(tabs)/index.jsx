import "../../global.css";
import { Image } from 'expo-image';
import { TouchableOpacity, View } from 'react-native';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, {
  FadeInDown,
  FadeInUp,
  FadeInRight,
} from 'react-native-reanimated';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';

export default function HomeScreen() {
  const features = [
    {
      title: 'Class Schedule Sync',
      description:
        'Seamlessly organize lectures, subjects, and class routines in one centralized hub.',
      color: 'from-blue-500/20 to-cyan-500/10',
      border: 'border-blue-500/20',
      iconBg: 'bg-blue-500/20',
      emoji: '📅',
    },
    {
      title: 'Task & Deadline Management',
      description:
        'Track assignments, projects, and deadlines with clarity and structure.',
      color: 'from-purple-500/20 to-pink-500/10',
      border: 'border-purple-500/20',
      iconBg: 'bg-purple-500/20',
      emoji: '✅',
    },
    {
      title: 'Student Collaboration',
      description:
        'Coordinate with classmates, manage group projects, and stay aligned effortlessly.',
      color: 'from-emerald-500/20 to-green-500/10',
      border: 'border-emerald-500/20',
      iconBg: 'bg-emerald-500/20',
      emoji: '👥',
    },
  ];

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#020617', dark: '#020617' }}
      headerImage={
        <Animated.View entering={FadeInDown.duration(900)}>
          <Image
            source={require('@/assets/images/partial-react-logo.png')}
            style={{
              height: 240,
              width: 340,
              position: 'absolute',
              bottom: 0,
              alignSelf: 'center',
            }}
            contentFit="contain"
          />
        </Animated.View>
      }
    >
      <View className="flex-1 bg-slate-950 px-5 pb-12">
        {/* Hero Section */}
        <Animated.View
          entering={FadeInUp.duration(800)}
          className="items-center pt-8 pb-12"
        >
          <View className="bg-blue-500/10 px-5 py-2 rounded-full border border-blue-400/20 mb-6">
            <ThemedText className="text-blue-400 font-semibold text-sm tracking-wide">
              Smart Student Productivity
            </ThemedText>
          </View>

          <ThemedText className="text-slate-400 uppercase tracking-[4px] text-sm mb-3">
            Created by KHLEIN
          </ThemedText>

          <ThemedText className="text-white text-5xl font-extrabold text-center leading-tight">
            Welcome to
          </ThemedText>

          <LinearGradient
            colors={['#3B82F6', '#8B5CF6', '#06B6D4']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            className="px-4 py-2 rounded-2xl mt-2"
          >
            <ThemedText className="text-white text-5xl font-extrabold text-center">
              SynqUp
            </ThemedText>
          </LinearGradient>

          <ThemedText className="text-slate-300 text-center text-base leading-8 mt-6 max-w-[340px]">
            Your all-in-one academic companion for smarter scheduling, task
            management, collaboration, and organized student life.
          </ThemedText>

          <Link href="/dashboard" asChild>
            <TouchableOpacity
              activeOpacity={0.85}
              className="mt-8 rounded-3xl overflow-hidden"
            >
              <LinearGradient
                colors={['#2563EB', '#7C3AED']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                className="px-12 py-5"
              >
                <ThemedText className="text-white font-bold text-lg tracking-wide">
                  Get Started →
                </ThemedText>
              </LinearGradient>
            </TouchableOpacity>
          </Link>
        </Animated.View>

        {/* Why SynqUp */}
        <Animated.View entering={FadeInRight.delay(200).duration(900)}>
          <View className="mb-8">
            <ThemedText className="text-white text-3xl font-extrabold mb-2">
              Why SynqUp?
            </ThemedText>
            <ThemedText className="text-slate-400 text-base">
              Everything students need, beautifully organized.
            </ThemedText>
          </View>

          <View className="gap-5">
            {features.map((feature, index) => (
              <LinearGradient
                key={index}
                colors={
                  index === 0
                    ? ['rgba(59,130,246,0.15)', 'rgba(14,165,233,0.05)']
                    : index === 1
                    ? ['rgba(168,85,247,0.15)', 'rgba(236,72,153,0.05)']
                    : ['rgba(16,185,129,0.15)', 'rgba(34,197,94,0.05)']
                }
                className={`rounded-3xl p-[1px]`}
              >
                <View className="bg-slate-900 rounded-3xl p-5 flex-row gap-4 items-start">
                  <View
                    className={`w-14 h-14 rounded-2xl ${feature.iconBg} items-center justify-center`}
                  >
                    <ThemedText className="text-2xl">
                      {feature.emoji}
                    </ThemedText>
                  </View>

                  <View className="flex-1">
                    <ThemedText className="text-white text-lg font-bold mb-2">
                      {feature.title}
                    </ThemedText>
                    <ThemedText className="text-slate-300 leading-6">
                      {feature.description}
                    </ThemedText>
                  </View>
                </View>
              </LinearGradient>
            ))}
          </View>
        </Animated.View>

        {/* Productivity Card */}
        <Animated.View
          entering={FadeInDown.delay(350).duration(900)}
          className="mt-10 rounded-3xl overflow-hidden"
        >
          <LinearGradient
            colors={['#0F172A', '#1E293B', '#0F172A']}
            className="p-7 border border-slate-800 rounded-3xl"
          >
            <ThemedText className="text-white text-3xl font-extrabold mb-4">
              Built for Productivity
            </ThemedText>

            <ThemedText className="text-slate-300 leading-8 text-base">
              SynqUp is crafted for students who value structure, speed, and
              simplicity. From academic planning to collaborative execution,
              every feature reduces chaos and boosts performance.
            </ThemedText>

            <View className="flex-row flex-wrap gap-3 mt-6">
              <View className="bg-blue-500/10 border border-blue-500/20 px-4 py-3 rounded-2xl">
                <ThemedText className="text-blue-400 font-semibold">
                  Cross-Platform
                </ThemedText>
              </View>

              <View className="bg-purple-500/10 border border-purple-500/20 px-4 py-3 rounded-2xl">
                <ThemedText className="text-purple-400 font-semibold">
                  Scalable
                </ThemedText>
              </View>

              <View className="bg-emerald-500/10 border border-emerald-500/20 px-4 py-3 rounded-2xl">
                <ThemedText className="text-emerald-400 font-semibold">
                  User-Focused
                </ThemedText>
              </View>
            </View>
          </LinearGradient>
        </Animated.View>

        {/* Footer */}
        <View className="items-center mt-12 pb-8">
          <ThemedText className="text-slate-500 text-sm text-center">
            Designed to elevate your academic journey.
          </ThemedText>
        </View>
      </View>
    </ParallaxScrollView>
  );
}