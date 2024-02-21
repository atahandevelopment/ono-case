import { Element3, FlashCircle, DocumentText ,I3Square, Profile, Setting2 } from "iconsax-react";

export const MenuList = [
    {
        name: 'Dashboard',
        route: '/dashboard',
        icon: <Element3 size="24" variant="Bold"/>,
    },
    {
        name: 'Campaign',
        route: '/campaign',
        icon: <FlashCircle size="24" variant="Bold"/>,
    },
    {
        name: 'Audience',
        route: '/',
        icon: <Profile size="24" variant="Bold"/>,
    },
    {
        name: 'Flows',
        route: '/flows',
        icon: <I3Square size="24" variant="Bold"/>,
    },
    {
        name: 'Content',
        route: '/content',
        icon: <DocumentText size="24" variant="Bold"/>,
    },
    {
        name: 'Settings',
        route: '/settings',
        icon: <Setting2 size="24" variant="Bold"/>,
    }
];