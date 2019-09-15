import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { connect } from 'react-redux';
import { getReviews as reviewData } from '../selectors';
import { getReviews } from '../actions/DetailAction';
import colors from '../theme/colors';
import { get } from 'lodash';

class Reviews extends React.Component {

    static defaultProps = {
        reviews: []
    }

    componentDidMount() {
        this.props.getReviews()
    }


    renderItem = (item) => {
        const user = item.user;
        return (
            <View style={styles.item}>
                <FastImage
                    style={styles.image}
                    source={{
                        uri: user.imageUrl,
                        priority: FastImage.priority.normal,
                    }}
                />
                <View style={{ paddingHorizontal: 10 }}>
                    <Text style={styles.name}>{user.name}</Text>
                    <Text style={styles.rating}>{item.text}</Text>
                </View>
            </View>
        );
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={this.props.reviews}
                    renderItem={({ item }) => this.renderItem(item)}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        reviews: reviewData(state),
    };
};

const mapDispatchToProps = {
    getReviews
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        marginTop: 30,
        flexDirection: 'row'
    },
    image: {
        height: 100,
        width: 100

    },
    name: {
        fontSize: 17,
        fontWeight: 'bold',
        color: colors.grey
    },
    rating: {
        fontSize: 14,
        color: colors.grey
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 7,
    }
})
