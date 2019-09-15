import { get } from 'lodash';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { connect } from 'react-redux';
import { getVenueData } from '../selectors';

class MapDetail extends React.Component {
    static navigationOptions = {
        title: 'MapView'
    };

    render() {
        const { businesses, region } = this.props.venueData;
        const center = get(region, 'center', {});
        const initialRegion = {
            ...center,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }
        return (
            <SafeAreaView style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    initialRegion={initialRegion}
                >
                    {businesses.map(business => {
                        const coordinates = business.coordinates;
                        return (
                            <Marker
                                coordinate={coordinates}
                                title={business.name}
                            />
                        );
                    })
                    }
                </MapView>
            </SafeAreaView>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        venueData: getVenueData(state),
    };
};

export default connect(mapStateToProps, null)(MapDetail);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
    map: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        alignItems: 'center',
    },
});
