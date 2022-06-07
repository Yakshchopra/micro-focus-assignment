import React from 'react';
import { Radio } from 'antd';
import type { RadioChangeEvent } from 'antd';
import 'antd/dist/antd.css';
import { useStateValue } from '../../store/StateProvider';

const Selector = () => {
  const [{ position }, dispatch] = useStateValue();

  /**
   * @param {RadioChangeEvent} e
   * event handler for the handleChange function
   */

  const handleChange = (e: RadioChangeEvent) => {
    dispatch({
      type: 'SET_POSITION',
      position: e.target.value,
    });

    dispatch({
      type: 'SET_SNAP',
      snapper: true,
    });
  };

  return (
    <div className='flex items-center gap-5'>
      <p className='text-custom-blue font-medium mb-0 handwritten text-2xl'>
        Position:
      </p>
      <div className=''>
        <Radio.Group
          value={position}
          onChange={handleChange}
          className='bg-red'
        >
          <Radio value='center'>Center</Radio>
          <Radio value='bottom'>Lower Right</Radio>
        </Radio.Group>
      </div>
    </div>
  );
};

export default Selector;
