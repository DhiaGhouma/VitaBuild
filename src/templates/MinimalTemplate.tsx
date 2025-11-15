import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import { CVData } from '../store/cvStore';

const styles = StyleSheet.create({
  page: {
    padding: 50,
    fontFamily: 'Helvetica',
    fontSize: 10,
    lineHeight: 1.6,
  },
  header: {
    marginBottom: 25,
    textAlign: 'center',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#000',
    letterSpacing: 1,
  },
  title: {
    fontSize: 11,
    color: '#666',
    marginBottom: 12,
    fontStyle: 'italic',
  },
  contactInfo: {
    fontSize: 9,
    color: '#666',
    marginBottom: 3,
  },
  photo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignSelf: 'center',
    marginBottom: 12,
  },
  section: {
    marginBottom: 18,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  summary: {
    fontSize: 10,
    color: '#333',
    lineHeight: 1.7,
    textAlign: 'justify',
  },
  itemContainer: {
    marginBottom: 14,
  },
  itemHeader: {
    marginBottom: 4,
  },
  itemTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 2,
  },
  itemSubtitle: {
    fontSize: 10,
    color: '#333',
    marginBottom: 2,
  },
  itemDate: {
    fontSize: 9,
    color: '#666',
    fontStyle: 'italic',
    marginBottom: 4,
  },
  itemDescription: {
    fontSize: 9,
    color: '#444',
    lineHeight: 1.6,
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  skillItem: {
    fontSize: 9,
    color: '#333',
    marginBottom: 4,
  },
  divider: {
    borderBottom: '0.5 solid #ddd',
    marginVertical: 2,
  },
});

export const MinimalTemplate = ({ data }: { data: CVData }) => {
  const renderSection = (sectionName: string) => {
    switch (sectionName) {
      case 'summary':
        return data.summary ? (
          <View style={styles.section} key="summary">
            <Text style={styles.sectionTitle}>SUMMARY</Text>
            <View style={styles.divider} />
            <Text style={styles.summary}>{data.summary}</Text>
          </View>
        ) : null;

      case 'experience':
        return data.experience.length > 0 ? (
          <View style={styles.section} key="experience">
            <Text style={styles.sectionTitle}>EXPERIENCE</Text>
            <View style={styles.divider} />
            {data.experience.map((exp) => (
              <View key={exp.id} style={styles.itemContainer}>
                <View style={styles.itemHeader}>
                  <Text style={styles.itemTitle}>{exp.position}</Text>
                  <Text style={styles.itemSubtitle}>
                    {exp.company}{exp.location ? ` • ${exp.location}` : ''}
                  </Text>
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
            <Text style={styles.sectionTitle}>EDUCATION</Text>
            <View style={styles.divider} />
            {data.education.map((edu) => (
              <View key={edu.id} style={styles.itemContainer}>
                <View style={styles.itemHeader}>
                  <Text style={styles.itemTitle}>{edu.degree}</Text>
                  <Text style={styles.itemSubtitle}>
                    {edu.institution}{edu.field ? ` • ${edu.field}` : ''}
                  </Text>
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
            <Text style={styles.sectionTitle}>PROJECTS</Text>
            <View style={styles.divider} />
            {data.projects.map((proj) => (
              <View key={proj.id} style={styles.itemContainer}>
                <Text style={styles.itemTitle}>{proj.name}</Text>
                {proj.description && (
                  <Text style={styles.itemDescription}>{proj.description}</Text>
                )}
                {proj.technologies && (
                  <Text style={styles.itemSubtitle}>Tech: {proj.technologies}</Text>
                )}
                {proj.link && (
                  <Text style={styles.contactInfo}>{proj.link}</Text>
                )}
              </View>
            ))}
          </View>
        ) : null;

      case 'skills':
        return data.skills.length > 0 ? (
          <View style={styles.section} key="skills">
            <Text style={styles.sectionTitle}>SKILLS</Text>
            <View style={styles.divider} />
            <View style={styles.skillsGrid}>
              {data.skills.map((skill, idx) => (
                <Text key={skill.id} style={styles.skillItem}>
                  {skill.name}{skill.level ? ` (${skill.level})` : ''}{idx < data.skills.length - 1 ? ' •' : ''}
                </Text>
              ))}
            </View>
          </View>
        ) : null;

      case 'languages':
        return data.languages.length > 0 ? (
          <View style={styles.section} key="languages">
            <Text style={styles.sectionTitle}>LANGUAGES</Text>
            <View style={styles.divider} />
            <View style={styles.skillsGrid}>
              {data.languages.map((lang, idx) => (
                <Text key={lang.id} style={styles.skillItem}>
                  {lang.name} ({lang.proficiency}){idx < data.languages.length - 1 ? ' •' : ''}
                </Text>
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
        <View style={styles.header}>
          {data.personalInfo.photo && (
            <Image style={styles.photo} src={data.personalInfo.photo} />
          )}
          <Text style={styles.name}>{data.personalInfo.fullName || 'Your Name'}</Text>
          {data.personalInfo.title && (
            <Text style={styles.title}>{data.personalInfo.title}</Text>
          )}
          {data.personalInfo.email && (
            <Text style={styles.contactInfo}>{data.personalInfo.email}</Text>
          )}
          {data.personalInfo.phone && (
            <Text style={styles.contactInfo}>{data.personalInfo.phone}</Text>
          )}
          {data.personalInfo.location && (
            <Text style={styles.contactInfo}>{data.personalInfo.location}</Text>
          )}
          {data.personalInfo.linkedin && (
            <Text style={styles.contactInfo}>{data.personalInfo.linkedin}</Text>
          )}
          {data.personalInfo.github && (
            <Text style={styles.contactInfo}>{data.personalInfo.github}</Text>
          )}
          {data.personalInfo.website && (
            <Text style={styles.contactInfo}>{data.personalInfo.website}</Text>
          )}
        </View>

        {data.sectionOrder.map((section) => renderSection(section))}
      </Page>
    </Document>
  );
};
