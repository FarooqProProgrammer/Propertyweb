import React from 'react';

const RawHTMLRenderer = ({ html,className }) => {
  return <div dangerouslySetInnerHTML={{ __html: html }} className={className} />;
};

export default RawHTMLRenderer;
