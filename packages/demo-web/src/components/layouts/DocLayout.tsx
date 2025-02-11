import { useEffect } from 'react';

export const DocLayout = ({ children }) => {
  useEffect(() => {
    import('../../../../components/z-button/dist/z-button.js');
    import('../../../../components/z-alert/dist/z-alert.js');
    import('../../../../components/z-icon/dist/z-icon.js');
    import('../../../../components/z-toggle-theme/dist/z-toggle-theme.js');
    import('../../../../components/z-color/dist/z-color.js');
  }, []);

  return <>{children}</>;
};
