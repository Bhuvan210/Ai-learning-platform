import React, { useState, useEffect } from 'react';
import { 
  SafeAreaView, 
  ScrollView, 
  View, 
  Text, 
  TouchableOpacity, 
  Switch, 
  StyleSheet, 
  useColorScheme
} from 'react-native';
import { 
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
  Feather
} from '@expo/vector-icons';

const App = () => {
  const [progress, setProgress] = useState(65);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    learningPath: true,
    recommendedCourses: false,
    targetedInterventions: false,
    careerInsights: false,
  });
  const colorScheme = useColorScheme();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev + 1) % 101);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsDarkMode(colorScheme === 'dark');
  }, [colorScheme]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const streakData = [
    { day: 'M', completed: true },
    { day: 'T', completed: true },
    { day: 'W', completed: true },
    { day: 'T', completed: true },
    { day: 'F', completed: false },
    { day: 'S', completed: false },
    { day: 'S', completed: false },
  ];

  const improvementAreas = [
    { skill: 'Data Structures', progress: 75 },
    { skill: 'Algorithms', progress: 60 },
    { skill: 'Machine Learning', progress: 40 },
    { skill: 'Cloud Computing', progress: 30 },
  ];

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={[styles.title, { color: theme.text }]}>Vivek's Learning Journey</Text>
          <Switch
            value={isDarkMode}
            onValueChange={setIsDarkMode}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
          />
        </View>

        <View style={[styles.card, { backgroundColor: theme.cardBackground }]}>
          <Text style={[styles.cardTitle, { color: theme.text }]}>Skills Progress</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${progress}%` }]} />
          </View>
          <Text style={[styles.progressText, { color: theme.text }]}>{progress}% Complete</Text>
        </View>

        <View style={[styles.card, { backgroundColor: theme.cardBackground }]}>
          <Text style={[styles.cardTitle, { color: theme.text }]}>Learning Streak</Text>
          <View style={styles.streakContainer}>
            {streakData.map((day, index) => (
              <View key={index} style={styles.streakDay}>
                <View style={[styles.streakCircle, { backgroundColor: day.completed ? theme.accent : theme.inactiveStreak }]}>
                  {day.completed && <Ionicons name="flash" size={16} color="white" />}
                </View>
                <Text style={[styles.streakText, { color: theme.text }]}>{day.day}</Text>
              </View>
            ))}
          </View>
          <Text style={[styles.streakStatus, { color: theme.text }]}>4 Day Streak! 🔥</Text>
        </View>

        <View style={[styles.card, { backgroundColor: theme.cardBackground }]}>
          <Text style={[styles.cardTitle, { color: theme.text }]}>Improvement Areas</Text>
          {improvementAreas.map((area, index) => (
            <View key={index} style={styles.improvementArea}>
              <Text style={[styles.improvementText, { color: theme.text }]}>{area.skill}</Text>
              <View style={styles.improvementProgressBar}>
                <View style={[styles.improvementProgressFill, { width: `${area.progress}%` }]} />
              </View>
              <Text style={[styles.improvementPercentage, { color: theme.text }]}>{area.progress}%</Text>
            </View>
          ))}
        </View>

        {[
          { key: 'learningPath', title: 'Personalized Learning Path', icon: 'book-open' },
          { key: 'recommendedCourses', title: 'Recommended Courses', icon: 'graduation-cap' },
          { key: 'targetedInterventions', title: 'Targeted Interventions', icon: 'bullseye' },
          { key: 'careerInsights', title: 'Career Insights', icon: 'chart-line' }
        ].map((section) => (
          <TouchableOpacity
            key={section.key}
            style={[styles.sectionButton, { backgroundColor: theme.sectionBackground }]}
            onPress={() => toggleSection(section.key)}
          >
            <View style={styles.sectionHeader}>
              <FontAwesome5 name={section.icon} size={20} color={theme.text} />
              <Text style={[styles.sectionTitle, { color: theme.text }]}>{section.title}</Text>
              <Feather 
                name={expandedSections[section.key] ? "chevron-up" : "chevron-down"} 
                size={20} 
                color={theme.text} 
              />
            </View>
            {expandedSections[section.key] && (
              <View style={styles.sectionContent}>
                {/* Content for each section */}
                <Text style={[styles.sectionText, { color: theme.text }]}>
                  {section.key === 'learningPath' && "1. Master Advanced Data Structures\n2. Dive into Machine Learning Fundamentals\n3. Explore Cloud Computing Essentials"}
                  {section.key === 'recommendedCourses' && "• Python for Data Science Mastery\n• AWS Certified Solutions Architect - Pro\n• Advanced Agile Project Management"}
                  {section.key === 'targetedInterventions' && "• Complete the 'Advanced SQL for Data Analysis' challenge\n• Lead a team in the upcoming AI Hackathon\n• Contribute to an open-source ML project"}
                  {section.key === 'careerInsights' && "• AI and ML skills are revolutionizing industries\n• Cloud-native development is the future of tech\n• Emotional intelligence is key in tech leadership"}
                </Text>
              </View>
            )}
          </TouchableOpacity>
        ))}

        <View style={[styles.card, { backgroundColor: theme.cardBackground }]}>
          <Text style={[styles.cardTitle, { color: theme.text }]}>Recent Achievements</Text>
          <View style={styles.achievementsContainer}>
            {[
              { title: 'Python Guru', color: '#FFD700' },
              { title: 'Data Viz Wizard', color: '#4169E1' },
              { title: 'AI Pioneer', color: '#32CD32' }
            ].map((achievement, index) => (
              <View key={index} style={[styles.achievement, { backgroundColor: achievement.color }]}>
                <MaterialCommunityIcons name="medal" size={24} color="white" />
                <Text style={styles.achievementText}>{achievement.title}</Text>
              </View>
            ))}
          </View>
        </View>

        <TouchableOpacity style={[styles.addButton, { backgroundColor: theme.accent }]}>
          <Ionicons name="add" size={24} color="white" />
          <Text style={styles.addButtonText}>Add a new milestone</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const lightTheme = {
  background: '#F0F0F0',
  cardBackground: '#FFFFFF',
  sectionBackground: '#E8E8E8',
  text: '#333333',
  accent: '#007AFF',
  inactiveStreak: '#D1D1D1',
};

const darkTheme = {
  background: '#1A1A1A',
  cardBackground: '#2C2C2C',
  sectionBackground: '#3A3A3A',
  text: '#FFFFFF',
  accent: '#0A84FF',
  inactiveStreak: '#4A4A4A',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  card: {
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
  },
  progressText: {
    marginTop: 8,
    textAlign: 'right',
  },
  streakContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  streakDay: {
    alignItems: 'center',
  },
  streakCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  streakText: {
    marginTop: 4,
  },
  streakStatus: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  improvementArea: {
    marginBottom: 12,
  },
  improvementText: {
    marginBottom: 4,
  },
  improvementProgressBar: {
    height: 4,
    backgroundColor: '#E0E0E0',
    borderRadius: 2,
    overflow: 'hidden',
  },
  improvementProgressFill: {
    height: '100%',
    backgroundColor: '#2196F3',
  },
  improvementPercentage: {
    textAlign: 'right',
    marginTop: 2,
  },
  sectionButton: {
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    marginLeft: 12,
  },
  sectionContent: {
    marginTop: 12,
  },
  sectionText: {
    fontSize: 14,
    lineHeight: 20,
  },
  achievementsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  achievement: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 16,
  },
  achievementText: {
    color: 'white',
    marginLeft: 4,
    fontWeight: 'bold',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

export default App;
