import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator, NativeModules } from 'react-native';
import FastImage from 'react-native-fast-image';
import { connect } from 'react-redux';
import { getVenueList } from '../actions/HomeAction';
import { getVenueData } from '../selectors';
import colors from '../theme/colors';
import MapIcon from '../svg/MapIcon'
import StarIcon from '../svg/StarIcon';

class Home extends React.Component {

    static defaultProps = {
        venueData: {}
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Home',
            headerRight: (
                <TouchableOpacity style={{ paddingRight: 16 }}
                    onPress={() => navigation.navigate('Map')} >
                    <MapIcon />
                </TouchableOpacity>
            )
        }
    };

    componentDidMount() {
        this.props.getVenueList();
        NativeModules.Analytics.trackScreen();
    }

    onItemClick = () => {
        this.props.navigation.navigate('Detail');
    }

    renderItem = (item) => {
        return (
            <TouchableOpacity onPress={() => this.onItemClick()}
                activeOpacity={0.8}>
                <View style={styles.item}>
                    <FastImage
                        style={styles.image}
                        source={{
                            uri: item.imageUrl,
                            priority: FastImage.priority.normal,
                        }}
                    />
                    <View style={styles.infoContainer}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.rating}>{item.isClosed ? "CLOSED" : "OPEN"}</Text>
                    </View>
                    <View style={styles.ratingContainer}>
                        <Text style={styles.rating}>{item.rating}</Text>
                        <StarIcon />
                    </View>

                </View>
            </TouchableOpacity>
        );
    }

    render() {
        const data = this.props.venueData.businesses;
        return (
            <SafeAreaView style={styles.container}>
                {data && < FlatList
                    data={data}
                    renderItem={({ item }) => this.renderItem(item)}
                    keyExtractor={item => item.id}
                />}
                {!data && <ActivityIndicator size="large" color={colors.orange} />}
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        venueData: getVenueData(state),
    };
};

const mapDispatchToProps = {
    getVenueList
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    item: {
        paddingHorizontal: 16,
        marginTop: 30
    },
    image: {
        flex: 1,
        aspectRatio: 1
    },
    name: {
        fontSize: 17,
        fontWeight: 'bold',
        color: colors.grey
    },
    rating: {
        fontSize: 14,
        color: colors.grey,
        marginRight: 2
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 7,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignContent: 'center'
    }
})

