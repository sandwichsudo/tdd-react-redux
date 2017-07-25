const initialState = {
  results: [{
    name: 'foo',
    stargazers_count: 100,
    id: '1',
  },{
    name: 'bar',
    stargazers_count: 70,
    id: '2',
  },{
    name: 'baz',
    stargazers_count: 50,
    id: '3',
  }],
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
