import { useState, useEffect } from 'react';
import { baseURL } from '../utils/urls';
import ClockSummary from './clockSummary';
import SingleBatch from './singleBatch';

const url = baseURL + 'batches/all'

export default function Batches() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [selectedBatch, setSelectedBatch] = useState(null);

  const viewClocks = (batchN) => {
    setSelectedBatch(batchN)
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

  let batches = <>
    <div className='flex flex-col items-center'>
    {
      data.map((el, key) => <SingleBatch props={el} /> )
    }
    </div>
  </>

  return batches
}