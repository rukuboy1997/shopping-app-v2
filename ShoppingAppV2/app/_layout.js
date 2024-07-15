import { Link, Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Layout() {
    return (
        <Tabs screenOptions={{
            headerTitleAlign: "center"
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                    headerRight: () => (
                        <Link href="/chat" style={{ marginRight: 10 }}>
                            <FontAwesome
                                size={20}
                                name="commenting-o"
                            />
                        </Link>
                    ),
                }} 
            />
            <Tabs.Screen
                name="products"
                options={{
                    title: 'Shopping Cart',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="shopping-cart" color={color} />,
                    headerLeft: () => (
                        <Link href="/" style={{ marginLeft: 10 }}>
                            <FontAwesome
                                size={20}
                                name="chevron-left"
                            />
                        </Link>
                    ),
                    headerRight: () => (
                        <Link href="/chat" style={{ marginRight: 10 }}>
                            <FontAwesome
                                size={20}
                                name="commenting-o"
                            />
                        </Link>
                    ),
                }} 
            />
	    <Tabs.Screen
                name="chat"
                options={{
                    title: 'Help Center',
                    headerLeft: () => (
                        <Link href="/" style={{ marginLeft: 10 }}>
                            <FontAwesome
                                size={20}
                                name="chevron-left"
                            />
                        </Link>
                    ),
		    href : null,
                }}
            />
            <Tabs.Screen name="api" options={{ href: null }} />
            <Tabs.Screen name="components/ProductListItem" options={{ href: null }} />
        </Tabs>
    );
}
