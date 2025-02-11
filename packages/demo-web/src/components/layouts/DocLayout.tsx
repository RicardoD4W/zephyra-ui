import { useEffect } from 'react';

export const DocLayout = ({ children }) => {
  useEffect(() => {
    import('../../../../components/z-button/dist/z-button');
    import('../../../../components/z-alert/dist/z-alert');
    import('../../../../components/z-icon/dist/z-icon');
    import('../../../../components/z-toggle-theme/dist/z-toggle-theme');
    import('../../../../components/z-color/dist/z-color');
  }, []);

  return <>{children}</>;
};
