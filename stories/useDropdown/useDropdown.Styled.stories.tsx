import React, { FC } from 'react';
import useDropdown, { DropdownProps } from '../../src/hooks/useDropdown';
import { Meta } from '@storybook/react';

export const Styled: FC<DropdownProps> = ({
  isOpen = false,
  disableTriggerClick = false,
  openListOnTriggerHover = false,
  closeListOnListLeave = false,
  closeListOnClickOutside = false,
}) => {
  const { trigger, list, isListOpen } = useDropdown({
    isOpen,
    disableTriggerClick,
    openListOnTriggerHover,
    closeListOnListLeave,
    closeListOnClickOutside,
  });

  return (
    <div style={{ position: 'relative' }}>
      <div>
        <button
          style={{
            background: '#f6f6f6',
            border: '1px solid #acacac',
            padding: '5px 10px',
            fontSize: '14px',
            cursor: 'pointer',
          }}
          {...trigger}
        >
          Open Dropdown
        </button>
      </div>
      {isListOpen && (
        <ul
          style={{
            border: '1px solid black',
            padding: '10px 15px',
            listStyle: 'none',
            position: 'absolute',
            background: 'white',
            width: '200px',
          }}
          {...list}
        >
          <li>
            <a href="#">Item 1</a>
          </li>
          <li>
            <a href="#">Item 2</a>
          </li>
          <li>
            <a href="#">Item 3</a>
          </li>
        </ul>
      )}
      <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
    </div>
  );
};

const meta: Meta = {
  title: 'hooks/useDropdown',
  component: Styled,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;
