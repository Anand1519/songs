import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import styles from "./style";
import { Loader } from "../../component";
import { getSongs } from "../../services/songs";
import moment from "moment";

const Item = ({ name, src, releaseDate, about }) => (
  <View style={styles.container}>
    <View style={styles.imgConatiner}>
      <Image
        style={styles.img}
        source={{
          uri: src,
        }}
      />
    </View>
    <View style={styles.details}>
      <Text style={styles.title}>{about}</Text>
      <View style={styles.nameDate}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.ago}>{moment(releaseDate).fromNow()}</Text>
      </View>
    </View>
  </View>
);

class Songs extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, songs: [] };
  }
  async componentDidMount() {
    let songs = await getSongs();
    this.setState({ songs, loading: false });
  }
  renderItem = ({ item }) => {
    const { navigation } = this.props;
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("SongDetail", { song: item })}
      >
        <Item
          about={item.collectionName}
          name={item.artistName}
          src={item.artworkUrl100}
          releaseDate={item.releaseDate}
        />
      </TouchableOpacity>
    );
  };

  render() {
    const { loading, songs } = this.state;
    return (
      <>
        <Loader loading={loading} />
        <SafeAreaView>
          <FlatList
            data={songs}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.artistId}
          />
        </SafeAreaView>
      </>
    );
  }
}

export default Songs;
