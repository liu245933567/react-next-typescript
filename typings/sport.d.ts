/** 接口相关 */
declare namespace Api {
  /** 响应信息 */
  export type Response<Result> = {
    isOk: boolean;
    message: string;
    code: string | number;
    result: Result | null;
  };

  /** 轮播图信息 */
  export type SwipeItem = {
    /** 图片地址 */
    href: string;
    /** 图片描述 */
    description: string;
  };

  /** 首页信息接口返回 */
  export type HomeInfo = Response<{
    /** 轮播图 */
    swipe: SwipeItem[];
  }>;
}
