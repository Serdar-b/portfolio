declare module "*.svg" {
  import React from 'react';
  const SVGComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVGComponent;
}

declare module "*.svg?url" {
  const content: string;
  export default content;
}
