import { MaterialIcons } from '@expo/vector-icons';
import { ColorValue, Text, View } from "react-native";
import { styles } from "./styles";


export type SummaryProps = {
    label: string,
    value: string
}

type Props = {
    data: SummaryProps
    icon: {
        name: keyof typeof MaterialIcons.glyphMap
        color: ColorValue
    }
    isRigth?: boolean
}

export function Summary({data, icon, isRigth = false}: Props){
    return (
        <View style={styles.container}>
            <View style={[styles.header, isRigth && {justifyContent: 'flex-end'}]}>
                <MaterialIcons name={icon.name} size={16} color={icon.color} />
                <Text style={styles.label}>{data.label}</Text>
            </View>

            <Text style={styles.value}>{data.value}</Text>
        </View>
    )
}