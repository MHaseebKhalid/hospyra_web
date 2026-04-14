// components/layout/LayoutWrapper.tsx
'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import { ApolloProvider } from '@/providers/ApolloProvider';
import { JoinHospyraModalProvider } from '@/contexts/JoinHospyraModalContext';

export default function RootWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const isDashboard = pathname.startsWith('/dashboard');

    if (isDashboard) {
        return <>{children}</>; // ❌ No navbar, footer, providers
    }

    return (
        <ApolloProvider>
            <JoinHospyraModalProvider>
                <Navbar />
                {children}
                <Footer />
            </JoinHospyraModalProvider>
        </ApolloProvider>
    );
}