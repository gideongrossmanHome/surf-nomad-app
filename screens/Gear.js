import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Keyboard } from 'react-native';
import { Block, theme, Text } from 'galio-framework';

import { BuddyCard, Select, Button, Icon, Input, Header, Switch } from '../components';

import travelers from '../constants/travelers';
// import Input from '../components/Input';
// import Icon from '../components/Icon';
import { Images, nowTheme, articles, tabs } from '../constants';
const thumbMeasure = (width - 48 - 32) / 3;

const { width } = Dimensions.get('screen');

class Gear extends React.Component {
  renderBuddies = () => {
    let buddies = [];
    for (let i = 0; i < travelers.length; i++) {
      buddies.push(<BuddyCard item={travelers[i]} horizontal />);
    }
    return (
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.buddies}>
        <Block flex>{buddies}</Block>
      </ScrollView>
    );
  };

  render() {
    return (
      <Block flex center style={styles.home}>
        <Block center width={'80%'}>
          {this.renderSearch()}
        </Block>
        {this.renderFilters()}

        <Block flex>{this.renderBuddies()}</Block>
      </Block>
    );
  }
  renderFilters = () => {
    return (
      <Block center row style={styles.filters}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 0, width }}
        >
          <Block row space="evenly">
            <Block flex left>
              <Select
                defaultIndex={2}
                options={[
                  '15-20',
                  '20-25',
                  '25-30',
                  '30-35',
                  '35-40',
                  '40-45',
                  '45-50',
                  '50-55',
                  '55-60',
                  '65-70',
                  '70+',
                ]}
                initialValue="25-30"
              />
            </Block>
            <Block flex>
              <Select
                defaultIndex={2}
                options={['Beginner', 'Intermediate', 'Advanced']}
                initialValue="Advanced"
              />
            </Block>
            <Block flex >
              <Select
                defaultIndex={2}
                options={['Mar 2022', 'Jun 2022', 'Aug 2023']}
                initialValue="Mar 2022"
              />
            </Block>
          </Block>
        </ScrollView>
      </Block>
    );
  };
  renderSearch = () => {
    const { navigation } = this.props;
    return (
      <Input
        right
        color="black"
        style={styles.search}
        placeholder="Find mates"
        placeholderTextColor={'#8898AA'}
        // onFocus={() => {Keyboard.dismiss(); navigation.navigate('Pro')}}
        iconContent={
          <Icon size={16} color={theme.COLORS.MUTED} name="zoom-bold2x" family="NowExtra" />
        }
      />
    );
  };
}

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  buddies: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
    paddingHorizontal: 2,
    fontFamily: 'montserrat-regular',
  },
  filters: {
    paddingHorizontal: '5%',
  },
  select: {
    height: '80%',
  }
});

export default Gear;
