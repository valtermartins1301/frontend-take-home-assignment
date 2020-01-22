import React from 'react';
import { string } from 'prop-types';

const propTypes = {
  width: string,
  height: string
};

const Logo = ({ width = '2.5em', height = '2.5em', ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 80 26" {...props}>
      <path
        d="M51.175 20.18l2.547 2.518c-4.455 4.403-11.68 4.403-16.135 0l2.547-2.519c3.05 3.013 7.994 3.013 11.041 0zM7.747 3.411c4.053 0 7.598 2.877 7.598 7.538 0 4.716-3.665 7.593-7.719 7.593C3.542 18.543 0 15.666 0 11.008c0-4.747 3.721-7.596 7.747-7.596zm19.853 0V7.21a7.507 7.507 0 00-1.321-.119c-2.102 0-4.294 1.07-4.294 3.798v7.508h-3.994V3.56h3.062l.542 1.633h.48c.661-.653 2.133-1.781 4.595-1.781h.93zm6.49.148v14.836h-3.844V3.56h3.843zm27.122 0v14.836h-3.844V3.56h3.844zm13.023-.148C78.108 3.412 80 6.26 80 10.354v8.043h-3.995v-7.152c0-.505.36-4.242-2.52-4.391-1.413-.088-3.934.68-3.934 4.568v6.975h-3.964V3.56h3.062l.51 1.812h.512c.628-.742 2.04-1.96 4.564-1.96zM54.552 0c0 2.367-1.275 4.44-3.183 5.584 1.063 1.255 1.712 2.926 1.712 4.919 0 4.719-3.663 7.596-7.717 7.596-4.085 0-7.629-2.877-7.629-7.536 0-4.51 3.361-7.306 7.15-7.574v-.022h3.061c1.66 0 3.002-1.328 3.002-2.967h3.604zM7.747 6.854c-2.282 0-3.814 1.809-3.814 4.124 0 2.314 1.532 4.123 3.814 4.123 2.283 0 3.663-1.81 3.663-4.123 0-2.315-1.38-4.124-3.663-4.124zm37.707-.326c-2.283 0-3.814 1.81-3.814 4.124 0 2.314 1.53 4.124 3.814 4.124 2.28 0 3.662-1.81 3.662-4.124 0-2.314-1.381-4.124-3.662-4.124z"
        fill="#1D1E1F"
        fillRule="evenodd"
      />
    </svg>
  );
};

Logo.propTypes = propTypes;

export { Logo };
