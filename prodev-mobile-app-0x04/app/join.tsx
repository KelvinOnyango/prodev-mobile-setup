import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { styles } from "@/styles/_joinstyle";
import { HEROLOGOGREEN, GOOGLELOGO, FACEBOOKLOGO } from "@/constants";

export default function Join() {
  return (
    <View style={styles.container}>
      <View style={styles.iconsection}>
        <Image source={HEROLOGOGREEN} />
        <Text>Skip</Text>
      </View>

      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Join Us</Text>
        <Text style={styles.subText}>Create an account to continue</Text>
      </View>

      <View style={styles.formGroup}>
        {/* Form fields similar to signin but for registration */}
        <View>
          <Text style={styles.formLabel}>Email</Text>
          <TextInput
            style={styles.formControl}
            placeholder="Enter your email"
          />
        </View>

        {/* Add other registration fields */}

        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Join Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
