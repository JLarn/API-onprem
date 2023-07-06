import { useState } from 'react';
import Clocks from './clocks';

export default function SingleBatch({props}) {

  const [detailsAreShown, setDetailsAreShown] = useState(false);
  console.log('summ', props)

  return (
      <div className='bg-blue-400 flex w-3/5 justify-center'>
        <tr onClick={() => setDetailsAreShown(!detailsAreShown)} className='w-4/5 flex flex-col border-4 border-red-400'>
          <td key="{props.n_batch}" scope="col" className="px-6 py-3 w-50	text-center text-lg font-bold">Batch number: {props.n_batch} | Batch date: {new Date(props.data_batch).toLocaleDateString()}</td>
          <hr className='mx-28'></hr>
          {/* <td key="{props.data_batch}" scope="col" className="px-6 py-3   w-50	text-center">Batch date: {new Date(props.data_batch).toLocaleDateString()}</td> */}
          <div className='flex flex-col'>
            <Clocks n_batch={props.n_batch} />
          </div>
        </tr>
      </div>
  );
}
