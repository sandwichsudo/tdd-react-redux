let getResponse;

const __setMockGetResponse = (response) => {
  getResponse = response;
};

const _get = jest.fn(() => getResponse);

const xhr = {
  __setMockGetResponse,
  _get,
};

export default xhr;
