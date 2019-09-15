import React from 'react';
import { SafeAreaView, StyleSheet, Text, Linking, TouchableOpacity, View, ScrollView, ActivityIndicator } from 'react-native';
import colors from '../theme/colors';
import { connect } from 'react-redux';
import { getVenueDetail as venueDetail } from '../selectors';
import { getVenueDetail } from '../actions/DetailAction';
import ViewPagerPage from '../components/ViewPager';
import { get } from 'lodash'
import Reviews from '../components/Reviews';

class Detail extends React.Component {

    static defaultProps = {
        venueData: {}
    }

    static navigationOptions = {
        title: 'Detail'
    };

    componentDidMount() {
        this.props.getVenueDetail()
    }

    openLink(data) {
        Linking.openURL(data);
    }

    _renderName(venueData) {
        return (
            <View style={styles.nameContainer}>
                <Text style={styles.name}>{venueData.name}
                    <Text> ({get(venueData, 'location.city', "")})</Text>
                </Text>
                <Text style={styles.rating}>{venueData.isClosed ? "CLOSED" : "OPEN"}</Text>
            </View>
        )
    }

    _renderMoreInfo(venueData) {
        const phone = get(venueData, 'displayPhone', "");
        const url = get(venueData, 'url', "");
        return (
            <React.Fragment>
                <Text style={styles.address}>{get(venueData, 'displayAddress', "")}</Text>
                <TouchableOpacity onPress={() => this.openLink('tel:' + phone)}>
                    <Text style={styles.phone}>{phone}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.openLink(url)}>
                    <Text style={styles.phone}>MoreDetails</Text>
                </TouchableOpacity>
            </React.Fragment>
        );
    }

    _renderReviews() {
        return (
            <View style={styles.containerReviews}>
                <Text style={styles.name}>REVIEWS</Text>
                <View style={styles.divider}></View>
                <Reviews />
            </View>
        )
    }

    render() {
        const { venueData } = this.props
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    {venueData.name && <ScrollView>
                        <ViewPagerPage data={venueData.photos} />
                        {this._renderName(venueData)}
                        {this._renderMoreInfo(venueData)}
                        {this._renderReviews()}
                    </ScrollView>}
                    {!venueData.name && <ActivityIndicator size="large" color={colors.orange} />}
                </View>
            </SafeAreaView>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        venueData: venueDetail(state),
    };
};

const mapDispatchToProps = {
    getVenueDetail
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: colors.white,
        justifyContent: 'center'
    },
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    name: {
        fontSize: 17,
        fontWeight: 'bold',
        color: colors.grey,
    },
    address: {
        marginTop: 5,
        fontSize: 14,
        color: colors.grey
    },
    phone: {
        fontSize: 14,
        color: colors.orange
    },
    containerReviews: {
        flex: 1,
        marginTop: 30
    },
    divider: {
        height: 1,
        backgroundColor: colors.orange,
        flex: 1
    }
});
