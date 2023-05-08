import { FlatList, View, StyleSheet, Pressable, Alert } from "react-native"
import { useNavigate } from 'react-router-native'; 
import { format } from 'date-fns'
import Text from "../Text"
import Subheading from "../Subheading"
import theme from '../../theme'
import useCurrentUserReviews from "../../hooks/useCurrentUserReviews"
import useDeleteReview from "../../hooks/useDeleteReview";

const styles = StyleSheet.create({
    utilityContainer: {
        display: "flex",
        flexDirection: "column"
    },
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
    },
    buttonsContainer: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: '#e6eff7',
        padding: 15,
        justifyContent: "space-between",
        alignItems: "center",
    },
    buttonContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      buttonBlue: {
        width: 170,
        backgroundColor: "#0f77d4",
        color: '#fff',
        flexGrow: 0,
        padding: 15,
        borderRadius: 5,
        textAlign: 'center',
      },
      buttonRed: {
        width: 170,
        backgroundColor: "#DC143C",
        color: '#fff',
        flexGrow: 0,
        padding: 15,
        borderRadius: 5,
        textAlign: 'center',
      }
  });


const SingleReview = ( {review} ) => {
    const navigate = useNavigate();
    const formatedDate = format(new Date(review?.createdAt), 'dd.MM.yyyy')
    const {deleteReviewHook} = useDeleteReview()

    const deleteReview = async(review) => {
        try {
            await deleteReviewHook({reviewId: review.id})
        }catch (e) {
            console.log(e);
          }
    }

    const handleView = () => {
        navigate(`/repository/${review.repository.id}`);
    }

    const handleDelete = () => {
        Alert.alert('Delete review', 'Are you sure you want to delete?',  [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {text: 'Delete', onPress: () => deleteReview(review)},
            ]);
    }
   return (
    <View style={styles.utilityContainer}>
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
        <View style={styles.buttonsContainer}>
                <Pressable onPress={handleView} style={styles.buttonContainer} >
                        <Subheading style={styles.buttonBlue}>View repository</Subheading>
                </Pressable>
                <Pressable onPress={handleDelete} style={styles.buttonContainer} >
                        <Subheading style={styles.buttonRed}>Delete review</Subheading>
                </Pressable>
            </View>    
    </View>
   )
}

const UserReviewList = () => {
    const data = useCurrentUserReviews()
    const reviews = data?.me?.reviews
    const reviewNodes = reviews ? reviews.edges.map((edge) => edge.node) : []

    return (
        <FlatList
        data={reviewNodes}
        renderItem={({ item }) => <SingleReview review={item} />}
        keyExtractor={({ id }) => id}
      />
    );
}

export default UserReviewList