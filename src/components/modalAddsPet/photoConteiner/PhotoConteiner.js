import React from 'react';

import {
  AddIconsPhoto,
  AddPhoto,
  ImageSss,
} from 'components/modalAddsPet/photoConteiner/PhotoConteiner.styled';

const PhotoConteiner = ({ file, setFile, isErrorFile }) => {
  return (
    <>
      {!file ? (
        <AddPhoto>
          <AddIconsPhoto />
          <input
            as="input"
            type="file"
            name="avatar"
            hidden={true}
            size={50000}
            accept=".png, .jpg, .jpeg, .webp"
            onChange={e => {
              setFile({
                url: URL.createObjectURL(e.target.files[0]),
                avatar: e.target.files[0],
              });
            }}
          />
        </AddPhoto>
      ) : (
        <ImageSss src={file.url} alt="pet" width="208" height="208" />
      )}

      {!isErrorFile && !file && (
        <div style={{ color: '#8b0000' }}>{'Field reqiured!'}</div>
      )}
    </>
  );
};

export { PhotoConteiner };
