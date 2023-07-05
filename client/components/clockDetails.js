import { useState, useEffect } from 'react';
import { baseURL } from '../utils/urls';

const url = baseURL

export default function ClockDetails({ id, detailsAreShown }) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url + id)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);


  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No data</p>;


  if (!detailsAreShown) return <></>

  let details = (
        <div className='flex'>
          {/* <p> {new Date(data.data_batch)}</p> */}
          <div className='flex'> <th>Data: </th>{new Date(data.data_batch).toLocaleDateString()}</div>
          <div className='flex'> <th>Batch: </th>{data.n_batch}</div>
        </div>
  )

  return details
}