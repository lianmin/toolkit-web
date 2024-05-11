import { useDebounce } from 'ahooks';
import { Input, Space, Typography } from 'antd';
import md5 from 'md5';
import { useState } from 'react';

const { Paragraph: P } = Typography;

export default function MD5() {
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value, { wait: 500 });

  return (
    <Space direction="vertical" size={16}>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        allowClear
      />
      <P>MD5: {debouncedValue ? md5(debouncedValue) : '-'}</P>
    </Space>
  );
}
