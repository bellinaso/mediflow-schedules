import { Image, TextInput, View, Text, TouchableOpacity } from "react-native";
import { styles } from "./register.style";
import Button from "../../components/button/button";
import icons from "../../constants/icons";


function Register() {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={icons.logo} style={styles.logo}/>
            </View>

            <View>
                {/* Name input */}
                <View style={styles.inputContainer}>
                    <TextInput placeholder="Nome" style={styles.input}/>
                </View>

                {/* Login input */}
                <View style={styles.inputContainer}>
                    <TextInput placeholder="E-mail" style={styles.input}/>
                </View>

                {/* Password input */}
                <View style={styles.inputContainer}>
                    <TextInput placeholder="Senha" secureTextEntry={true} style={styles.input}/>
                </View>

                {/* Access button */}
                <Button text="Acessar"/>
            </View>
            
            <View style={styles.footer}>
                <Text>Já tenho conta. </Text>

                <TouchableOpacity>
                    <Text style={styles.footerAnchor}>
                        Fazer login.
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Register;