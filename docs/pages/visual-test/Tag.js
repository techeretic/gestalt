// @flow strict
import { type Node } from 'react';
import { Flex, Tag } from 'gestalt';

export default function Snapshot(): Node {
  return (
    <Flex
      direction="column"
      gap={{
        row: 0,
        column: 2,
      }}
    >
      <Tag onRemove={() => {}} removeIconAccessibilityLabel="Remove" text="New" />
      <Tag disabled text="Disabled" />
      <Tag
        onRemove={() => {}}
        errorMessage="NOPE"
        removeIconAccessibilityLabel="Remove"
        text="Error"
      />
      <Tag
        onRemove={() => {}}
        removeIconAccessibilityLabel="Remove"
        text="Some really long text that just keeps going on and on and on and on and on and on"
      />
    </Flex>
  );
}
