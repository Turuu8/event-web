import { DETAIL_TYPE } from "@/types";

export const StartDateFun = (props: number) => {
  const startDate = new Date(props).toISOString().slice(0, 10).split("-");
  return startDate;
};

export const UpcommingDate = (propsCon : DETAIL_TYPE) =>{ 
  let lowDays : string[] = [];
  const date = Date.now();
  const thisMount = new Date(date).toISOString().slice(0, 10).split("-")[1];
  const sameMonth = propsCon?.filter((el : DETAIL_TYPE) => StartDateFun(el.startDate)[1] === thisMount);

  const LowDays = (data) => { 
    let daysArr : string[]= [];
    let newDate : string[]= [];
    data?.map((el : DETAIL_TYPE) => daysArr.push(StartDateFun(el.startDate)[2]))
    let less : string = daysArr?.reduce((a, b) => Math.min(a, b))
      data?.map((el) => { 
        if(StartDateFun(el.startDate)[2] == less){
          lowDays.push(el)
        }
      })
    lowDays.map((el => newDate.push(data.filter((ele : DETAIL_TYPE) => ele.id !== el.id))))
    if(lowDays.length === 4){
      newDate = []
      return;
    }
    else{
      LowDays(newDate[newDate.length -1])
    }
  }
  LowDays(sameMonth);

  return lowDays
}