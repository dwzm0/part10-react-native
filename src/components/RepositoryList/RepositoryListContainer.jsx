import { StyleSheet } from 'react-native';
import { FlatList, View} from 'react-native';
import RepositoryItem from './RepositoryItem'
const ItemSeparator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
  });


const RepositoryListContainer = ({ repositories }) => {
    const repositoryNodes = repositories
      ? repositories.edges.map((edge) => edge.node)
      : [];
  
    return (
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}   
        renderItem={RepositoryItem}
        keyExtractor={item => item.id}
         />
    );
  };

export default RepositoryListContainer