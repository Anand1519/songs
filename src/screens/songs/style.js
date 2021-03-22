import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    borderBottomWidth: 0.5,
    borderBottomColor: "gray",
  },
  imgConatiner: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  details: {
    flex: 2,
    padding: 10,
  },
  img: {
    width: "100%",
    height: 100,
  },
  txt: {
    color: "blue",
  },
  name: {
    color: "blue",
  },
  ago: {
    color: "blue",
    paddingLeft: 10,
  },
  nameDate: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
  },
});

export default styles;
