import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLoadingUpdate } from 'redux/user/selectors';
import { toggleIsDisablet } from 'redux/user/slice';
import { ReactComponent as UploadIcon } from '../../images/svg/camera.svg';
import { ReactComponent as UploadSubmit } from '../../images/svg/ci_edit.svg';
import { Photo, PhotoEdit, PhotoEditLab, PhotoEditText, PhotoContainer, PhotoEditSubmitWrapper, UserPhotoWrapper, PhotoEditSubmitBtn } from 'components/userData/styles/UserData.styles';

export const UserPhoto = ({ avatar, watch, register, onSubmit }) => {
	const [edited, setEdited] = useState(false);

	const isLoadingUpdate = useSelector(getLoadingUpdate);
	const dispatch = useDispatch();

	const newImage = watch('avatar');

	useEffect(() => {
		if (isLoadingUpdate) {
			setEdited(false);
		}
	}, [isLoadingUpdate]);

	useEffect(() => {
		if (newImage && newImage[0]) {
			setEdited(true);
			dispatch(toggleIsDisablet());
		}

	}, [dispatch, newImage]);

	return (
    <UserPhotoWrapper>
		<form onSubmit={onSubmit}>
			<PhotoContainer >
				<div>
					<Photo
						src={
							newImage && newImage[0]
								? URL.createObjectURL(newImage[0])
								: avatar
						}
					/>
				</div>
				<div >
					{newImage && newImage[0] && edited ? (
            <PhotoEditSubmitWrapper>
						<PhotoEditSubmitBtn type="submit" >
							<UploadSubmit fill="#F59256" width={23} height={23} />
							<PhotoEditText>Submit</PhotoEditText>
						</PhotoEditSubmitBtn>
          </PhotoEditSubmitWrapper>
					) : (
						<div>
							<PhotoEditLab htmlFor="avatar">
								  <UploadIcon fill="#F59256" width={18} height={18} />
								  <PhotoEditText >Edit photo</PhotoEditText>
							</PhotoEditLab>
							<PhotoEdit
								type="file"
								name="avatar"
								{...register('avatar')}
								id="avatar"
							/>
						</div>
					)}
				</div>
			</PhotoContainer>
		</form>
    </UserPhotoWrapper>
	);
};
