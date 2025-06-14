import {
  StyleSheet,
  Appearance,
  Platform,
  ScrollView,
  SafeAreaView,
  FlatList,
  View,
  Text,
  Image,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { MENU_ITEMS } from "@/constants/MenuItems";
import MENU_IMAGES from "@/constants/MenuImages";

export default function MenuScreen() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  const style = createStyles(theme, colorScheme);
  const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;

  const separatorComp = <View style={style.separator} />;
  const footerComp = <Text style={style.footerText}> End of Menu </Text>;

  return (
    <Container>
      <FlatList
        data={MENU_ITEMS || []}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.contentContainer}
        ItemSeparatorComponent={() => separatorComp}
        ListFooterComponent={footerComp}
        ListFooterComponentStyle={style.footerComp}
        ListEmptyComponent={<Text style={style.menuItemText}>No Items</Text>}
        renderItem={({ item }) => (
          <View style={style.row}>
            <Image
              style={style.menuImage}
              resizeMode="cover"
              source={MENU_IMAGES[item.id - 1]}
            />
            <View style={style.menuTextRow}>
              <Text style={[style.menuItemTitle, style.menuItemText]}>
                {item.title}
              </Text>
              <Text style={style.menuItemText}>{item.description}</Text>
            </View>
          </View>
        )}
      />
    </Container>
  );
}

function createStyles(theme, colorScheme) {
  return StyleSheet.create({
    contentContainer: {
      padding: 10,
      paddingBottom: 20,
      paddingHorizontal: 12,
      backgroundColor: theme.background,
    },
    separator: {
      height: 1,
      backgroundColor: colorScheme === "dark" ? "papayawhip" : "#000",
      width: "50%",
      maxWidth: 300,
      alignSelf: "center",
      marginBottom: 10,
    },
    footerComp: {
      alignSelf: "center",
      marginTop: 10,
    },
    footerText: {
      color: theme.text,
      fontStyle: "italic",
    },
    row: {
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      maxWidth: 600,
      height: 120,
      marginBottom: 10,
      borderStyle: "solid",
      borderColor: colorScheme === "dark" ? "papayawhip" : "#000",
      borderWidth: 1,
      borderRadius: 20,
      overflow: "hidden",
      alignSelf: "center",
      backgroundColor: colorScheme === "dark" ? "#1a1a1a" : "#fff",
    },
    menuTextRow: {
      width: "65%",
      paddingTop: 10,
      paddingLeft: 10,
      paddingRight: 5,
      flexGrow: 1,
    },
    menuItemTitle: {
      fontSize: 18,
      textDecorationLine: "underline",
      marginBottom: 4,
    },
    menuItemText: {
      color: theme.text,
    },
    menuImage: {
      width: 100,
      height: 100,
      margin: 10,
      borderRadius: 12,
    },
  });
}
