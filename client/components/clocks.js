import { useState, useEffect } from 'react';
import { baseURL } from '../utils/urls';

const url = baseURL + 'ids'

export default function Clocks() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  // const [selectedSession, setSelectedSession] = useState(null);

  // const ViewSessionDetails = (sessionId) => {
  //   setSelectedSession(sessionId)
  // }

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log('hihihi',data)
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No data</p>;

  let clocks = data

  return clocks
}