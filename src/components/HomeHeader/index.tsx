import { colors } from "@/theme/color";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./style";

export function HomeHeader(){
    return (
        <LinearGradient
            colors={[colors.blue[500], colors.blue[800]]}
            style={styles.container}
        />
    )
}