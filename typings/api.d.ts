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

  type CategoryInfo = {
    text:string;
    href:string;
  }

  /** 推荐作品 */
  export type RecommendItem = {
    /** 作品名称 */
    name: string;
    /** 封面图片 */
    coverImage: string;
    /** 作品链接 */
    href: string;
    /** 作品类型 */
    type: CategoryInfo;
    /** 作品分类 */
    category: CategoryInfo;
    /** 作品地区 */
    region: CategoryInfo;
    /** 作者 */
    author: CategoryInfo;
  }

  /** 首页信息 */
  export type HomeInfo = {
    /** 轮播图 */
    swipe: SwipeItem[];
    recommends: RecommendItem[];
  };

  /** 首页信息接口返回 */
  export type HomeInfoRes = Response<HomeInfo>;

}
