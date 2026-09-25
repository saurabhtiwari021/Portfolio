export type Song = {
  url: string;
  cover: string;
  title: string;
  channel: string;
};



export type UmamiStats = {

    pageviews: number;
    visitors: number;
    visits: number;
    bounces: number;
    totaltime: number; // total time in seconds
    comparison: {
      pageviews: number;
      visitors: number;
      visits: number;
      bounces: number;
      totaltime: number;
    };
  };


  export type ApiResponse<T = any> = {
    success: boolean;
    data?: T;
    message?: string;
};