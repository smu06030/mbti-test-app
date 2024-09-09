import { API } from "../constants/api";
import { apiList } from "../utils/apiList";
import { jsonApi } from "./axios";

// 전체 테스트 결과 가져오기
export const getTestResults = async () => {
  try {
    const response = await jsonApi();
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// 테스트 결과 생성
export const createTestResult = async (resultData) => {
  try {
    const response = await jsonApi({
      ...apiList.postTestResult,
      data: resultData,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// 테스트 결과 삭제
export const deleteTestResult = async (id) => {
  try {
    const url = API.DELETE_RESULT(id);
    const response = await jsonApi({ ...apiList.deleteTestResult, url: url });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// 테스트 결과 업데이트
export const updateTestResultVisibility = async (updateValue) => {
  try {
    const { id, visibility } = updateValue;
    const url = API.UPDATE_RESULT(id);

    const response = await jsonApi({
      ...apiList.patchTestResult,
      url: url,
      data: { visibility: visibility },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
