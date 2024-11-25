import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
  Platform,
} from "react-native";
import axios from "axios";
import Icon from "react-native-vector-icons/Ionicons";

interface NewsItem {
  link: string;
  title: string;
  pubDate: string;
  description: string;
  thumbnail: string;
}

const HomeScreen = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [filteredNews, setFilteredNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchVisible, setSearchVisible] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://api-berita-indonesia.vercel.app/merdeka/terbaru/"
        );
        setNews(response.data.data.posts);
        setFilteredNews(response.data.data.posts);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = news.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredNews(filtered);
  };

  const renderItem = ({ item }: { item: NewsItem }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        console.log(`Opening: ${item.link}`);
      }}
    >
      <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {item.description}
        </Text>
        <Text style={styles.pubDate}>
          {new Date(item.pubDate).toLocaleDateString()}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {searchVisible ? (
          <TextInput
            style={styles.searchInput}
            placeholder="Cari berita..."
            value={searchQuery}
            onChangeText={handleSearch}
            autoFocus={true}
          />
        ) : (
          <Text style={styles.headerTitle}>Selamat menikmati berita terkini!</Text>
        )}
        <View style={styles.headerIcons}>
          <Icon
            name={searchVisible ? "close-outline" : "search-outline"}
            size={28}
            color="#333"
            style={styles.icon}
            onPress={() => {
              setSearchVisible(!searchVisible);
              if (searchVisible) {
                setSearchQuery("");
                setFilteredNews(news);
              }
            }}
          />
          <Icon name="notifications-outline" size={28} color="#333" style={styles.icon} />
        </View>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#007BFF" />
      ) : (
        <FlatList
          data={filteredNews}
          renderItem={renderItem}
          keyExtractor={(item) => item.link}
          contentContainerStyle={styles.list}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: Platform.OS === "ios" ? 0 : 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    flex: 1,
  },
  headerIcons: {
    flexDirection: "row",
  },
  icon: {
    marginLeft: 15,
  },
  searchInput: {
    flex: 1,
    fontSize: 18,
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  list: {
    paddingHorizontal: 10,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginBottom: 15,
    borderRadius: 8,
    overflow: "hidden",
    elevation: 2,
  },
  thumbnail: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  content: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  description: {
    fontSize: 14,
    color: "#666",
  },
  pubDate: {
    fontSize: 12,
    color: "#999",
  },
});

export default HomeScreen;
