import { LogListWrap, LogTotal } from "../../styles/ui/logliststyle";
import LogListItem from "./LogListItem";

const PastLogList = props => {
  return (
    <>
      <LogTotal>
        총 기록 <em>{props.totalLogList}</em> 건
      </LogTotal>
      <LogListWrap>
        {props.loglist.map(item => (
          <LogListItem
            on="past"
            key={item.imedia}
            pic={item.pic}
            title={item.title}
            date={item.date}
            star={item.star}
            imedia={item.imedia}
          />
        ))}
      </LogListWrap>
    </>
  );
};

export default PastLogList;
