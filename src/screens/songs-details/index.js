import React, { Component } from "react";
import { View, Text, Button, Image } from "react-native";
import styles from "./style";

class SongDetails extends Component {
  render() {
    const { navigation, route } = this.props;
    const { song } = route.params;
    console.log("song", song);
    return (
      <View style={styles.container}>
        <Image source={{ uri: song.artworkUrl100 }} style={styles.image} />
        <Text style={styles.txt}>{song.artistName}</Text>
        {song.collectionName && (
          <Text style={styles.txt}>{song.collectionName}</Text>
        )}
        {song.trackCensoredName && (
          <Text style={styles.txt}>{song.trackCensoredName}</Text>
        )}
        {song.longDescription && (
          <Text style={styles.txt}>{song.longDescription}</Text>
        )}
        <Button
          style={styles.txt}
          title="Go Back"
          onPress={() => navigation.goBack()}
        />
      </View>
    );
  }
}

export default SongDetails;
