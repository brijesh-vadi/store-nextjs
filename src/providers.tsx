'use client';

import { ThemeProvider } from './theme-provider';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider attribute='class' defaultTheme='dark' enableSystem disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </>
  );
};

export default Providers;
