import { Image } from 'expo-image';
import { TouchableOpacity, View, Text } from 'react-native';
import { Link } from 'expo-router';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#020617', dark: '#020617' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={{
            height: 220,
            width: 320,
            position: 'absolute',
            bottom: 0,
            alignSelf: 'center',
          }}
          contentFit="contain"
        />
      }
    >
      <View className="flex-1 bg-slate-950 px-5 py-8">
        <View className="items-center justify-center py-8 gap-5">
          <View className="bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
            <ThemedText style={{ color: '#60A5FA', fontWeight: '600', fontSize: 14 }}>
              Smart Student Productivity
            </ThemedText>
          </View>
          <ThemedText className="text-3xl font-bold text-center text-white">created by KHLEIN </ThemedText>
          <ThemedText
            type="title"
            style={{
              textAlign: 'center',
              fontSize: 38,
              fontWeight: '800',
              lineHeight: 46,
            }}
          >
            Welcome to SynqUp
          </ThemedText>

          <ThemedText
            style={{
              textAlign: 'center',
              fontSize: 16,
              lineHeight: 28,
              color: '#CBD5E1',
              maxWidth: 340,
            }}
          >
            Your all-in-one academic companion for smarter scheduling, task management,
            collaboration, and organized student life.
          </ThemedText>

          <Link href="/dashboard" asChild>
            <TouchableOpacity className="bg-blue-600 px-10 py-4 rounded-2xl mt-3">
              <ThemedText
                style={{
                  color: '#FFFFFF',
                  fontWeight: '700',
                  fontSize: 16,
                  letterSpacing: 0.5,
                }}
              >
                Get Started
              </ThemedText>
            </TouchableOpacity>
          </Link>
        </View>

        <View className="gap-5 mb-10">
          <ThemedText
            type="subtitle"
            style={{
              fontSize: 26,
              fontWeight: '700',
            }}
          >
            Why SynqUp?
          </ThemedText>

          <View className="bg-slate-800 border border-slate-700 rounded-3xl p-5">
            <ThemedText type="defaultSemiBold" style={{ fontSize: 18, marginBottom: 6 }}>
              Class Schedule Sync
            </ThemedText>
            <ThemedText style={{ color: '#CBD5E1', lineHeight: 24 }}>
              Seamlessly organize lectures, subjects, and class routines in one centralized hub.
            </ThemedText>
          </View>

          <View className="bg-slate-800 border border-slate-700 rounded-3xl p-5">
            <ThemedText type="defaultSemiBold" style={{ fontSize: 18, marginBottom: 6 }}>
              Task & Deadline Management
            </ThemedText>
            <ThemedText style={{ color: '#CBD5E1', lineHeight: 24 }}>
              Track assignments, projects, and deadlines with clarity and structure.
            </ThemedText>
          </View>

          <View className="bg-slate-800 border border-slate-700 rounded-3xl p-5">
            <ThemedText type="defaultSemiBold" style={{ fontSize: 18, marginBottom: 6 }}>
              Student Collaboration
            </ThemedText>
            <ThemedText style={{ color: '#CBD5E1', lineHeight: 24 }}>
              Coordinate with classmates, manage group projects, and stay aligned effortlessly.
            </ThemedText>
          </View>
        </View>

        <View className="bg-slate-900 rounded-3xl p-6 border border-slate-800 gap-4 mb-10">
          <ThemedText
            type="subtitle"
            style={{
              fontSize: 26,
              fontWeight: '700',
            }}
          >
            Built for Productivity
          </ThemedText>

          <ThemedText style={{ color: '#CBD5E1', lineHeight: 28 }}>
            SynqUp is designed for students who want structure, speed, and simplicity.
            From academic planning to collaborative execution, every feature is crafted
            to reduce chaos and improve performance.
          </ThemedText>

          <View className="flex-row flex-wrap gap-3 pt-3">
            <View className="bg-blue-500/10 px-4 py-2 rounded-xl">
              <ThemedText style={{ color: '#60A5FA', fontWeight: '600' }}>
                Cross-Platform
              </ThemedText>
            </View>

            <View className="bg-purple-500/10 px-4 py-2 rounded-xl">
              <ThemedText style={{ color: '#C084FC', fontWeight: '600' }}>
                Scalable
              </ThemedText>
            </View>

            <View className="bg-emerald-500/10 px-4 py-2 rounded-xl">
              <ThemedText style={{ color: '#34D399', fontWeight: '600' }}>
                User-Focused
              </ThemedText>
            </View>
          </View>
        </View>
      </View>
    </ParallaxScrollView>
  );
}