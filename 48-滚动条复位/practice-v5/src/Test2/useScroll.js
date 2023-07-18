import { useEffect } from 'react'
import resetScroll from '../resetScroll'

/**
 * pathname变化重新运行resetScroll
 */
export default function useScroll(pathname) {
    useEffect(resetScroll, [pathname])
}