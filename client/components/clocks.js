import { useState, useEffect } from 'react';
import { baseURL } from '../utils/urls';
import ClockSummary from './clockSummary';

const url = baseURL + 'ids'

export default function Clocks() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [selectedClock, setSelectedClock] = useState(null);

  const ViewSessionDetails = (sessionId) => {
    setSelectedClock(sessionId)
  }

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No data</p>;

  let clocks = <>
    {
      data.map((el, key) => <ClockSummary props={el._id} />)
    }
  </>

  return clocks
}