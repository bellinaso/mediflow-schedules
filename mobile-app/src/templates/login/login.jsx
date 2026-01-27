import { Image, TextInput, View, Text, TouchableOpacity } from "react-native";
import { styles } from "./login.style";
import Button from "../../components/button/button";
import icons from "../../constants/icons";


function Login() {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={icons.logo} style={styles.logo}/>
            </View>

            <View>
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
                <Text>Não tenho conta. </Text>

                <TouchableOpacity>
                    <Text style={styles.footerAnchor}>
                        Criar conta agora.
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Login;