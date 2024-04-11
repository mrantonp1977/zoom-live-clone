import StreamVideoProvider from '@/providers/StreamClientProvider';
import { Metadata } from 'next';
import React, { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Zoom Live',
  description: 'Video calling app',
};


const Rootlayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>
        {children}
      </StreamVideoProvider>
    </main>
  );
};

export default Rootlayout;
