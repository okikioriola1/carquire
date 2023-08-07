import { SelectedPage } from '@/shared/types';
import * as React from 'react'

import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage:(value:SelectedPage) => void;

}

const NavLink = ({page, selectedPage, setSelectedPage
}: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage

  return (
   <AnchorLink href={`#${lowerCasePage}`} onClick={()=>setSelectedPage(lowerCasePage)} className={`${selectedPage === lowerCasePage ? "text-[#00AFF5]" : "" }
   transition duration-500 hover:text-sky-500
   
   `}>
    {page}
   </AnchorLink>
  )
}

export default NavLink