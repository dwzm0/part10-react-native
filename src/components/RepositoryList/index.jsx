import useRepositories from '../../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';
import { useNavigate } from 'react-router-native';
import { useState } from 'react';
import {useDebounce} from 'use-debounce'

const RepositoryList = () => {
  const [order, setOrder] = useState('LATEST_ADDED')
  const [search, setSearch] = useState('')
  const [debounceSearch] = useDebounce(search, 100)
  const { repositories, fetchMore } = useRepositories({first: 4, order, searchKeyword: debounceSearch});
  const navigate = useNavigate();

  const onEndReach = () => {
    fetchMore();
  };

  return <RepositoryListContainer onEndReach={onEndReach} repositories={repositories} navigate={navigate} order={order} setOrder={setOrder} search={search} setSearch={setSearch}/>;
};

export default RepositoryList;