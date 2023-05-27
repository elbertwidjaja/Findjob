import { useState } from "react";
import axios from "axios";
import instance from "../instances";

const useHttpReq = ({
  method: defaultMethod = "get",
  path: defaultPath,
  reqConfig = {},
  defaultCallback,
  query: defaultQuery,
  useLoading = true,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleResponse = (response, callback) => {
    const { error, data } = response;

    if (callback) callback(error, data);

    return useLoading && !axios.isCancel(error) && setIsLoading(false);
  };

  const request = async (...params) => {
    const callback =
      typeof params[params.length - 1] === "function"
        ? params[params.length - 1]
        : defaultCallback;

    const {
      method = defaultMethod,
      body = null,
      path = defaultPath,
      config = reqConfig,
      query = defaultQuery,
    } = typeof params[0] === "object" ? params[0] : {};

    try {
      setIsLoading(true);

      const response = await instance({
        method,
        url: path,
        data: body,
        params: query,
        ...config,
      });

      handleResponse(response, callback);

      return response;
    } catch (error) {
      handleResponse({ error }, callback);
      return { error };
    }
  };

  return {
    request,
    isLoading,
  };
};

export default useHttpReq;
