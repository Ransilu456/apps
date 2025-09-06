import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import { ThemedView } from '../ThemedView';
import { ThemedText } from '../ThemedText';


export default function SidebarContent(props: any) {
    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.header}>
                <Image source={require('@/assets/logo.png')} style={styles.logo} />
            </View>
            <DrawerItemList {...props} />

            <ThemedView style={styles.separator} />

            <ThemedView style={{ padding: 16, backgroundColor: 'transparent', alignItems: 'center' }}>
                <ThemedText style={styles.footertitle}>
                    © 2025 DP Education. All rights reserved.
                </ThemedText>
                <ThemedText style={styles.footertitle}>
                    Version 1.0.0
                </ThemedText>
                <ThemedText style={styles.description}>
                    ශ්‍රී ශාසනාලංකාර මහා විහාරය
                    කුලියාපිටිය.
                </ThemedText>
            </ThemedView>
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    header: { padding: 20, alignItems: 'center' },
    logo: { width: 80, height: 80, resizeMode: 'contain' },
    footertitle: {
        fontSize: 10,
        color: '#6B7280',
        textAlign: 'center',
        marginTop: 0,
        lineHeight: 20,
    },
    separator: {
        height: 1,
        backgroundColor: '#c2c2c2ff',
        marginVertical: 6,
        marginTop: 330,
        marginBottom: 0,
    },
    description:{
        fontSize: 10,
        color: '#6B7280',
        textAlign: 'center',
        marginTop: 4,
        lineHeight: 14,
        fontStyle: 'italic',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingBottom: 10,
    }
});
