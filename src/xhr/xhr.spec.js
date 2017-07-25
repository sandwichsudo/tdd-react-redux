import xhr from './xhr';

describe('errorHandler', () => {
  it('should return rejected promise if response property of request is falsey', async (done) => {
    const request = { message: 'Something went wrong' };
    try {
      await xhr.errorHandler(request);
      done.fail();
    } catch (error) {
      expect(error).toEqual({
        message: 'Something went wrong',
      });
      done();
    }
  });

  it('should return rejected promise with data if request has error status code', async (done) => {
    const request = {
      response: {
        data: 'foo',
        status: 400,
      },
    };
    try {
      await xhr.errorHandler(request);
      done.fail();
    } catch (error) {
      expect(error).toEqual('foo');
      done();
    }
  });

  it('should return request object if no error', async (done) => {
    const request = {
      response: {
        data: 'foo',
        status: 200,
      },
    };
    try {
      const returnedRequest = await xhr.errorHandler(request);
      expect(returnedRequest).toEqual(request);
      done();
    } catch (err) {
      done.fail();
    }
  });
});
