import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem'
import useRepositories from '../hooks/useRepositories';
import Subheading from './Subheading';


const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});



const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { data, loading } = useRepositories();

  if (loading) return <Subheading>Loading ...</Subheading>;


  const repositoryNodes = data.repositories.edges.map(edge => edge.node)
    
  console.log(repositoryNodes)
  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}   
      renderItem={RepositoryItem}
      keyExtractor={item => item.id}
       />
  );
};

export default RepositoryList;