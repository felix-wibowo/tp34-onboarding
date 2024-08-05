import {
  Card,
  Typography,
  CardBody,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";

interface Props {
  data: any[];
}
 
export function AccidentTable({data}: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 8; // Number of records per page

  const TABLE_HEAD = ["Accident Time", "Accident Type", "Road name", "Speed Zone", "Fatality", "Serious injury", "Other injury", "Non-injured"];

  useEffect(() => {
    console.log(data);
    setTotalPages(Math.ceil(data.length / pageSize));
  }, [data]);
  
  return (
    <>
    {data.length > 0 ? (
      <Card className="h-full w-full">        
        <CardBody className="overflow-scroll px-0">
          <table className="mt-4 w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head, _index) => (
                  <th
                    key={head}
                    className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                    >
                      {head}{" "}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
            {data.slice((currentPage - 1) * pageSize, currentPage * pageSize).map((
              { accident_no, accident_datetime, accident_type, road_name, road_type, serious_injury, other_injury, non_injured, fatality, speed_zone }, index) => {
                const isLast = index === (currentPage - 1) * pageSize;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                  //   const TABLE_HEAD = ["Accident Time", "Accident Type", "Road name", "Speed Zone", "Fatality", "Serious injury", "Other injury", "Non-injured"];

                return (
                  <tr key={accident_no} className="even:bg-blue-gray-50/50">
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {accident_datetime}
                      </Typography>
                    </td>                    
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {accident_type}
                      </Typography>
                    </td>           
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {`${road_name} ${road_type}`}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {speed_zone}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {fatality}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {serious_injury}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {other_injury}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {non_injured}
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardBody>

        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Page {currentPage} of {totalPages}
          </Typography>
          <div className="flex gap-2">
            <Button variant="outlined" size="sm" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
              Previous
            </Button>
            <Button variant="outlined" size="sm" onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>    
    ) : (<h1 className="text-3xl mb-8"><strong>No data available</strong></h1>)}
    </>
  );
}