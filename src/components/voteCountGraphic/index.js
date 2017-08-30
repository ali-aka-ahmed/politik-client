import React from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';

const VoteCountGraphic = ({votesFor, votesAgainst, callback}) => {
    return (
        <View>
            <Text>{votesFor}</Text>
            <Text>VS</Text>
            <Text>{votesAgainst}</Text>
        </View>
    )
};

export default VoteCountGraphic;