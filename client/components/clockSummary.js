import ClockDetails from "./clockDetails";
import { useState } from 'react';

export default function ClockSummary({props}) {

  const [detailsAreShown, setDetailsAreShown] = useState(false);
//  console.log('clocksummary', props)

  return (
      <div className="flex flex-col">
        <tr onClick={() => setDetailsAreShown(!detailsAreShown)} className='bg-slate-200 flex flex-col'>
          <td key="{props}" scope="col" className="px-6 py-3 text-center">{props}</td>
          <hr className="mx-16"></hr>
          <ClockDetails id={props} />
        </tr>
      </div>
  );
}
