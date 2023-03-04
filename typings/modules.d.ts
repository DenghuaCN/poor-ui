declare module '*.vue';
declare module 'vue3-highlightjs';
// 图片相关
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';
// .md文件
declare module '*.md' {
  const str: string
  export default str
}

// 第三方插件...