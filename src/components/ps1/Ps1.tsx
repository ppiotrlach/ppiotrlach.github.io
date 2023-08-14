import React, { useEffect, useState } from 'react';
import { useTheme } from '../../utils/themeProvider';

export const Ps1 = () => {
  const [userType, setUserType] = useState('dreamer');
  const { theme } = useTheme();
  const where = " in "

  return (
    <div>
      <span
        style={{
          color: theme.brightPurple,
        }}
      >
        {userType}
      </span>
      <span
        style={{
          color: theme.white,
        }}
      >
        {where}
      </span>
      <span
        style={{
          color: theme.green,
        }}
      >
        projects/cv
      </span>
      <span
        style={{
          color: theme.white,
        }}
      >
        : 👽
      </span>
    </div>
  );
};

export default Ps1;