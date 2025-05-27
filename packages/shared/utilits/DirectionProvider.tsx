'use client';
import { ReactNode } from 'react';
import useDirection from '../utilits/useDirection';

export default function DirectionProvider({ children }: { children: ReactNode }) {
    useDirection();

    return <>{children}</>;
}