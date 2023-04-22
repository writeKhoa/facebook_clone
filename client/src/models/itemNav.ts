export interface ItemNavMidModel {
    Icon: () => JSX.Element;
    IconActive: () => JSX.Element;
    path: string;
    title: string;
}

export interface MenuNavRightItem {
    groupName: string;
    list: {
        title: string,
        desc: string,
        srcImg: string
    }[]
}