import { useState, useEffect } from 'react';
import { baseURL } from '../utils/urls';
import ClockSummary from './clockSummary';

const url = baseURL + 'batches/'

export default function Clocks({n_batch}) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [selectedClock, setSelectedClock] = useState(null);

  const ViewSessionDetails = (sessionId) => {
    setSelectedClock(sessionId)
  }

  useEffect(async () => {
    setLoading(true);
    await fetch(url + n_batch)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No data</p>;

  // if (!detailsAreShown) return <></>

//  console.log(data, url + n_batch, 'AAAAAA')

  let clocks = <>
    {
      data.map((el, key) => <ClockSummary props={el._id} />)
    }
  </>

  return clocks
}