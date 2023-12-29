import axios from "axios";
import { redirect } from "react-router-dom";
import httpConfig from "../config/http.config";

const httpCache = new Map();

const axiosInit = axios.create({
	timeout: 20000,
	baseURL: httpConfig.baseUrl,
	headers: {
		"Content-Type": "application/json;charset=utf-8",
	},
	withCredentials: process.env.NODE_ENV !== "production",
});

axiosInit.interceptors.request.use((_) => {
	httpCache.set(_.url, true);
	if (!_.headers) {
	}
	
	return _;
});

axiosInit.interceptors.response.use(
	(_) => {
		const url = _.config.url;
		httpCache.delete(url);
		cache.set(url, {
			status: _.status,
			statusText: _.statusText,
			headers: _.headers,
			config: _.config,
			code: 200,
			msg: "success",
			data: _.data.data,
			time: Date.now(),
		});
		switch (_.data?.code) {
			case 200:
				return {
					status: _.status,
					statusText: _.statusText,
					headers: _.headers,
					config: _.config,
					code: 200,
					msg: "success",
					data: _.data.data,
				};
			case 500:
				message.error(_.data.message);
				return {
					status: _.status,
					statusText: _.statusText,
					headers: _.headers,
					config: _.config,
					code: _.data?.code,
					msg: _.data.message,
					data: null,
				};
			default:
				return {
					status: _.status,
					statusText: _.statusText,
					headers: _.headers,
					config: _.config,
					code: _.data?.code,
					msg: _.data.message,
					data: _.data.data,
				};
		}
	},
	(err) => {
		const status = err.response.status;
		switch (status) {
			case 401:
                localStorage.clear();
                // location.href = location.origin + "/login";
				break;
			default:
				break;
		}
	}
);

const requestIntercept = (
	url
) => {
	const _ = cache.get(url);
	const time = Date.now();
	const isRequest = httpCache.get(url);
	if (typeof isRequest != undefined) {
		if (isRequest) {
			return Promise.resolve(_ ?? {});
		}
	}
	if (_) {
		const __ = _;
		if (time < (__.time ?? 0) + 1000) {
			cache.set(url, {
				..._,
				time,
			});
			return Promise.resolve({ ..._ });
		} else {
			return url;
		}
	} else {
		return url;
	}
};

export const get = (url, params) =>
	typeof requestIntercept(url) === "string"
		? axiosInit({
				url: requestIntercept(url),
				params,
				method: "GET",
		  })
		: (requestIntercept(url));

export const post = (url, data) =>
	typeof requestIntercept(url) === "string"
		? axiosInit({
				url: requestIntercept(url),
				data,
				method: "POST",
		  })
		: (requestIntercept(url));
