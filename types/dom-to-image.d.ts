declare module 'dom-to-image' {
  const domtoimage: {
    toJpeg(
      node: Node,
      options?: {
        quality?: number;
        width?: number;
        height?: number;
        [key: string]: unknown;
      }
    ): Promise<string>;
  };

  export default domtoimage;
}
