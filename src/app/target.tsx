import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { PageHeader } from "@/components/PageHeader";
import { View } from "react-native";

export default function Target(){
    return (
        <View style ={{flex: 1, padding: 24}}>
            <PageHeader 
                title="Meta"
                subtitle="Economize para alcançar sua meta financeira"
            />
            <View style={{marginTop: 32, gap: 24}}>
                <Input
                    label="Nova meta"
                    placeholder="Ex: Viagem para praia"
                />
                <Button title="Salvar" />
            </View>
        </View>
    )
}