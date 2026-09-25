import axios from "axios";
import type { GitHubStatsResponse } from "@/types/github";
import { ApiResponse, UmamiStats } from "@/types";

const api = axios.create({
  baseURL: "/api",
  headers: { "Content-Type": "application/json" },
});

export const githubApi = {
  getStats: async () => {
    try {
      const res = await api.get<ApiResponse<GitHubStatsResponse>>("/github");
      return res.data;
    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.data?.message) {
        const debug = err.response.data.debug;
        throw new Error(
          debug
            ? `${err.response.data.message} (${JSON.stringify(debug)})`
            : err.response.data.message,
        );
      }
      throw err;
    }
  },
};

export const viewsApi = {
  getStats: async () => {
    const res = await api.get<ApiResponse<UmamiStats>>("/views");
    return res.data;
  },
};

export const clientApi = {
  github: githubApi,
  views: viewsApi,
};
