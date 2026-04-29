import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function DashboardScreen() {
    const todayClasses = [
        { subject: 'Mobile Development', time: '8:00 AM - 10:00 AM', room: 'Room 402' },
        { subject: 'Database Systems', time: '1:00 PM - 3:00 PM', room: 'Lab 2' },
        { subject: 'UI/UX Design', time: '4:00 PM - 5:30 PM', room: 'Room 305' },
    ];

    const tasks = [
        { title: 'React Native Project Proposal', due: 'Due Today' },
        { title: 'Database Normalization Activity', due: 'Due Tomorrow' },
        { title: 'UI Prototype Submission', due: 'Due Friday' },
    ];

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            <ThemedView style={styles.header}>
                <View>
                    <ThemedText type="title">Dashboard</ThemedText>
                    <ThemedText>Stay synced and productive.</ThemedText>
                </View>
                <TouchableOpacity style={styles.profileButton}>
                    <Ionicons name="person-circle-outline" size={38} color="#2563EB" />
                </TouchableOpacity>
            </ThemedView>

            <ThemedView style={styles.overviewCard}>
                <ThemedText type="subtitle">Today Overview</ThemedText>
                <View style={styles.statsRow}>
                    <View style={styles.statBox}>
                        <ThemedText type="defaultSemiBold">3</ThemedText>
                        <ThemedText>Classes</ThemedText>
                    </View>
                    <View style={styles.statBox}>
                        <ThemedText type="defaultSemiBold">3</ThemedText>
                        <ThemedText>Tasks</ThemedText>
                    </View>
                    <View style={styles.statBox}>
                        <ThemedText type="defaultSemiBold">2</ThemedText>
                        <ThemedText>Upcoming</ThemedText>
                    </View>
                </View>
            </ThemedView>

            <ThemedView style={styles.section}>
                <ThemedText type="subtitle">Today’s Classes</ThemedText>
                {todayClasses.map((item, index) => (
                    <View key={index} style={styles.card}>
                        <ThemedText type="defaultSemiBold">{item.subject}</ThemedText>
                        <ThemedText>{item.time}</ThemedText>
                        <ThemedText>{item.room}</ThemedText>
                    </View>
                ))}
            </ThemedView>

            <ThemedView style={styles.section}>
                <ThemedText type="subtitle">Tasks & Deadlines</ThemedText>
                {tasks.map((task, index) => (
                    <View key={index} style={styles.card}>
                        <ThemedText type="defaultSemiBold">{task.title}</ThemedText>
                        <ThemedText>{task.due}</ThemedText>
                    </View>
                ))}
            </ThemedView>

            <ThemedView style={styles.section}>
                <ThemedText type="subtitle">Quick Actions</ThemedText>
                <View style={styles.actionsRow}>
                    <TouchableOpacity style={styles.actionButton}>
                        <Ionicons name="calendar-outline" size={22} color="#FFFFFF" />
                        <ThemedText style={styles.actionText}>Schedule</ThemedText>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.actionButton}>
                        <Ionicons name="checkmark-done-outline" size={22} color="#FFFFFF" />
                        <ThemedText style={styles.actionText}>Tasks</ThemedText>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.actionButton}>
                        <Ionicons name="people-outline" size={22} color="#FFFFFF" />
                        <ThemedText style={styles.actionText}>Groups</ThemedText>
                    </TouchableOpacity>
                </View>
            </ThemedView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0F172A',
    },

    content: {
        padding: 20,
        gap: 22,
        paddingBottom: 40,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    },

    profileButton: {
        padding: 4,
    },

    overviewCard: {
        backgroundColor: '#1E293B',
        borderRadius: 18,
        padding: 18,
        gap: 16,
    },

    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    statBox: {
        alignItems: 'center',
        backgroundColor: '#334155',
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 14,
        minWidth: 90,
    },

    section: {
        gap: 12,
    },

    card: {
        backgroundColor: '#1E293B',
        padding: 16,
        borderRadius: 16,
        gap: 4,
    },

    actionsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
    },

    actionButton: {
        flex: 1,
        backgroundColor: '#2563EB',
        borderRadius: 14,
        paddingVertical: 16,
        alignItems: 'center',
        gap: 6,
    },

    actionText: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '600',
    },
});

