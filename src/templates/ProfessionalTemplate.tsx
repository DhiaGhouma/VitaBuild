import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import { CVData } from '../store/cvStore';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    fontFamily: 'Helvetica',
    fontSize: 10,
  },
  sidebar: {
    width: '35%',
    backgroundColor: '#1e293b',
    padding: 30,
    color: '#fff',
  },
  mainContent: {
    width: '65%',
    padding: 30,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 20,
    border: '3 solid #fff',
  },
  sidebarName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    color: '#fff',
  },
  sidebarTitle: {
    fontSize: 11,
    marginBottom: 20,
    textAlign: 'center',
    color: '#94a3b8',
  },
  sidebarSection: {
    marginBottom: 20,
  },
  sidebarSectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  sidebarText: {
    fontSize: 9,
    color: '#cbd5e1',
    marginBottom: 4,
    lineHeight: 1.5,
  },
  sidebarItem: {
    marginBottom: 8,
  },
  sidebarItemTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 2,
  },
  sidebarItemSubtitle: {
    fontSize: 9,
    color: '#94a3b8',
  },
  mainSection: {
    marginBottom: 20,
  },
  mainSectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1e293b',
    textTransform: 'uppercase',
    borderBottom: '2 solid #1e293b',
    paddingBottom: 4,
  },
  summary: {
    fontSize: 10,
    color: '#475569',
    lineHeight: 1.6,
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
    color: '#1e293b',
  },
  itemSubtitle: {
    fontSize: 10,
    color: '#64748b',
    marginBottom: 2,
  },
  itemDate: {
    fontSize: 9,
    color: '#94a3b8',
    fontStyle: 'italic',
  },
  itemDescription: {
    fontSize: 9,
    color: '#64748b',
    marginTop: 4,
    lineHeight: 1.5,
  },
});

export const ProfessionalTemplate = ({ data }: { data: CVData }) => {
  const renderMainSection = (sectionName: string) => {
    switch (sectionName) {
      case 'summary':
        return data.summary ? (
          <View style={styles.mainSection} key="summary">
            <Text style={styles.mainSectionTitle}>Professional Summary</Text>
            <Text style={styles.summary}>{data.summary}</Text>
          </View>
        ) : null;

      case 'experience':
        return data.experience.length > 0 ? (
          <View style={styles.mainSection} key="experience">
            <Text style={styles.mainSectionTitle}>Experience</Text>
            {data.experience.map((exp) => (
              <View key={exp.id} style={styles.itemContainer}>
                <View style={styles.itemHeader}>
                  <View>
                    <Text style={styles.itemTitle}>{exp.position}</Text>
                    <Text style={styles.itemSubtitle}>
                      {exp.company}{exp.location ? ` • ${exp.location}` : ''}
                    </Text>
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

      case 'projects':
        return data.projects.length > 0 ? (
          <View style={styles.mainSection} key="projects">
            <Text style={styles.mainSectionTitle}>Projects</Text>
            {data.projects.map((proj) => (
              <View key={proj.id} style={styles.itemContainer}>
                <Text style={styles.itemTitle}>{proj.name}</Text>
                {proj.description && (
                  <Text style={styles.itemDescription}>{proj.description}</Text>
                )}
                {proj.technologies && (
                  <Text style={styles.itemSubtitle}>Technologies: {proj.technologies}</Text>
                )}
                {proj.link && (
                  <Text style={styles.sidebarText}>{proj.link}</Text>
                )}
              </View>
            ))}
          </View>
        ) : null;

      default:
        return null;
    }
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.sidebar}>
          {data.personalInfo.photo && (
            <Image style={styles.photo} src={data.personalInfo.photo} />
          )}
          <Text style={styles.sidebarName}>{data.personalInfo.fullName || 'Your Name'}</Text>
          {data.personalInfo.title && (
            <Text style={styles.sidebarTitle}>{data.personalInfo.title}</Text>
          )}

          <View style={styles.sidebarSection}>
            <Text style={styles.sidebarSectionTitle}>Contact</Text>
            {data.personalInfo.email && (
              <Text style={styles.sidebarText}>{data.personalInfo.email}</Text>
            )}
            {data.personalInfo.phone && (
              <Text style={styles.sidebarText}>{data.personalInfo.phone}</Text>
            )}
            {data.personalInfo.location && (
              <Text style={styles.sidebarText}>{data.personalInfo.location}</Text>
            )}
            {data.personalInfo.linkedin && (
              <Text style={styles.sidebarText}>{data.personalInfo.linkedin}</Text>
            )}
            {data.personalInfo.github && (
              <Text style={styles.sidebarText}>{data.personalInfo.github}</Text>
            )}
            {data.personalInfo.website && (
              <Text style={styles.sidebarText}>{data.personalInfo.website}</Text>
            )}
          </View>

          {data.education.length > 0 && (
            <View style={styles.sidebarSection}>
              <Text style={styles.sidebarSectionTitle}>Education</Text>
              {data.education.map((edu) => (
                <View key={edu.id} style={styles.sidebarItem}>
                  <Text style={styles.sidebarItemTitle}>{edu.degree}</Text>
                  <Text style={styles.sidebarItemSubtitle}>{edu.institution}</Text>
                  {edu.field && (
                    <Text style={styles.sidebarText}>{edu.field}</Text>
                  )}
                  <Text style={styles.sidebarText}>
                    {edu.startDate} - {edu.endDate}
                  </Text>
                </View>
              ))}
            </View>
          )}

          {data.skills.length > 0 && (
            <View style={styles.sidebarSection}>
              <Text style={styles.sidebarSectionTitle}>Skills</Text>
              {data.skills.map((skill) => (
                <Text key={skill.id} style={styles.sidebarText}>
                  • {skill.name}{skill.level ? ` (${skill.level})` : ''}
                </Text>
              ))}
            </View>
          )}

          {data.languages.length > 0 && (
            <View style={styles.sidebarSection}>
              <Text style={styles.sidebarSectionTitle}>Languages</Text>
              {data.languages.map((lang) => (
                <Text key={lang.id} style={styles.sidebarText}>
                  • {lang.name} - {lang.proficiency}
                </Text>
              ))}
            </View>
          )}
        </View>

        <View style={styles.mainContent}>
          {data.sectionOrder.map((section) => renderMainSection(section))}
        </View>
      </Page>
    </Document>
  );
};
