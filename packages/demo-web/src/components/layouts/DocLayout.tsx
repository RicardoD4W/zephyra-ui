import { useEffect } from 'react';
import Head from '@docusaurus/Head';

export const DocLayout = ({ children }) => {
  useEffect(() => {
    import('../../../../components/z-button/dist/z-button.js');
    import('../../../../components/z-alert/dist/z-alert.js');
    import('../../../../components/z-icon/dist/z-icon.js');
    import('../../../../components/z-toggle-theme/dist/z-toggle-theme.js');
    import('../../../../components/z-color/dist/z-color.js');
    import('../../../../components/z-avatar/dist/z-avatar.js');
    import('../../../../components/z-vscroller/dist/z-vscroller.js');
  }, []);

  return (
    <>
      <Head>
        <style>
          {`z-alert:not(:defined),z-avatar:not(:defined),z-button:not(:defined),z-icon:not(:defined),z-toggle-theme:not(:defined),z-vscroller:not(:defined){display: none;}`}
        </style>
      </Head>
      {children}
    </>
  );
};
