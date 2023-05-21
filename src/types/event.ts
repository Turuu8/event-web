export interface EVENT_TYPE {
     title: string
     id: string,
     location: string
     mount: string
     day: string
     img: string
     detail: DETAIL_TYPE
};
export interface DETAIL_TYPE  {
     top: string;
     time: string;
     price: string;
     day: string;
     place: string;
     textTitle: string;
     textDetail:  string;
     textDetail1?:  undefined | string;
}
