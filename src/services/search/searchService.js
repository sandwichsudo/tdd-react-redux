import xhr from '../../xhr/xhr';

const repoSearch = async () => {
  const { data } = await xhr._get('/search/repositories?q=language:javascript&sort=stars&order=desc');
  return data;
};

export default {
  repoSearch,
};
