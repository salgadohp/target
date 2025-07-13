import { colors } from "@/theme";
import { ActivityIndicator, Text, TouchableHighlightProps, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type Props = TouchableHighlightProps & {
    title: string 
    isProcessing?: boolean
}

export function Button({title, isProcessing = false, ...rest}: Props) {
    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.7}
            disabled={isProcessing}
            {...rest}
        >
            <Text style={styles.title}>
                {isProcessing ? (
                    <ActivityIndicator size="small" color={colors.white} />
                ) : (title)
            }
            </Text>
        </TouchableOpacity>
    )
}