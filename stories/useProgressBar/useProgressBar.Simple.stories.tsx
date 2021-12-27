import React, { FC } from 'react';
import useProgressBar, { ProgressBarProps } from '../../src/hooks/useProgressBar';
import { Meta } from '@storybook/react';

export const Simple = ({
  percentuage: percentuageDefault,
}: ProgressBarProps) => {
  const {
    increment,
    decrement,
    percentuage,
    reset,
    complete,
    empty,
    isCompleted,
    isEmpty,
  } = useProgressBar({
    percentuage: percentuageDefault,
    onChange: () => null,
    onComplete: () => null,
  });

  return (
    <div
      style={{
        height: '300px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ display: ' flex', marginBottom: '1rem' }}>
        <button onClick={() => increment(10)}>Increment</button>
        <button onClick={() => decrement(10)}>Decrement</button>
        <button onClick={reset}>Reset Bar</button>
        <button onClick={complete}>Complete Bar</button>
        <button onClick={empty}>Empty</button>
      </div>
      <div style={{ border: '1px solid red', width: '200px' }}>
        <div
          style={{
            height: '24px',
            width: `${percentuage}%`,
            background: 'green',
          }}
        ></div>
      </div>
    </div>
  );
};

const meta: Meta = {
  title: 'hooks/useProgressBar',
  component: Simple,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;
