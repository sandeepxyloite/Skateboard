import React from 'react';
import {
    Button,
    Dimensions,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

function WelcomeScreen({navigation}): React.JSX.Element {
    const isDarkMode = false; //useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>

                <View
                    style={[{
                        backgroundColor: isDarkMode ? Colors.black : Colors.white,
                    }, styles.sectionContainer]}>
                    <Text style={styles.welcomeText} > Welcome to skateboard </Text>
                    <Button
                        title="Go to Login"
                        onPress={() =>{
                            navigation.navigate('login', { name: 'skateboard' })}
                        }
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        display: "flex",
        height: Dimensions.get('window').height,
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    welcomeText: {
        fontWeight: '700',
        fontSize: 40,
        marginBottom: 20
    },
});

export default WelcomeScreen;
