import { getContentCall } from '@src/redux/api/content/contentAPICall';
import { GET_CONTENT_DATA } from '@src/redux/type';

export const getContentAction = (params) => {
  return async (dispatch) => {
    try {
      const response = await getContentCall(params);
      dispatch({ type: GET_CONTENT_DATA, data: response });
    } catch (error) {
      console.log('error: action:', error);
    }
  };
};
