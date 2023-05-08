import { StyleSheet, View, } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import FormValues from './SignIn/index';
import AppBar from './AppBar/index';
import RepositoryList from './RepositoryList/index';
import SingleRepository from './RepositoryList/SingleRepositoryView';
import CreateReview from './ReviewForm/index';
import SignUp from './SignUp/index'
import UserReviewList from './UserReviews/index'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: "#a4c8ed",
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/repository/:id" element={<SingleRepository />} exact />
        <Route path="/signin" element={<FormValues />} exact />
        <Route path="/signup" element={<SignUp />} exact />
        <Route path="/review" element={<CreateReview />} exact />
        <Route path="/userreview" element={<UserReviewList />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;