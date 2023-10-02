import React from 'react';
import {LayoutDiv} from './LayoutStyle';

function Layout({children, header}) {
  return (
    <div>
      {header}
      <LayoutDiv>
        {children}
      </LayoutDiv>
    </div>
  );
}

export default Layout;