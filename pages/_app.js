import '../styles/globals.css'
import '../styles/header.css'
import '../styles/footer.css'
import '../styles/filters.css'
import '../styles/product-grid.css'
import '../styles/product-detail.css'
import '../styles/cart.css'
import '../styles/wishlist.css'
import '../styles/wip.css'
import '../styles/profile.css'
import '../styles/layout.css'
import dynamic from 'next/dynamic'

export const SearchIcon = dynamic(() => import('lucide-react').then(mod => mod.Search), { ssr: false })
export const HeartIcon = dynamic(() => import('lucide-react').then(mod => mod.Heart), { ssr: false })
export const Trash2Icon = dynamic(() => import('lucide-react').then(mod => mod.Trash2), { ssr: false })
export const ShoppingBagIcon = dynamic(() => import('lucide-react').then(mod => mod.ShoppingBag), { ssr: false })
export const UserIcon = dynamic(() => import('lucide-react').then(mod => mod.User), { ssr: false })
export const MenuIcon = dynamic(() => import('lucide-react').then(mod => mod.Menu), { ssr: false })
export const XIcon = dynamic(() => import('lucide-react').then(mod => mod.X), { ssr: false })
export const StarIcon = dynamic(() => import('lucide-react').then(mod => mod.Star), { ssr: false })
export const ChevronDownIcon = dynamic(() => import('lucide-react').then(mod => mod.ChevronDown), { ssr: false })
export const ChevronUpIcon = dynamic(() => import('lucide-react').then(mod => mod.ChevronUp), { ssr: false })
export const InstagramIcon = dynamic(() => import('lucide-react').then(mod => mod.Instagram), { ssr: false })
export const LinkedinIcon = dynamic(() => import('lucide-react').then(mod => mod.Linkedin), { ssr: false })

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
