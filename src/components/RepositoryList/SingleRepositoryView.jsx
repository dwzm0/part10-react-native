import { FlatList, View, StyleSheet } from "react-native"
import { format } from 'date-fns'
import Text from "../Text"
import theme from '../../theme'
import Subheading from "../Subheading"
import { useParams } from "react-router-native"
import { useQuery } from "@apollo/client"
import { GET_SINGLE_REPOSITORY,  } from "../../graphql/queries"
import RepositoryItem from "./RepositoryItem"
import useRepository from "../../hooks/useRepository"

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        paddingVertical: 10,
        backgroundColor: "#e6eff7",
        flexDirection: "row",
        marginTop: 10,
      },
    infoRatingContainer: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1,
        marginRight: 10,
    },
    infoContainer: {
        flex: 4,
    },
    ratingContainer: {
        borderColor: "#1b61d1",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 45 / 2,
        borderStyle: 'solid',
        borderWidth: 3,
        height: 45,
        width: 45,
    },  
    rating: {
        color: "#1b61d1",
        fontWeight: theme.fontWeights.bold
    } 
  });

const SingleRepositoryInfo = () => {
    const { id } = useParams()
    const {data, loading} = useQuery(GET_SINGLE_REPOSITORY, {
        variables: { repositoryId: id },
        fetchPolicy: "cache-and-network",
    })

    if (loading) return <Text>ZZZ..</Text> 

    return <RepositoryItem item={data?.repository} showButton/>
}

export const SingleRepositoryReview = ( {review} ) => {
    const formatedDate = format(new Date(review?.createdAt), 'dd.MM.yyyy')
   return (
    <View style={styles.container}>
        <View style={styles.infoRatingContainer}>
            <View style={styles.ratingContainer}>
                <Text style={styles.rating}>{review.rating}</Text>
            </View>
        </View>
            <View style={styles.infoContainer}>
                <Subheading color={"textPrimary"}>{review.user.username}</Subheading>
                <Text>{formatedDate}</Text>
                <Text>{review.text}</Text>
            </View>
    </View>
   )
}

const SingleRepository = () => {
    const { id } = useParams()
    const { repository, fetchMore } = useRepository({first: 7, repositoryId: id});

    const onEndReach = () => {
        fetchMore();
      };
      console.log(repository);

    const reviews = repository?.reviews
    const reviewNodes = reviews ? reviews.edges.map((edge) => edge.node) : []

    return (
      <FlatList
        data={reviewNodes}
        renderItem={({ item }) => <SingleRepositoryReview review={item} />}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={() => <SingleRepositoryInfo />}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
      />
    );
  };
  
export default SingleRepository