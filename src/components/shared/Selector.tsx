import React from 'react';
import { Radio } from 'antd';
import 'antd/dist/antd.css';

const Selector = () => {
  return (
    <div className='flex items-center gap-5'>
      <p className='text-custom-blue font-medium mb-0'>Position:</p>
      <div className=''>
        <Radio.Group defaultValue='center' className='bg-red'>
          <Radio value='center'>Center</Radio>
          <Radio value='bottom'>Lower Right</Radio>
        </Radio.Group>
      </div>
    </div>
  );
};

export default Selector;
