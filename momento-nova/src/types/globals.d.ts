// import { StaticImageData } from "next/image";

declare module "*.css" {
  const content: Record<string, string>;
  export default content;
}

declare module "*.scss" {
  const content: Record<string, string>;
  export default content;
}

declare module "*.png" {
  import { StaticImageData } from "next/image";
  const value: StaticImageData;
  export default value;
}
declare module "*.jpg" {
  import { StaticImageData } from "next/image";
  const value: StaticImageData;
  export default value;
}
declare module "*.jpeg" {
  import { StaticImageData } from "next/image";
  const value: StaticImageData;
  export default value;
}
declare module "*.svg" {
  import { StaticImageData } from "next/image";
  const value: StaticImageData;
  export default value;
}
