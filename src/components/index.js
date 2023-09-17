import { Image, StyleSheet, TouchableOpacity } from "react-native"

export const MoviesCards = (props) => {
    return (
        <TouchableOpacity>
            <Image style={styles.img} source={props.movieURL} ></Image>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    img: {
        marginRight: 20,
    },
});