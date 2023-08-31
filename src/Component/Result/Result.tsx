import style from "./Result.module.scss";
import { Result } from "@/utils/type";
import { FC } from "react";
import Card from "./Card";
interface ResultProps {
  result: Result[];
}

const ResultItem: FC<ResultProps> = ({ result }): JSX.Element => {
  return (
    <div className={style.result}>
      {result.map((result) => {
        return <Card key={result.id} result={result} />;
      })}
    </div>
  );
};

export default ResultItem;
