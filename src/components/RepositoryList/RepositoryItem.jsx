import {View, Image, StyleSheet } from 'react-native';
import Text from '../Text'
import Subheading from '../Subheading';
import  formatInThousands  from '../../utils/formatter'

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    padding: 17,
    backgroundColor: "#e6eff7",
  },
  infoContainer: {
    display: "flex",
    flexDirection: 'row',
    flexGrow: 2,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 10 ,
  },
  logoContainer: {
    flexGrow: 0,
    paddingRight: 15
  },
  info: {
    flexGrow: 1
  },
  statsContainer: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    paddingVertical: 8,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  languageContainer: {
    marginVertical: 10,
    alignItems: 'flex-start',
  },
  language: {
    flexGrow: 0,
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#0f77d4",
    color: '#fff',
  },
  descriptionContainer: {
    flexDirection:'row'
  },
  description: {
    flex: 1,
    flexWrap: 'wrap'
  }
  });

const RepositoryItem = ({item}) => {
    return (
        <View testID="repositoryItem" style={styles.container}>
           <View style={styles.infoContainer} >     
                <View style={styles.logoContainer}>
                  <Image style={styles.logo} source={{uri: `${item.ownerAvatarUrl}`}}/>  
                </View>     
                <View style={styles.info}>
                    <Subheading color="textPrimary">{item.fullName}</Subheading>
                    <View style={styles.descriptionContainer}>
                      <Text style={styles.description}>{item.description}</Text>
                    </View>
                    <View style={styles.languageContainer}>
                      <Text style={styles.language}>{item.language}</Text>
                    </View>
                </View>
           </View>
            <View style={styles.statsContainer}>
                <View >
                <Subheading color="textPrimary">{formatInThousands(item.stargazersCount)}</Subheading>
                    <Text>Stars</Text>
                </View>
                <View>
                <Subheading color="textPrimary">{formatInThousands(item.forksCount)}</Subheading>
                    <Text>Forks</Text>
                </View>
                <View >
                <Subheading color="textPrimary">{item.reviewCount}</Subheading>
                    <Text>Reviews</Text>
                </View>
                <View >
                <Subheading color="textPrimary">{item.ratingAverage}</Subheading>
                    <Text>Rating</Text>
                </View>
            </View>    
        </View>
    )
}

export default RepositoryItem