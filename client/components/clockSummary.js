import ClockDetails from "./clockDetails";
import { useState } from 'react';

export default function ClockSummary({props}) {

  const [detailsAreShown, setDetailsAreShown] = useState(false);
  console.log('summ', props)

  return (
      <div>
        <tr onClick={() => setDetailsAreShown(!detailsAreShown)} className='cursor-pointer w-40'>
          <td key="{props._id}" scope="col" className="px-6 py-3 border-y-2  w-50	text-center">{props}</td>
        </tr>
        <ClockDetails id={props} detailsAreShown={detailsAreShown} />
      </div>
  );
}
