import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {codeLinks} from '@site/src/codeLinks';

export default function CodeBlockLineToken({line, token, className, style, children, ...rest}) {
  const href = token.types.includes('function') ? codeLinks[token.content] : undefined;
  if (href) {
    return (
      <Link to={href} className={clsx(className, 'code-token-link')} style={style}>
        {children}
      </Link>
    );
  }
  return (
    <span className={className} style={style} {...rest}>
      {children}
    </span>
  );
}
