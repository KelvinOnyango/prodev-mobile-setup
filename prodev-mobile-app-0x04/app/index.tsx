import { Link } from 'expo-router'

// In your JSX:
<Link href="/join" asChild>
  <TouchableOpacity style={styles.buttonPrimary}>
    <Text style={styles.buttonPrimaryText}>Join Now</Text>
  </TouchableOpacity>
</Link>

<Link href="/signin" asChild>
  <TouchableOpacity style={styles.buttonSecondary}>
    <Text style={styles.buttonSecondaryText}>Sign In</Text>
  </TouchableOpacity>
</Link>