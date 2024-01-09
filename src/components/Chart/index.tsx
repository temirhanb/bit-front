import * as React from "react";
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import {Line} from "react-chartjs-2";

import styled from "@emotion/styled";
import {ITransactions} from "../types/transactions";
import {TimeLine} from "../../assets/icons";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

interface IProps {
  transaction: ITransactions[];
  email: string;
}

export const Chart: React.FC<IProps> = ({transaction, email}) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    },
    elements: {
      point: {
        radius: 0
      },
    },
    scales: {

      y: {
        position: "right",
        marginRight: 10,
        ticks: {
          color: "#616D8D",
          fontSize: 14,
        },
        grid: {
          drawBorder: false,
          color: "#222b44",
        },
      },
      x: {
        display: false
      }
    }
  };

  const labels = transaction.map(({created_at}, index) => {
    if (index === 0) return new Date(created_at).toLocaleDateString("ru", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
    return "";
  });

  const data = {
    labels,
    datasets: [
      {
        fill: "start",
        data: transaction.map(({amount}) => amount),
        borderColor: "#1C64F2",

        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 180);
          gradient.addColorStop(0, "rgba(28, 100, 242, .1)");
          gradient.addColorStop(1, "rgba(28, 100, 242, .08)");
          return gradient;
        },
      },
    ],
  };

  return (
    <ChartContainer>
      <Line options={options} data={data}/>
      <DataChar>{labels[0]}</DataChar>
      <TimeLine/>
      <ContainerLegend>
        <Rectangle/>
        <DataChar>{email}</DataChar>
      </ContainerLegend>
    </ChartContainer>
  );
};

const ChartContainer = styled.div`
  margin: 0 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid #222B44;
`;

const DataChar = styled.span`
  color: #616D8D;
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;

`;

const ContainerLegend = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;

  span {
    margin-left: 5px;
  }
`;

const Rectangle = styled.div`
  background-color: #1C64F2;
  height: 12px;
  width: 12px;
  border-radius: 2px;
`;