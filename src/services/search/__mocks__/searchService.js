let searchResponse;
const __setMockReposSearch = (response) => {
  searchResponse = response;
};
const repoSearch = jest.fn(() => searchResponse);

export default {
  __setMockReposSearch,
  repoSearch,
};
