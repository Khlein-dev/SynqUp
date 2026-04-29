import { Image } from 'expo-image';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Link } from 'expo-router';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#0F172A', dark: '#020617' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.headerImage}
          contentFit="contain"
        />
      }
    >
      <ThemedView style={styles.heroSection}>
        <ThemedText type="title" style={styles.heroTitle}>
          Welcome to SynqUp
        </ThemedText>

        <ThemedText style={styles.heroSubtitle}>
          Your smart academic companion for syncing schedules, organizing class tasks,
          and simplifying student life.
        </ThemedText>

        <Link href="/dashboard" asChild>
          <TouchableOpacity style={styles.primaryButton}>
            <ThemedText style={styles.primaryButtonText}>
              Get Started
            </ThemedText>
          </TouchableOpacity>
        </Link>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="subtitle">Why SynqUp?</ThemedText>

        <View style={styles.card}>
          <ThemedText type="defaultSemiBold">Class Schedule Sync</ThemedText>
          <ThemedText>
            Keep all your classes organized in one place with seamless scheduling.
          </ThemedText>
        </View>

        <View style={styles.card}>
          <ThemedText type="defaultSemiBold">Task Management</ThemedText>
          <ThemedText>
            Track assignments, deadlines, and important academic priorities easily.
          </ThemedText>
        </View>

        <View style={styles.card}>
          <ThemedText type="defaultSemiBold">Student Collaboration</ThemedText>
          <ThemedText>
            Stay connected with classmates and improve coordination for projects and updates.
          </ThemedText>
        </View>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="subtitle">Built for Productivity</ThemedText>
        <ThemedText>
          SynqUp is designed to help students focus more on learning and less on managing chaos.
          Clean design, intuitive navigation, and scalable functionality — all in one platform.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  heroSection: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    gap: 14,
  },

  heroTitle: {
    textAlign: 'center',
  },

  heroSubtitle: {
    textAlign: 'center',
    lineHeight: 22,
    paddingHorizontal: 10,
  },

  primaryButton: {
    backgroundColor: '#2563EB',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 14,
    marginTop: 10,
  },

  primaryButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },

  section: {
    gap: 14,
    marginBottom: 24,
  },

  card: {
    padding: 16,
    borderRadius: 14,
    backgroundColor: 'rgba(148, 163, 184, 0.12)',
    gap: 6,
  },

  headerImage: {
    height: 220,
    width: 320,
    bottom: 0,
    alignSelf: 'center',
    position: 'absolute',
  },
});