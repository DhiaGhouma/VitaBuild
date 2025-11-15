// src/templates/ModernTemplate.tsx
import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import { CVData } from '../store/cvStore';

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
    fontSize: 10,
    lineHeight: 1.6,
    color: '#1e293b',
  },
  header: {
    marginBottom: 25,
    borderBottomWidth: 2,
    borderBottomColor: '#2563eb',
    paddingBottom: 15,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  headerLeft: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  title: {
    fontSize: 12,
    color: '#2563eb',
    marginBottom: 10,
  },
  contactInfo: {
    fontSize: 9,
    color: '#64748b',
    marginBottom: 2,
  },
  photo: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginLeft: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 10,
    textTransform: 'uppercase',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    paddingBottom: 4,
  },
  summary: {
    fontSize: 10,
    color: '#475569',
    lineHeight: 1.7,
  },
  itemContainer: {
    marginBottom: 15,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  itemTitle: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  itemSubtitle: {
    fontSize: 10,
    color: '#2563eb',
    marginBottom: 2,
  },
  itemDate: {
    fontSize: 9,
    color: '#64748b',
  },
  itemDescription: {
    fontSize: 9,
    color: '#475569',
    marginTop: 4,
    lineHeight: 1.6,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  skillItem: {
    backgroundColor: '#f1f5f9',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    fontSize: 9,
    color: '#334155',
    marginBottom: 4,
  },
});

export const ModernTemplate = ({ data }: { data: CVData }) => {
  const renderSection = (sectionName: string) => {
    switch (sectionName) {
      case 'summary':
        return data.summary ? (
          <View style={styles.section} key="summary">
            <Text style={styles.sectionTitle}>Professional Summary</Text>
            <Text style={styles.summary}>{data.summary}</Text>
          </View>
        ) : null;

      case 'experience':
        return data.experience.length > 0 ? (
          <View style={styles.section} key="experience">
            <Text style={styles.sectionTitle}>Experience</Text>
            {data.experience.map((exp) => (
              <View key={exp.id} style={styles.itemContainer}>
                <View style={styles.itemHeader}>
                  <View>
                    <Text style={styles.itemTitle}>{exp.position}</Text>
                    <Text style={styles.itemSubtitle}>{exp.company}</Text>
                    {exp.location && <Text style={styles.contactInfo}>{exp.location}</Text>}
                  </View>
                  <Text style={styles.itemDate}>
                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                  </Text>
                </View>
                {exp.description && (
                  <Text style={styles.itemDescription}>{exp.description}</Text>
                )}
              </View>
            ))}
          </View>
        ) : null;

      case 'education':
        return data.education.length > 0 ? (
          <View style={styles.section} key="education">
            <Text style={styles.sectionTitle}>Education</Text>
            {data.education.map((edu) => (
              <View key={edu.id} style={styles.itemContainer}>
                <View style={styles.itemHeader}>
                  <View>
                    <Text style={styles.itemTitle}>{edu.degree}</Text>
                    <Text style={styles.itemSubtitle}>{edu.institution}</Text>
                    {edu.field && <Text style={styles.contactInfo}>{edu.field}</Text>}
                  </View>
                  <Text style={styles.itemDate}>
                    {edu.startDate} - {edu.endDate}
                  </Text>
                </View>
                {edu.description && (
                  <Text style={styles.itemDescription}>{edu.description}</Text>
                )}
              </View>
            ))}
          </View>
        ) : null;

      case 'projects':
        return data.projects.length > 0 ? (
          <View style={styles.section} key="projects">
            <Text style={styles.sectionTitle}>Projects</Text>
            {data.projects.map((proj) => (
              <View key={proj.id} style={styles.itemContainer}>
                <Text style={styles.itemTitle}>{proj.name}</Text>
                {proj.description && (
                  <Text style={styles.itemDescription}>{proj.description}</Text>
                )}
                {proj.technologies && (
                  <Text style={styles.contactInfo}>Technologies: {proj.technologies}</Text>
                )}
                {proj.link && <Text style={styles.contactInfo}>{proj.link}</Text>}
              </View>
            ))}
          </View>
        ) : null;

      case 'skills':
        return data.skills.length > 0 ? (
          <View style={styles.section} key="skills">
            <Text style={styles.sectionTitle}>Skills</Text>
            <View style={styles.skillsContainer}>
              {data.skills.map((skill) => (
                <View key={skill.id} style={styles.skillItem}>
                  <Text>{skill.name} {skill.level && `• ${skill.level}`}</Text>
                </View>
              ))}
            </View>
          </View>
        ) : null;

      case 'languages':
        return data.languages.length > 0 ? (
          <View style={styles.section} key="languages">
            <Text style={styles.sectionTitle}>Languages</Text>
            <View style={styles.skillsContainer}>
              {data.languages.map((lang) => (
                <View key={lang.id} style={styles.skillItem}>
                  <Text>{lang.name} • {lang.proficiency}</Text>
                </View>
              ))}
            </View>
          </View>
        ) : null;

      default:
        return null;
    }
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <View style={styles.headerLeft}>
              <Text style={styles.name}>{data.personalInfo.fullName || 'Your Name'}</Text>
              {data.personalInfo.title && <Text style={styles.title}>{data.personalInfo.title}</Text>}
              {data.personalInfo.email && <Text style={styles.contactInfo}>{data.personalInfo.email}</Text>}
              {data.personalInfo.phone && <Text style={styles.contactInfo}>{data.personalInfo.phone}</Text>}
              {data.personalInfo.location && <Text style={styles.contactInfo}>{data.personalInfo.location}</Text>}
              {data.personalInfo.linkedin && <Text style={styles.contactInfo}>{data.personalInfo.linkedin}</Text>}
              {data.personalInfo.github && <Text style={styles.contactInfo}>{data.personalInfo.github}</Text>}
              {data.personalInfo.website && <Text style={styles.contactInfo}>{data.personalInfo.website}</Text>}
            </View>
            {data.personalInfo.photo && <Image style={styles.photo} src={data.personalInfo.photo} />}
          </View>
        </View>

        {/* Render all sections in order */}
        {data.sectionOrder.map((section) => renderSection(section))}
      </Page>
    </Document>
  );
};
