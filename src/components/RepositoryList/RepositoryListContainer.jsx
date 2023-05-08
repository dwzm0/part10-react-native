import React from 'react';
import { StyleSheet, View, FlatList, Pressable} from 'react-native';
import RepositoryItem from './RepositoryItem'
import {Picker} from '@react-native-picker/picker';
import TextInput from '../TextInput';
import theme from '../../theme';

const ItemSeparator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
    inputContainer: {
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderRadius: 5,
      margin: 5,
      borderWidth: 2,
      borderColor: "#18191a",
      fontSize: theme.fontSizes.subheading
    }
  });

const KeyWordSearch = ({search, setSearch}) => {
  return (
  <View style={styles.inputContainer}>
    <TextInput value={search} onChangeText={(text) => setSearch(text)} placeholder='Search' autoFocus />
  </View>
  )
} 

const ListHeader = ({order, setOrder}) => {
  return (
    <>
    <Picker
      selectedValue={order}
      onValueChange={(itemValue) =>
        setOrder(itemValue)
      }>
        <Picker.Item label="By latest added" value="LATEST_ADDED" />
        <Picker.Item label="Highest rating" value="HIGHEST_RATING" />
        <Picker.Item label="Lowest rating" value="LOWEST_RATING" />
    </Picker>
  </>
  )
}

const GeneralHeadListComponent = ({order, setOrder, search, setSearch}) => {
  return (
    <>
      <KeyWordSearch  search={search} setSearch={setSearch} />
      <ListHeader order={order} setOrder={setOrder} />
    </>
  )
}

class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    return <GeneralHeadListComponent {...this.props}/>
}

  render() {
    const repositoryNodes = this.props.repositories
      ? this.props.repositories.edges.map((edge) => edge.node)
      : [];

    const pressableItem = ({item}) => {
      const handlePress = () => this.props.navigate(`/repository/${item.id}`)

      return (
        <Pressable onPress={handlePress}>
            <RepositoryItem item={item} />
        </Pressable>
      )
    } 

    return (
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={pressableItem}
        ListHeaderComponent={this.renderHeader}
        keyExtractor={item => item.id}
        onEndReached={this.props.onEndReach}
        onEndReachedThreshold={0.5}
      />
    );
  }
}

export default RepositoryListContainer