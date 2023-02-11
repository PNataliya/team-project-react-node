import React, { useState } from 'react';

import PropTypes from 'prop-types';
import {
  AddButton,
  IconCross,
  ButtonName,
  Circle,
  Wrapper,
} from 'components/addNoticeButton/AddNoticeButton.styled';

import { ModalAddNotice } from 'components/modalAddNotice/ModalAddNotice';
import { ModalsLayout } from 'components/modalsLayout/ModalsLayout';

export const AddNoticeButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <AddButton>
        <Circle>
          <IconCross />
        </Circle>
        <ButtonName onClick={() => setIsOpen(true)} type="button">
          Add pet
        </ButtonName>

        <ModalsLayout isOpen={isOpen} setIsOpen={setIsOpen}>
          <ModalAddNotice setIsOpen={setIsOpen} />
        </ModalsLayout>
      </AddButton>
    </Wrapper>
  );
};

AddNoticeButton.propTypes = {
  onClick: PropTypes.func,
};
