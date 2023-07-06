import { useState, useEffect } from "react";
import { baseURL, sessionBaseURL } from "../utils/urls";

const url = sessionBaseURL + "sessions_list/";

export default function ClockDetails({ id }) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    let a = fetch(url + id, {
      headers: {
        Bearer:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJiNzE4MjhhNi02NDg2LTQ2YTgtOWVlMC1kNDgyZjVkNDUyMmQiLCJuYmYiOjE2ODg2NDA3MTQsImV4cCI6MTY4OTI0NTUxNCwiaWF0IjoxNjg4NjQwNzE0LCJpc3MiOiJodHRwczovL3d3dy5jcGVyMmczLmNvbSIsImF1ZCI6Imh0dHBzOi8vd3d3LmVhcnRoNHNwb3J0LmNvbSJ9.y5IxSI6JVb3vykvrvx4koPNCLYdOns7-WwdlT6UvZw0",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        console.log(data, "asdasd ");
      });
    console.log(a);
  }, []);

  // console.log('iheriohed', data, 'ooo', url + id)

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No data</p>;

  // if (!detailsAreShown) return <></>;

  let errore;

  let details = (
    <>
      <div>
        {data.map((el) => {
          if(el.avgBpm < 40 || el.avgBpm > 250) errore = 'text-red-600'
          return (
            <> 
            <div className="border-x-2 bg-white border-slate-200 mx-20">
              <div className={"pl-[100px] flex pt-4 " + errore}>
                    <b>Session id: </b>
                    {el.id}
                </div>
                <div className={"flex pl-[100px] " + errore}>
                    <b>BPM: </b>
                    {el.avgBpm.toFixed(0)}
                </div>
              <hr className="mx-40"></hr>
            </div>
            </>
          );
        })}
      </div>
    </>
  );

  return details;
}
