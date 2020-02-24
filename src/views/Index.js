import React from 'react';

import Navigation from 'components/Navigation';
import { navigationItems } from 'config';

function Index(props) {
  const { children } = props;

  return (
    <main>
      <Navigation items={navigationItems} />

      {children}
    </main>
  );
}

export default Index;
