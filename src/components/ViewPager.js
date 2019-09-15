import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { IndicatorViewPager, PagerDotIndicator } from 'rn-viewpager';
import FastImage from 'react-native-fast-image';
import colors from '../theme/colors';

export default class ViewPagerPage extends Component {

    static defaultProps = {
        data: []
    }

    render() {
        const { data } = this.props;
        return (
            <View style={styles.container}>
                <IndicatorViewPager
                    style={{ height: 500 }}
                    indicator={this._renderDotIndicator(data.length)}
                >
                    {this._renderPhotos(data)}
                </IndicatorViewPager>
            </View >
        );
    }


    _renderPhotos(photos) {
        return (
            photos.map((item) => {
                return (
                    <View>
                        <FastImage
                            style={styles.image}
                            source={{
                                uri: item,
                                priority: FastImage.priority.normal,
                            }}
                        />
                    </View>
                );
            })
        )
    }

    _renderDotIndicator(count) {
        return <PagerDotIndicator pageCount={count} />;
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white
    },
    image: {
        flex: 1,
        aspectRatio: 1,
        backgroundColor: colors.white
    },
})