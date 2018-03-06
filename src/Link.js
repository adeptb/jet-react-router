import React from 'react';

const Link = (props) => {
    const { path, children } = props;
    return <a style={{display: 'inline-block', margin: 20}} href={`#${path}`}>{children}</a>
}

export default Link;