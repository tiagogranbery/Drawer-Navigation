import { View, Text, StyleSheet } from 'react-native';

export default function Page() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página 3</Text>
      <Text style={styles.subtitle}>Conteúdo simples da terceira página.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#fa5252', marginBottom: 8 },
  subtitle: { fontSize: 16, color: '#666' }
});
