import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página Principal</Text>

      {/* Botão que leva à Página 2 */}
      <Link href="/pagina2" asChild>
        <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Ir para Página 2</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  button: { backgroundColor: '#4C6EF5', padding: 12, borderRadius: 8 },
  buttonText: { color: '#fff', fontSize: 16 }
});
